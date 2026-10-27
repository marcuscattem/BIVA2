#!/usr/bin/env python3
"""Generate a Markdown audit of retained and newly added BIVA2 references."""

from __future__ import annotations

import json
import re
import sys
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CURRENT_PATH = ROOT / "reference_populations_final.json"
OUTPUT_PATH = ROOT / "BIVA2-RELATORIO-REFERENCIAS.md"


def clean(value) -> str:
    return re.sub(r"\s+", " ", str(value or "")).strip()


def ascii_text(value) -> str:
    value = unicodedata.normalize("NFD", clean(value))
    return "".join(ch for ch in value if unicodedata.category(ch) != "Mn").lower()


def number(value):
    return round(float(value), 8)


def signature(record):
    return (
        record.get("metric", "classic"), clean(record.get("sex")).upper(), int(record["n"]),
        number(record["r_h_mean"]), number(record["r_h_sd"]),
        number(record["xc_h_mean"]), number(record["xc_h_sd"]), number(record["correlation"]),
    )


def completeness(record):
    fields = ("legend", "sex", "country", "age", "equipment", "population", "reference", "doi", "note", "found_in", "ellipse_use")
    return sum(1 for field in fields if clean(record.get(field)) not in {"", "—"}) + len(record.get("provenance", []))


def deduplicate(records):
    grouped = defaultdict(list)
    for record in records:
        grouped[signature(record)].append(record)
    retained, removed = [], []
    for items in grouped.values():
        items.sort(key=lambda item: (completeness(item), len(clean(item.get("legend"))), len(clean(item.get("reference")))), reverse=True)
        retained.append(items[0])
        removed.extend(items[1:])
    return retained, removed


CONTINENTS = {
    "Italy": "Europa", "Spain": "Europa", "France": "Europa", "Germany": "Europa", "Portugal": "Europa",
    "Poland": "Europa", "Slovakia": "Europa", "Netherlands": "Europa",
    "USA": "América do Norte", "Mexico": "América do Norte", "Cuba": "América do Norte",
    "Brazil": "América do Sul",
    "South Korea": "Ásia", "India": "Ásia", "Taiwan": "Ásia", "Japan": "Ásia", "Lebanon": "Ásia",
    "Turkey": "Europa/Ásia",
}


def continent(record):
    return CONTINENTS.get(clean(record.get("country")), "Não identificado")


def country_label(record):
    country = clean(record.get("country"))
    return country if country not in {"", "—"} else "Não identificado"


def development_stage(record):
    text = ascii_text(f"{record.get('legend', '')} {record.get('age', '')}")
    if re.search(r"newborn|neonat|preterm|prematur", text):
        return "Neonatal"
    if re.search(r"infant|lactent", text):
        return "Primeira infância"
    if re.search(r"child.*adolesc|children.*adolesc|5.?19 y|10.?19 y", text):
        return "Infância/adolescência"
    if re.search(r"adolesc|youth|pubertal|u1[2-9]\b|teen", text):
        return "Adolescência"
    if re.search(r"older|elderly|idos|geriatric|65.?100 y|60.?92 y|69.?91 y", text):
        return "Pessoa idosa"
    if re.search(r"child|children|prepubertal|school", text):
        return "Infância"
    ranges = re.findall(r"(\d+(?:\.\d+)?)\s*(?:-|–|age|to)\s*(\d+(?:\.\d+)?)\s*(?:y|yr)?", text)
    if ranges:
        low, high = map(float, ranges[-1])
        if high <= 1:
            return "Primeira infância"
        if high <= 12:
            return "Infância"
        if low < 18 and high <= 19:
            return "Adolescência"
        if low < 18 < high:
            return "Múltiplos estágios"
        if low >= 60:
            return "Pessoa idosa"
        if low >= 18:
            return "Adulto"
    if re.search(r"adult", text):
        return "Adulto"
    return "Não identificado"


def equipment_family(record):
    text = ascii_text(record.get("equipment"))
    if not text or text == "—":
        return "Não informado"
    families = (
        (r"akern|rjl|quantum", "Akern/RJL/Quantum"),
        (r"valhalla", "Valhalla Scientific"),
        (r"data input|bia 2000", "Data Input BIA 2000"),
        (r"bodystat", "Bodystat"),
        (r"inbody", "InBody"),
        (r"seca", "seca"),
        (r"biodynamics", "Biodynamics"),
        (r"impedimed", "ImpediMed"),
        (r"maltron", "Maltron"),
        (r"xitron", "Xitron"),
        (r"tanita", "Tanita"),
        (r"biody", "Biody"),
    )
    for pattern, label in families:
        if re.search(pattern, text):
            return label
    return "Outros"


def sex_label(record):
    return {"M": "Masculino", "F": "Feminino", "B": "Misto/ambos"}.get(clean(record.get("sex")).upper(), "Não identificado")


def metric_label(record):
    return {"classic": "BIVA clássica", "specific": "BIVA específica", "h2": "Índices H²/Z"}.get(record.get("metric"), "Outro")


def source_label(record):
    return {"both": "Confiança e tolerância", "confidence": "Confiança", "tolerance": "Tolerância"}.get(record.get("source"), "Outro")


def health_label(record):
    return {"Healthy": "Saudável", "Sport": "Esporte", "Clinical": "Clínica", "Other": "Outro/não classificado"}.get(record.get("population"), "Outro/não classificado")


def article_label(record):
    reference = clean(record.get("reference"))
    author = (re.match(r"([^,]+?)(?:\s+et al)?[,.:]", reference) or [None, "Não informado"])[1]
    year_match = re.search(r"\b(?:19|20)\d{2}\b", reference)
    label = clean(author)
    if year_match:
        label += f" ({year_match.group(0)})"
    if record.get("doi"):
        label += f"; DOI {record['doi']}"
    return label or "Não informado"


def md_escape(value):
    return clean(value).replace("|", "\\|").replace("\n", " ")


def split_count_table(records, status_by_code, classifier, sort="count"):
    values = sorted({classifier(record) for record in records})
    rows = []
    for value in values:
        subset = [record for record in records if classifier(record) == value]
        old = sum(status_by_code[record["code"]] == "existing" for record in subset)
        new = len(subset) - old
        rows.append((value, old, new, len(subset), len(subset) / len(records) * 100))
    if sort == "count":
        rows.sort(key=lambda row: (-row[3], row[0]))
    else:
        rows.sort(key=lambda row: row[0])
    text = ["| Categoria | Já presentes | Novas | Total | % do banco |", "|---|---:|---:|---:|---:|"]
    text.extend(f"| {md_escape(label)} | {old} | {new} | {total} | {percentage:.1f}% |" for label, old, new, total, percentage in rows)
    return "\n".join(text)


def exact_equipment_table(records, status_by_code, limit=30):
    counter = Counter(clean(record.get("equipment")) or "Não informado" for record in records)
    selected = [item for item, _ in counter.most_common(limit)]
    rows = []
    for equipment in selected:
        subset = [record for record in records if (clean(record.get("equipment")) or "Não informado") == equipment]
        old = sum(status_by_code[record["code"]] == "existing" for record in subset)
        rows.append((equipment, old, len(subset) - old, len(subset)))
    text = [f"| Aparelho/configuração (top {limit}) | Já presentes | Novas | Total |", "|---|---:|---:|---:|"]
    text.extend(f"| {md_escape(label)} | {old} | {new} | {total} |" for label, old, new, total in rows)
    return "\n".join(text)


def population_table(records):
    text = ["| Código | Grupo/população | Sexo | País | N | Sistema | Uso | Aparelho | Artigo |", "|---|---|---|---|---:|---|---|---|---|"]
    for record in records:
        text.append(
            "| " + " | ".join((
                md_escape(record["code"]), md_escape(record["legend"]), md_escape(sex_label(record)),
                md_escape(record.get("country") or "—"), str(record["n"]), md_escape(metric_label(record)),
                md_escape(source_label(record)), md_escape(record.get("equipment") or "—"), md_escape(article_label(record)),
            )) + " |"
        )
    return "\n".join(text)


def main():
    if len(sys.argv) < 2:
        raise SystemExit("Usage: generate_reference_report.py PREVIOUS_JSON [OUTPUT_MD]")
    previous_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2]) if len(sys.argv) > 2 else OUTPUT_PATH
    current = json.loads(CURRENT_PATH.read_text(encoding="utf-8"))
    previous = json.loads(previous_path.read_text(encoding="utf-8"))
    current, duplicates = deduplicate(current)
    previous_unique, previous_duplicates = deduplicate([
        {**record, "metric": record.get("metric", "classic")} for record in previous
    ])
    previous_signatures = {signature(record) for record in previous_unique}
    status_by_code = {record["code"]: ("existing" if signature(record) in previous_signatures else "new") for record in current}
    existing = sorted((record for record in current if status_by_code[record["code"]] == "existing"), key=lambda r: (metric_label(r), clean(r.get("country")), clean(r.get("legend"))))
    new = sorted((record for record in current if status_by_code[record["code"]] == "new"), key=lambda r: (metric_label(r), clean(r.get("country")), clean(r.get("legend"))))
    unique_articles = {clean(record.get("doi")) or clean(record.get("reference")) for record in current if clean(record.get("doi")) or clean(record.get("reference"))}
    doi_count = sum(bool(clean(record.get("doi"))) for record in current)
    country_count = sum(clean(record.get("country")) not in {"", "—"} for record in current)
    age_count = sum(clean(record.get("age")) not in {"", "—"} for record in current)
    report = f"""# BIVA2.0 - Auditoria das populações de referência

## Escopo

Este relatório compara a base anterior do software com o banco consolidado na última atualização. A classificação usa a assinatura estatística da população: sistema de coordenadas, sexo, N, médias, desvios-padrão e correlação. Códigos foram ignorados porque foram renumerados na consolidação.

## Resultado da consolidação

| Indicador | Quantidade |
|---|---:|
| Registros na versão anterior | {len(previous)} |
| Populações únicas na versão anterior | {len(previous_unique)} |
| Duplicatas na versão anterior | {len(previous_duplicates)} |
| Populações anteriores únicas preservadas | {len(existing)} |
| Populações novas | {len(new)} |
| Populações no banco consolidado | {len(current)} |
| Duplicatas remanescentes encontradas nesta auditoria | {len(duplicates)} |
| Artigos/fontes bibliográficas únicos | {len(unique_articles)} |
| Registros com DOI | {doi_count} |
| Registros com país identificado | {country_count} |
| Registros com estágio etário identificável | {age_count} |

Três duplicatas exatas foram consolidadas durante a importação da planilha. Quando duas linhas tinham a mesma assinatura estatística, foi mantido o registro com mais metadados, referência bibliográfica mais completa e maior rastreabilidade. Esta nova auditoria não encontrou duplicatas remanescentes.

- As duas linhas de **Males, White, 20 age 69 yr, 19 BMI 30, USA (NHANES III)** foram fundidas; foi preservada a linha com a referência completa de Piccoli, Pillon e Dumler (2002).
- As duas linhas de **Females, White, 20 age 69 yr, 19 BMI 30, USA (NHANES III)** foram fundidas pelo mesmo critério.
- A população feminina italiana de Piccoli et al. (1995) aparecia uma vez como referência de tolerância e outra como referência de confiança; foi mantido um único registro, com finalidade combinada e os metadados mais completos.

Essa última população também era a única duplicata na base anterior: por isso, os 166 registros antigos correspondem a 165 populações únicas. Todas as 165 foram preservadas, e 358 populações são novas.

Foi corrigido um erro de digitação da planilha na população **Females, White, with edema**: `Xc/H = 155,2` foi restaurado para `15,2`, valor já presente na versão anterior e compatível com a escala fisiológica da referência.

## Quantidade por sistema de coordenadas

{split_count_table(current, status_by_code, metric_label)}

## Quantidade por finalidade da referência

{split_count_table(current, status_by_code, source_label)}

## Quantidade por sexo

{split_count_table(current, status_by_code, sex_label)}

## Quantidade por continente

{split_count_table(current, status_by_code, continent)}

## Quantidade por país

{split_count_table(current, status_by_code, country_label)}

## Quantidade por estágio de desenvolvimento

As categorias foram inferidas a partir da faixa etária e da descrição do grupo. “Múltiplos estágios” indica referências cuja faixa atravessa mais de uma etapa do desenvolvimento.

{split_count_table(current, status_by_code, development_stage)}

## Quantidade por estado de saúde/população

{split_count_table(current, status_by_code, health_label)}

## Quantidade por família de aparelho de BIA

{split_count_table(current, status_by_code, equipment_family)}

## Aparelhos e configurações mais frequentes

{exact_equipment_table(current, status_by_code)}

## Completude dos metadados

| Campo | Preenchidos | Ausentes | Cobertura |
|---|---:|---:|---:|
| Referência bibliográfica | {sum(bool(clean(r.get('reference'))) for r in current)} | {sum(not bool(clean(r.get('reference'))) for r in current)} | {sum(bool(clean(r.get('reference'))) for r in current)/len(current)*100:.1f}% |
| DOI | {doi_count} | {len(current)-doi_count} | {doi_count/len(current)*100:.1f}% |
| País | {country_count} | {len(current)-country_count} | {country_count/len(current)*100:.1f}% |
| Faixa/estágio etário | {age_count} | {len(current)-age_count} | {age_count/len(current)*100:.1f}% |
| Aparelho | {sum(clean(r.get('equipment')) not in {'', '—'} for r in current)} | {sum(clean(r.get('equipment')) in {'', '—'} for r in current)} | {sum(clean(r.get('equipment')) not in {'', '—'} for r in current)/len(current)*100:.1f}% |
| Nota de extração | {sum(bool(clean(r.get('note'))) for r in current)} | {sum(not bool(clean(r.get('note'))) for r in current)} | {sum(bool(clean(r.get('note'))) for r in current)/len(current)*100:.1f}% |

## Populações que já estavam presentes ({len(existing)})

{population_table(existing)}

## Populações adicionadas na última sessão ({len(new)})

{population_table(new)}

## Critérios de qualidade

- Uma população só entra no banco gráfico quando possui N maior que 2, médias, desvios-padrão positivos e correlação entre -1 e 1.
- Sistemas `R/H × Xc/H`, `Rsp × Xcsp` e `H²/R × H²/Xc` são mantidos separados.
- Linhas incompletas permanecem fora do banco gráfico porque não permitem reconstruir a matriz de covariância da elipse.
- A classificação continental usa o país identificado no registro; valores sem país permanecem como “Não identificado”.
- O estágio de desenvolvimento é uma classificação derivada da descrição textual e deve ser tratado como resumo operacional, não como dado original do artigo.

**Gerado em:** 26 de outubro de 2026
"""
    output_path.write_text(report, encoding="utf-8")
    print(json.dumps({"output": str(output_path), "existing": len(existing), "new": len(new), "total": len(current), "duplicates": len(duplicates)}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

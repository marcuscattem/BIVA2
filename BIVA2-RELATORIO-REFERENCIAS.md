# BIVA2.0 - Auditoria das populações de referência

## Escopo

Este relatório compara a base anterior do software com o banco consolidado na última atualização. A classificação usa a assinatura estatística da população: sistema de coordenadas, sexo, N, médias, desvios-padrão e correlação. Códigos foram ignorados porque foram renumerados na consolidação.

## Resultado da consolidação

| Indicador | Quantidade |
|---|---:|
| Registros na versão anterior | 166 |
| Populações únicas na versão anterior | 165 |
| Duplicatas na versão anterior | 1 |
| Populações anteriores únicas preservadas | 165 |
| Populações novas | 358 |
| Populações no banco consolidado | 523 |
| Duplicatas remanescentes encontradas nesta auditoria | 0 |
| Artigos/fontes bibliográficas únicos | 69 |
| Registros com DOI | 299 |
| Registros com país identificado | 444 |
| Registros com estágio etário identificável | 299 |

Três duplicatas exatas foram consolidadas durante a importação da planilha. Quando duas linhas tinham a mesma assinatura estatística, foi mantido o registro com mais metadados, referência bibliográfica mais completa e maior rastreabilidade. Esta nova auditoria não encontrou duplicatas remanescentes.

- As duas linhas de **Males, White, 20 age 69 yr, 19 BMI 30, USA (NHANES III)** foram fundidas; foi preservada a linha com a referência completa de Piccoli, Pillon e Dumler (2002).
- As duas linhas de **Females, White, 20 age 69 yr, 19 BMI 30, USA (NHANES III)** foram fundidas pelo mesmo critério.
- A população feminina italiana de Piccoli et al. (1995) aparecia uma vez como referência de tolerância e outra como referência de confiança; foi mantido um único registro, com finalidade combinada e os metadados mais completos.

Essa última população também era a única duplicata na base anterior: por isso, os 166 registros antigos correspondem a 165 populações únicas. Todas as 165 foram preservadas, e 358 populações são novas.

Foi corrigido um erro de digitação da planilha na população **Females, White, with edema**: `Xc/H = 155,2` foi restaurado para `15,2`, valor já presente na versão anterior e compatível com a escala fisiológica da referência.

## Quantidade por sistema de coordenadas

| Categoria | Já presentes | Novas | Total | % do banco |
|---|---:|---:|---:|---:|
| BIVA clássica | 165 | 235 | 400 | 76.5% |
| Índices H²/Z | 0 | 98 | 98 | 18.7% |
| BIVA específica | 0 | 25 | 25 | 4.8% |

## Quantidade por finalidade da referência

| Categoria | Já presentes | Novas | Total | % do banco |
|---|---:|---:|---:|---:|
| Confiança e tolerância | 1 | 236 | 237 | 45.3% |
| Confiança | 132 | 101 | 233 | 44.6% |
| Tolerância | 32 | 21 | 53 | 10.1% |

## Quantidade por sexo

| Categoria | Já presentes | Novas | Total | % do banco |
|---|---:|---:|---:|---:|
| Feminino | 81 | 160 | 241 | 46.1% |
| Masculino | 84 | 157 | 241 | 46.1% |
| Misto/ambos | 0 | 34 | 34 | 6.5% |
| Não identificado | 0 | 7 | 7 | 1.3% |

## Quantidade por continente

| Categoria | Já presentes | Novas | Total | % do banco |
|---|---:|---:|---:|---:|
| Europa | 23 | 210 | 233 | 44.6% |
| América do Norte | 119 | 36 | 155 | 29.6% |
| Não identificado | 23 | 56 | 79 | 15.1% |
| América do Sul | 0 | 44 | 44 | 8.4% |
| Ásia | 0 | 12 | 12 | 2.3% |

## Quantidade por país

| Categoria | Já presentes | Novas | Total | % do banco |
|---|---:|---:|---:|---:|
| USA | 119 | 12 | 131 | 25.0% |
| Germany | 0 | 98 | 98 | 18.7% |
| Não identificado | 23 | 56 | 79 | 15.1% |
| Italy | 23 | 51 | 74 | 14.1% |
| Brazil | 0 | 44 | 44 | 8.4% |
| Spain | 0 | 34 | 34 | 6.5% |
| Cuba | 0 | 22 | 22 | 4.2% |
| Slovakia | 0 | 20 | 20 | 3.8% |
| Lebanon | 0 | 6 | 6 | 1.1% |
| South Korea | 0 | 6 | 6 | 1.1% |
| Portugal | 0 | 4 | 4 | 0.8% |
| Netherlands | 0 | 3 | 3 | 0.6% |
| Mexico | 0 | 2 | 2 | 0.4% |

## Quantidade por estágio de desenvolvimento

As categorias foram inferidas a partir da faixa etária e da descrição do grupo. “Múltiplos estágios” indica referências cuja faixa atravessa mais de uma etapa do desenvolvimento.

| Categoria | Já presentes | Novas | Total | % do banco |
|---|---:|---:|---:|---:|
| Adulto | 98 | 101 | 199 | 38.0% |
| Não identificado | 35 | 73 | 108 | 20.7% |
| Pessoa idosa | 18 | 41 | 59 | 11.3% |
| Infância/adolescência | 0 | 52 | 52 | 9.9% |
| Infância | 10 | 21 | 31 | 5.9% |
| Adolescência | 2 | 28 | 30 | 5.7% |
| Primeira infância | 0 | 30 | 30 | 5.7% |
| Neonatal | 0 | 8 | 8 | 1.5% |
| Múltiplos estágios | 2 | 4 | 6 | 1.1% |

## Quantidade por estado de saúde/população

| Categoria | Já presentes | Novas | Total | % do banco |
|---|---:|---:|---:|---:|
| Saudável | 3 | 262 | 265 | 50.7% |
| Outro/não classificado | 148 | 22 | 170 | 32.5% |
| Clínica | 14 | 37 | 51 | 9.8% |
| Esporte | 0 | 37 | 37 | 7.1% |

## Quantidade por família de aparelho de BIA

| Categoria | Já presentes | Novas | Total | % do banco |
|---|---:|---:|---:|---:|
| Akern/RJL/Quantum | 46 | 188 | 234 | 44.7% |
| Valhalla Scientific | 117 | 0 | 117 | 22.4% |
| Data Input BIA 2000 | 0 | 98 | 98 | 18.7% |
| Maltron | 0 | 22 | 22 | 4.2% |
| Xitron | 0 | 19 | 19 | 3.6% |
| ImpediMed | 0 | 8 | 8 | 1.5% |
| InBody | 0 | 8 | 8 | 1.5% |
| seca | 0 | 8 | 8 | 1.5% |
| Outros | 1 | 3 | 4 | 0.8% |
| Biody | 0 | 2 | 2 | 0.4% |
| Bodystat | 0 | 2 | 2 | 0.4% |
| Não informado | 1 | 0 | 1 | 0.2% |

## Aparelhos e configurações mais frequentes

| Aparelho/configuração (top 30) | Já presentes | Novas | Total |
|---|---:|---:|---:|
| Valhalla Scientific | 117 | 0 | 117 |
| Data Input BIA 2000-S (supine, 50 kHz) | 0 | 98 | 98 |
| Akern-RJL Systems | 44 | 0 | 44 |
| RJL 101-A | 0 | 24 | 24 |
| Maltron BioScan BL-960141 (supine) | 0 | 22 | 22 |
| Akern BIA 101 (supine) | 0 | 20 | 20 |
| RJL BIA 103-A | 0 | 18 | 18 |
| Akern BIA 101 Anniversary | 0 | 16 | 16 |
| Akern/RJL BIA-101 | 0 | 14 | 14 |
| Akern-RJL STA/BIA (recumbent) | 0 | 12 | 12 |
| Xitron Hydra 4200 (supine) | 0 | 10 | 10 |
| Akern BIA 101 BIVA PRO | 0 | 10 | 10 |
| Akern BIA-101 | 0 | 10 | 10 |
| Akern BIA 101 Anniversary (supine) | 0 | 9 | 9 |
| Akern | 0 | 9 | 9 |
| seca mBCA 552 (standing) | 0 | 8 | 8 |
| Akern BIA 101 | 0 | 6 | 6 |
| RJL 101 (supine) | 0 | 6 | 6 |
| InBody 770 (standing) | 0 | 6 | 6 |
| Xitron Hydra 4200 (lying) | 0 | 5 | 5 |
| Akern BIA-101 RJL (supine) | 0 | 4 | 4 |
| RJL Quantum Desktop RJL-101 | 0 | 4 | 4 |
| ImpediMed Imp DF50 (supine) | 0 | 4 | 4 |
| Akern BIA 101 / Anniversary / BIVA PRO | 0 | 4 | 4 |
| ImpediMed DF50 | 0 | 4 | 4 |
| RJL Quantum II BIA 103-A (dorsal decubitus) | 0 | 3 | 3 |
| RJL Quantum II | 0 | 3 | 3 |
| Akern BIA 101 (lying) | 0 | 3 | 3 |
| Akern BIA-101 (supine) | 0 | 3 | 3 |
| Z-Metrix (BioparHom) | 0 | 3 | 3 |

## Completude dos metadados

| Campo | Preenchidos | Ausentes | Cobertura |
|---|---:|---:|---:|
| Referência bibliográfica | 523 | 0 | 100.0% |
| DOI | 299 | 224 | 57.2% |
| País | 444 | 79 | 84.9% |
| Faixa/estágio etário | 299 | 224 | 57.2% |
| Aparelho | 522 | 1 | 99.8% |
| Nota de extração | 359 | 164 | 68.6% |

## Populações que já estavam presentes (165)

| Código | Grupo/população | Sexo | País | N | Sistema | Uso | Aparelho | Artigo |
|---|---|---|---|---:|---|---|---|---|
| ref-0366 | Females, White, 14 age 15 yr, BMI 21, Italy, | Feminino | Italy | 120 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0088 | Females, White, 16 age 85 yr, 16 BMI 31, Italy | Feminino | Italy | 372 | BIVA clássica | Confiança e tolerância | Valhalla Scientific | Piccoli A (1995) |
| ref-0376 | Males + Females, White, 1 age 7 days, BMI 13, Italy | Masculino | Italy | 163 | BIVA clássica | Tolerância | Akern-RJL Systems | Piccoli A (2002) |
| ref-0367 | Males + Females, White, 1 age 7 days, BMI 13, Italy, | Feminino | Italy | 163 | BIVA clássica | Tolerância | Akern-RJL Systems | Piccoli A (2002) |
| ref-0368 | Males + Females, White, 10 age 11 yr, BMI 17, Italy, | Feminino | Italy | 369 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0377 | Males + Females, White, 10 age 11 yr, BMI 17, Italy, | Masculino | Italy | 369 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0369 | Males + Females, White, 2 age 3 yr, BMI 16, Italy, | Feminino | Italy | 115 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0378 | Males + Females, White, 2 age 3 yr, BMI 16, Italy, | Masculino | Italy | 115 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0370 | Males + Females, White, 4 age 5 yr, BMI 16, Italy, | Feminino | Italy | 220 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0379 | Males + Females, White, 4 age 5 yr, BMI 16, Italy, | Masculino | Italy | 220 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0371 | Males + Females, White, 6 age 7 yr, BMI 16, Italy, | Feminino | Italy | 448 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0380 | Males + Females, White, 6 age 7 yr, BMI 16, Italy, | Masculino | Italy | 448 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0372 | Males + Females, White, age 12 yr, BMI 18, Italy, | Feminino | Italy | 132 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0381 | Males + Females, White, age 12 yr, BMI 18, Italy, | Masculino | Italy | 132 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0373 | Males + Females, White, age 13 yr, BMI 19, Italy, | Feminino | Italy | 116 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0382 | Males + Females, White, age 13 yr, BMI 19, Italy, | Masculino | Italy | 116 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0374 | Males + Females, White, age 8 yr, BMI 16, Italy, | Feminino | Italy | 227 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0383 | Males + Females, White, age 8 yr, BMI 16, Italy, | Masculino | Italy | 227 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0375 | Males + Females, White, age 9 yr, BMI 16, Italy, | Feminino | Italy | 200 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0384 | Males + Females, White, age 9 yr, BMI 16, Italy, | Masculino | Italy | 200 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0385 | Males, White, 14 age 15 yr, BMI 20, Italy, | Masculino | Italy | 97 | BIVA clássica | Tolerância | Akern-RJL Systems | De Palo T (2000) |
| ref-0386 | Males, White, 16 age 85 yr, 16 BMI 31, Italy | Masculino | Italy | 354 | BIVA clássica | Tolerância | Valhalla Scientific | Piccoli A (1995) |
| ref-0227 | Males, White, reference adults, Italy | Masculino | Italy | 354 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1995) |
| ref-0229 | Females, Black, 19 BMI 25, 20 age 29 | Feminino | USA | 207 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0230 | Females, Black, 19 BMI 25, 20 age 69 | Feminino | USA | 528 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0231 | Females, Black, 19 BMI 25, 30 age 39 | Feminino | USA | 167 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0232 | Females, Black, 19 BMI 25, 40 age 49 | Feminino | USA | 75 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0233 | Females, Black, 19 BMI 25, 50 age 59 | Feminino | USA | 35 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0234 | Females, Black, 19 BMI 25, 60 age 69 | Feminino | USA | 44 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0387 | Females, Black, 20 age 69 yr, 19 BMI 30, USA (NHANES III), | Feminino | USA | 1099 | BIVA clássica | Tolerância | Valhalla Scientific | Piccoli A (2002) |
| ref-0235 | Females, Black, 25 BMI 30, 20 age 29 | Feminino | USA | 146 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0236 | Females, Black, 25 BMI 30, 20 age 69 | Feminino | USA | 571 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0237 | Females, Black, 25 BMI 30, 30 age 39 | Feminino | USA | 155 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0238 | Females, Black, 25 BMI 30, 40 age 49 | Feminino | USA | 125 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0239 | Females, Black, 25 BMI 30, 50 age 59 | Feminino | USA | 61 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0240 | Females, Black, 25 BMI 30, 60 age 69 | Feminino | USA | 84 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0241 | Females, Black, 30 BMI 35, 20 age 29 | Feminino | USA | 75 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0242 | Females, Black, 30 BMI 35, 20 age 69 | Feminino | USA | 411 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0243 | Females, Black, 30 BMI 35, 30 age 39 | Feminino | USA | 103 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0244 | Females, Black, 30 BMI 35, 40 age 49 | Feminino | USA | 93 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0245 | Females, Black, 30 BMI 35, 50 age 59 | Feminino | USA | 68 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0246 | Females, Black, 30 BMI 35, 60 age 69 | Feminino | USA | 72 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0388 | Females, Mexican American, 18 age 60 yr, 17 BMI 38, USA, | Feminino | USA | 151 | BIVA clássica | Tolerância | Valhalla Scientific | Stolarczyk LM (1994) |
| ref-0247 | Females, Mexican American, 19 BMI 25, 20 age 29 | Feminino | USA | 219 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0248 | Females, Mexican American, 19 BMI 25, 20 age 69 | Feminino | USA | 475 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0249 | Females, Mexican American, 19 BMI 25, 30 age 39 | Feminino | USA | 122 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0250 | Females, Mexican American, 19 BMI 25, 40 age 49 | Feminino | USA | 56 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0251 | Females, Mexican American, 19 BMI 25, 50 age 59 | Feminino | USA | 29 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0252 | Females, Mexican American, 19 BMI 25, 60 age 69 | Feminino | USA | 49 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0389 | Females, Mexican American, 20 age 69 yr, 19 BMI 30, USA (NHANES III), | Feminino | USA | 1072 | BIVA clássica | Tolerância | Valhalla Scientific | Piccoli A (2002) |
| ref-0253 | Females, Mexican American, 25 BMI 30, 20 age 29 | Feminino | USA | 157 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0254 | Females, Mexican American, 25 BMI 30, 20 age 69 | Feminino | USA | 597 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0255 | Females, Mexican American, 25 BMI 30, 30 age 39 | Feminino | USA | 160 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0256 | Females, Mexican American, 25 BMI 30, 40 age 49 | Feminino | USA | 124 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0257 | Females, Mexican American, 25 BMI 30, 50 age 59 | Feminino | USA | 53 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0258 | Females, Mexican American, 25 BMI 30, 60 age 69 | Feminino | USA | 103 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0259 | Females, Mexican American, 30 BMI 35, 20 age 29 | Feminino | USA | 78 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0260 | Females, Mexican American, 30 BMI 35, 20 age 69 | Feminino | USA | 404 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0261 | Females, Mexican American, 30 BMI 35, 30 age 39 | Feminino | USA | 90 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0262 | Females, Mexican American, 30 BMI 35, 40 age 49 | Feminino | USA | 101 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0263 | Females, Mexican American, 30 BMI 35, 50 age 59 | Feminino | USA | 57 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0264 | Females, Mexican American, 30 BMI 35, 60 age 69 | Feminino | USA | 78 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0265 | Females, White, 19 BMI 25, 20 age 29 | Feminino | USA | 280 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0266 | Females, White, 19 BMI 25, 20 age 69 | Feminino | USA | 1009 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0267 | Females, White, 19 BMI 25, 30 age 39 | Feminino | USA | 261 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0268 | Females, White, 19 BMI 25, 40 age 49 | Feminino | USA | 182 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0269 | Females, White, 19 BMI 25, 50 age 59 | Feminino | USA | 146 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0270 | Females, White, 19 BMI 25, 60 age 69 | Feminino | USA | 140 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0390 | Females, White, 20 age 69 yr, 19 BMI 30, USA (NHANES III), | Feminino | USA | 1625 | BIVA clássica | Tolerância | Valhalla Scientific | Piccoli A (2002) |
| ref-0271 | Females, White, 25 BMI 30, 20 age 29 | Feminino | USA | 70 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0272 | Females, White, 25 BMI 30, 20 age 69 | Feminino | USA | 616 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0273 | Females, White, 25 BMI 30, 30 age 39 | Feminino | USA | 119 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0274 | Females, White, 25 BMI 30, 40 age 49 | Feminino | USA | 134 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0275 | Females, White, 25 BMI 30, 50 age 59 | Feminino | USA | 134 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0276 | Females, White, 25 BMI 30, 60 age 69 | Feminino | USA | 159 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0277 | Females, White, 30 BMI 35, 20 age 29 | Feminino | USA | 29 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0278 | Females, White, 30 BMI 35, 20 age 69 | Feminino | USA | 350 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0279 | Females, White, 30 BMI 35, 30 age 39 | Feminino | USA | 73 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0280 | Females, White, 30 BMI 35, 40 age 49 | Feminino | USA | 77 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0281 | Females, White, 30 BMI 35, 50 age 59 | Feminino | USA | 84 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0282 | Females, White, 30 BMI 35, 60 age 69 | Feminino | USA | 87 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0391 | Females, White, age 76 yr, BMI 25, USA (NMAPS), | Feminino | USA | 167 | BIVA clássica | Tolerância | — | Roubenoff R (1997) |
| ref-0392 | Females, White, age 78 yr, BMI 27, USA (FHS), | Feminino | USA | 294 | BIVA clássica | Tolerância | RJL Systems | Roubenoff R (1997) |
| ref-0283 | Males, Black, 19 BMI 25, 20 age 29 | Masculino | USA | 217 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0284 | Males, Black, 19 BMI 25, 20 age 69 | Masculino | USA | 643 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0285 | Males, Black, 19 BMI 25, 30 age 39 | Masculino | USA | 182 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0286 | Males, Black, 19 BMI 25, 40 age 49 | Masculino | USA | 115 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0287 | Males, Black, 19 BMI 25, 50 age 59 | Masculino | USA | 55 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0288 | Males, Black, 19 BMI 25, 60 age 69 | Masculino | USA | 74 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0393 | Males, Black, 20 age 69 yr, 19 BMI 30, USA (NHANES III), | Masculino | USA | 1254 | BIVA clássica | Tolerância | Valhalla Scientific | Piccoli A (2002) |
| ref-0289 | Males, Black, 25 BMI 30, 20 age 29 | Masculino | USA | 141 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0290 | Males, Black, 25 BMI 30, 20 age 69 | Masculino | USA | 611 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0291 | Males, Black, 25 BMI 30, 30 age 39 | Masculino | USA | 153 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0292 | Males, Black, 25 BMI 30, 40 age 49 | Masculino | USA | 139 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0293 | Males, Black, 25 BMI 30, 50 age 59 | Masculino | USA | 78 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0294 | Males, Black, 25 BMI 30, 60 age 69 | Masculino | USA | 100 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0295 | Males, Black, 30 BMI 35, 20 age 29 | Masculino | USA | 66 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0296 | Males, Black, 30 BMI 35, 20 age 69 | Masculino | USA | 293 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0297 | Males, Black, 30 BMI 35, 30 age 39 | Masculino | USA | 77 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0298 | Males, Black, 30 BMI 35, 40 age 49 | Masculino | USA | 57 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0299 | Males, Black, 30 BMI 35, 50 age 59 | Masculino | USA | 37 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0300 | Males, Black, 30 BMI 35, 60 age 69 | Masculino | USA | 56 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0301 | Males, Mexican American, 19 BMI 25, 20 age 29 | Masculino | USA | 288 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0302 | Males, Mexican American, 19 BMI 25, 20 age 69 | Masculino | USA | 554 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0303 | Males, Mexican American, 19 BMI 25, 30 age 39 | Masculino | USA | 119 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0304 | Males, Mexican American, 19 BMI 25, 40 age 49 | Masculino | USA | 53 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0305 | Males, Mexican American, 19 BMI 25, 50 age 59 | Masculino | USA | 29 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0306 | Males, Mexican American, 19 BMI 25, 60 age 69 | Masculino | USA | 65 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0394 | Males, Mexican American, 20 age 69 yr, 19 BMI 30, USA (NHANES III), | Masculino | USA | 1400 | BIVA clássica | Tolerância | Valhalla Scientific | Piccoli A (2002) |
| ref-0307 | Males, Mexican American, 25 BMI 30, 20 age 29 | Masculino | USA | 239 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0308 | Males, Mexican American, 25 BMI 30, 20 age 69 | Masculino | USA | 846 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0309 | Males, Mexican American, 25 BMI 30, 30 age 39 | Masculino | USA | 224 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0310 | Males, Mexican American, 25 BMI 30, 40 age 49 | Masculino | USA | 174 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0311 | Males, Mexican American, 25 BMI 30, 50 age 59 | Masculino | USA | 67 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0312 | Males, Mexican American, 25 BMI 30, 60 age 69 | Masculino | USA | 142 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0313 | Males, Mexican American, 30 BMI 35, 20 age 29 | Masculino | USA | 77 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0314 | Males, Mexican American, 30 BMI 35, 20 age 69 | Masculino | USA | 373 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0315 | Males, Mexican American, 30 BMI 35, 30 age 39 | Masculino | USA | 65 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0316 | Males, Mexican American, 30 BMI 35, 40 age 49 | Masculino | USA | 95 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0317 | Males, Mexican American, 30 BMI 35, 50 age 59 | Masculino | USA | 54 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0318 | Males, Mexican American, 30 BMI 35, 60 age 69 | Masculino | USA | 82 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0319 | Males, White, 19 BMI 25, 20 age 29 | Masculino | USA | 193 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0320 | Males, White, 19 BMI 25, 20 age 69 | Masculino | USA | 653 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0321 | Males, White, 19 BMI 25, 30 age 39 | Masculino | USA | 151 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0322 | Males, White, 19 BMI 25, 40 age 49 | Masculino | USA | 115 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0323 | Males, White, 19 BMI 25, 50 age 59 | Masculino | USA | 97 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0324 | Males, White, 19 BMI 25, 60 age 69 | Masculino | USA | 97 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0395 | Males, White, 20 age 69 yr, 19 BMI 30, USA (NHANES III) | Masculino | USA | 1572 | BIVA clássica | Tolerância | Valhalla Scientific | Piccoli A (2002) |
| ref-0325 | Males, White, 25 BMI 30, 20 age 29 | Masculino | USA | 128 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0326 | Males, White, 25 BMI 30, 20 age 69 | Masculino | USA | 919 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0327 | Males, White, 25 BMI 30, 30 age 39 | Masculino | USA | 193 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0328 | Males, White, 25 BMI 30, 40 age 49 | Masculino | USA | 188 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0329 | Males, White, 25 BMI 30, 50 age 59 | Masculino | USA | 180 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0330 | Males, White, 25 BMI 30, 60 age 69 | Masculino | USA | 230 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0331 | Males, White, 30 BMI 35, 20 age 29 | Masculino | USA | 36 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0332 | Males, White, 30 BMI 35, 20 age 69 | Masculino | USA | 369 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0333 | Males, White, 30 BMI 35, 30 age 39 | Masculino | USA | 62 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0334 | Males, White, 30 BMI 35, 40 age 49 | Masculino | USA | 71 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0335 | Males, White, 30 BMI 35, 50 age 59 | Masculino | USA | 89 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0336 | Males, White, 30 BMI 35, 60 age 69 | Masculino | USA | 111 | BIVA clássica | Confiança | Valhalla Scientific | Piccoli A (2002) |
| ref-0396 | Males, White, age 76 yr, BMI 26, USA (NMAPS), | Masculino | USA | 116 | BIVA clássica | Tolerância | BCA | Roubenoff R (1997) |
| ref-0397 | Males, White, age 78 yr, BMI 28, USA (FHS), | Masculino | USA | 161 | BIVA clássica | Tolerância | RJL Systems | Roubenoff R (1997) |
| ref-0213 | Females, White, Obesity I-II (31< BMI < 39), pre-HD | Feminino | — | 19 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0214 | Females, White, Obesity I-II, -2.9 Kg, post-HD | Feminino | — | 19 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0215 | Females, White, Obesity I-III (31< BMI < 80) | Feminino | — | 371 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0216 | Females, White, Obesity III (40< BMI < 55), pre-diet | Feminino | — | 30 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0217 | Females, White, Obesity III, -7.3 Kg, post-diet | Feminino | — | 30 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0337 | Females, White, post-HD, stable | Feminino | — | 436 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0338 | Females, White, post-HD, unstable | Feminino | — | 133 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0339 | Females, White, pre-HD, stable | Feminino | — | 436 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0340 | Females, White, pre-HD, unstable | Feminino | — | 133 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0218 | Females, White, with edema | Feminino | — | 25 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0219 | Males, White, Lung cancer IIIB, age 67, BMI 25 | Masculino | — | 33 | BIVA clássica | Confiança | Akern-RJL Systems | Toso S (2000) |
| ref-0220 | Males, White, Lung cancer IV, age 64, BMI 25 | Masculino | — | 30 | BIVA clássica | Confiança | Akern-RJL Systems | Toso S (2000) |
| ref-0221 | Males, White, Obesity I-III (31< BMI < 41), pre-HD | Masculino | — | 13 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0222 | Males, White, Obesity I-III (31< BMI < 67) | Masculino | — | 169 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0223 | Males, White, Obesity I-III, -3.6 Kg, post-HD | Masculino | — | 13 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0224 | Males, White, Obesity II-III (37< BMI < 50), pre-diet | Masculino | — | 18 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0225 | Males, White, Obesity II-III,-10.9 Kg, post-diet | Masculino | — | 18 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0341 | Males, White, post-HD, stable | Masculino | — | 680 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0342 | Males, White, post-HD, unstable | Masculino | — | 118 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0343 | Males, White, pre-HD, stable | Masculino | — | 680 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0344 | Males, White, pre-HD, unstable | Masculino | — | 118 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |
| ref-0228 | Males, White, reference group matched by age and BMI | Masculino | — | 56 | BIVA clássica | Confiança | Akern-RJL Systems | Toso S (2000) |
| ref-0226 | Males, White, with edema | Masculino | — | 25 | BIVA clássica | Confiança | Akern-RJL Systems | Piccoli A (1998) |

## Populações adicionadas na última sessão (358)

| Código | Grupo/população | Sexo | País | N | Sistema | Uso | Aparelho | Artigo |
|---|---|---|---|---:|---|---|---|---|
| ref-0030 | Females, Brazilian healthy children, 1-36 mo | Feminino | Brazil | 126 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (supine) | Tanabe RF (2012); DOI 10.1016/j.clnu.2011.08.006 |
| ref-0031 | Females, Brazilian healthy eutrophic adolescents, 10 y | Feminino | Brazil | 26 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0032 | Females, Brazilian healthy eutrophic adolescents, 11 y | Feminino | Brazil | 44 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0033 | Females, Brazilian healthy eutrophic adolescents, 12 y | Feminino | Brazil | 47 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0034 | Females, Brazilian healthy eutrophic adolescents, 13 y | Feminino | Brazil | 52 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0035 | Females, Brazilian healthy eutrophic adolescents, 14 y | Feminino | Brazil | 46 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0036 | Females, Brazilian healthy eutrophic adolescents, 15 y | Feminino | Brazil | 38 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0037 | Females, Brazilian healthy eutrophic adolescents, 16 y | Feminino | Brazil | 30 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0038 | Females, Brazilian healthy eutrophic adolescents, 17 y | Feminino | Brazil | 18 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0039 | Females, Brazilian healthy eutrophic adolescents, 18 y | Feminino | Brazil | 11 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0040 | Females, Brazilian healthy infants, 30-90 d | Feminino | Brazil | 77 | BIVA clássica | Confiança e tolerância | RJL Quantum II BIA 103-A (dorsal decubitus) | Toffano RBD (2018); DOI 10.1080/07315724.2017.1364678 |
| ref-0041 | Females, Brazilian, 1-4 y | Feminino | Brazil | 151 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (lying) | Gomes TLM (2021); DOI 10.1016/j.clnesp.2021.09.011 |
| ref-0348 | Females, Brazilian, older adults 60-85 y, with sarcopenia | Feminino | Brazil | 6 | BIVA clássica | Tolerância | ImpediMed Imp DF50 (supine) | Rossini-Venturini AC (2022) |
| ref-0349 | Females, Brazilian, older adults 60-85 y, without sarcopenia | Feminino | Brazil | 59 | BIVA clássica | Tolerância | ImpediMed Imp DF50 (supine) | Rossini-Venturini AC (2022); DOI 10.1186/s13102-022-00559-2 |
| ref-0042 | Females, Brazilian, term newborns, 7-28 d | Feminino | Brazil | 57 | BIVA clássica | Confiança e tolerância | RJL Quantum II | Margutti AVB (2010); DOI 10.1017/S000711451000245X |
| ref-0022 | Males+Females, Brazilian (Rio de Janeiro, daycare, multiethnic), 1 y | Misto/ambos | Brazil | 100 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (lying) | Gomes TLM (2021); DOI 10.1016/j.clnesp.2021.09.011 |
| ref-0001 | Males+Females, Brazilian clinically stable preterm newborns, <7 d | Misto/ambos | Brazil | 68 | BIVA clássica | Confiança e tolerância | RJL Quantum II (supine) | Margutti AVB (2012); DOI 10.2223/JPED.2198 |
| ref-0002 | Males+Females, Brazilian clinically stable preterm newborns, ≥7 d | Misto/ambos | Brazil | 40 | BIVA clássica | Confiança e tolerância | RJL Quantum II (supine) | Margutti AVB (2012); DOI 10.2223/JPED.2198 |
| ref-0023 | Males+Females, Brazilian healthy children, 12-36 mo | Misto/ambos | Brazil | 97 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (supine) | Tanabe RF (2012); DOI 10.1016/j.clnu.2011.08.006 |
| ref-0024 | Males+Females, Brazilian healthy exclusively breastfed infants, 30-90 d | Misto/ambos | Brazil | 150 | BIVA clássica | Confiança e tolerância | RJL Quantum II BIA 103-A (dorsal decubitus) | Toffano RBD (2018); DOI 10.1080/07315724.2017.1364678 |
| ref-0025 | Males+Females, Brazilian healthy infants, 1-6 mo | Misto/ambos | Brazil | 103 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (supine) | Tanabe RF (2012); DOI 10.1016/j.clnu.2011.08.006 |
| ref-0026 | Males+Females, Brazilian healthy infants, 6-12 mo | Misto/ambos | Brazil | 55 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (supine) | Tanabe RF (2012); DOI 10.1016/j.clnu.2011.08.006 |
| ref-0027 | Males+Females, Brazilian, 2 y | Misto/ambos | Brazil | 118 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (lying) | Gomes TLM (2021); DOI 10.1016/j.clnesp.2021.09.011 |
| ref-0028 | Males+Females, Brazilian, 3-4 y | Misto/ambos | Brazil | 87 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (lying) | Gomes TLM (2021); DOI 10.1016/j.clnesp.2021.09.011 |
| ref-0029 | Males+Females, Brazilian, term newborns, 7-28 d | Misto/ambos | Brazil | 109 | BIVA clássica | Confiança e tolerância | RJL Quantum II | Margutti AVB (2010); DOI 10.1017/S000711451000245X |
| ref-0345 | Males, Brazilian adolescent soccer athletes (13.4 y), skeletal maturity on time | Masculino | Brazil | 18 | BIVA clássica | Confiança | RJL Quantum 101 (supine) | Koury JC (2018); DOI 10.1016/j.jtemb.2017.11.003 |
| ref-0346 | Males, Brazilian adolescent soccer athletes, early maturity | Masculino | Brazil | 10 | BIVA clássica | Confiança | RJL Quantum 101 (supine) | Koury JC (2018); DOI 10.1016/j.jtemb.2017.11.003 |
| ref-0347 | Males, Brazilian adolescent soccer athletes, late maturity | Masculino | Brazil | 12 | BIVA clássica | Confiança | RJL Quantum 101 (supine) | Koury JC (2018); DOI 10.1016/j.jtemb.2017.11.003 |
| ref-0043 | Males, Brazilian healthy children, 1-36 mo | Masculino | Brazil | 129 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (supine) | Tanabe RF (2012); DOI 10.1016/j.clnu.2011.08.006 |
| ref-0044 | Males, Brazilian healthy eutrophic adolescents, 10 y | Masculino | Brazil | 21 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0045 | Males, Brazilian healthy eutrophic adolescents, 11 y | Masculino | Brazil | 36 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0046 | Males, Brazilian healthy eutrophic adolescents, 12 y | Masculino | Brazil | 35 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0047 | Males, Brazilian healthy eutrophic adolescents, 13 y | Masculino | Brazil | 30 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0048 | Males, Brazilian healthy eutrophic adolescents, 14 y | Masculino | Brazil | 44 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0049 | Males, Brazilian healthy eutrophic adolescents, 15 y | Masculino | Brazil | 34 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0050 | Males, Brazilian healthy eutrophic adolescents, 16 y | Masculino | Brazil | 32 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0051 | Males, Brazilian healthy eutrophic adolescents, 17 y | Masculino | Brazil | 13 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0052 | Males, Brazilian healthy eutrophic adolescents, 18 y | Masculino | Brazil | 10 | BIVA clássica | Confiança e tolerância | RJL BIA 103-A | Mathias-Genovez MG (2016); DOI 10.1080/07315724.2015.1027798 |
| ref-0053 | Males, Brazilian healthy infants, 30-90 d | Masculino | Brazil | 73 | BIVA clássica | Confiança e tolerância | RJL Quantum II BIA 103-A (dorsal decubitus) | Toffano RBD (2018); DOI 10.1080/07315724.2017.1364678 |
| ref-0054 | Males, Brazilian, 1-4 y | Masculino | Brazil | 154 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (lying) | Gomes TLM (2021); DOI 10.1016/j.clnesp.2021.09.011 |
| ref-0350 | Males, Brazilian, older adults 60-85 y, with sarcopenia | Masculino | Brazil | 4 | BIVA clássica | Tolerância | ImpediMed Imp DF50 (supine) | Rossini-Venturini AC (2022) |
| ref-0351 | Males, Brazilian, older adults 60-85 y, without sarcopenia | Masculino | Brazil | 25 | BIVA clássica | Tolerância | ImpediMed Imp DF50 (supine) | Rossini-Venturini AC (2022); DOI 10.1186/s13102-022-00559-2 |
| ref-0055 | Males, Brazilian, term newborns, 7-28 d | Masculino | Brazil | 52 | BIVA clássica | Confiança e tolerância | RJL Quantum II | Margutti AVB (2010); DOI 10.1017/S000711451000245X |
| ref-0003 | Females, Cuban HD patients, critical, post-HD | Feminino | Cuba | 9 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2004) |
| ref-0004 | Females, Cuban HD patients, critical, pre-HD | Feminino | Cuba | 12 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2004) |
| ref-0005 | Females, Cuban HD patients, stable, post-HD | Feminino | Cuba | 6 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2004) |
| ref-0006 | Females, Cuban HD patients, stable, pre-HD | Feminino | Cuba | 18 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2004) |
| ref-0062 | Females, Cuban healthy adolescents, 13-16 y | Feminino | Cuba | 161 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2013); DOI 10.1016/j.clnme.2013.04.004 |
| ref-0063 | Females, Cuban healthy adults, 17-59 y | Feminino | Cuba | 1399 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2013); DOI 10.1016/j.clnme.2013.04.004 |
| ref-0064 | Females, Cuban healthy adults, 18-70 y, BMI 19-30 | Feminino | Cuba | 507 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2004); DOI 10.1088/0967-3334/25/5/016 |
| ref-0065 | Females, Cuban healthy older adults, 60-80 y | Feminino | Cuba | 128 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2013); DOI 10.1016/j.clnme.2013.04.004 |
| ref-0056 | Males+Females, Cuban healthy children, 10-11 y | Misto/ambos | Cuba | 196 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2013); DOI 10.1016/j.clnme.2013.04.004 |
| ref-0057 | Males+Females, Cuban healthy children, 12 y | Misto/ambos | Cuba | 109 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2013); DOI 10.1016/j.clnme.2013.04.004 |
| ref-0058 | Males+Females, Cuban healthy children, 2-3 y | Misto/ambos | Cuba | 61 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2013); DOI 10.1016/j.clnme.2013.04.004 |
| ref-0059 | Males+Females, Cuban healthy children, 4-5 y | Misto/ambos | Cuba | 91 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2013); DOI 10.1016/j.clnme.2013.04.004 |
| ref-0060 | Males+Females, Cuban healthy children, 6-7 y | Misto/ambos | Cuba | 165 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2013); DOI 10.1016/j.clnme.2013.04.004 |
| ref-0061 | Males+Females, Cuban healthy children, 8-9 y | Misto/ambos | Cuba | 179 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2013); DOI 10.1016/j.clnme.2013.04.004 |
| ref-0007 | Males, Cuban HD patients, critical (oedema), pre-HD | Masculino | Cuba | 16 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2004) |
| ref-0008 | Males, Cuban HD patients, critical, post-HD | Masculino | Cuba | 10 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2004) |
| ref-0009 | Males, Cuban HD patients, stable, post-HD | Masculino | Cuba | 15 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2004) |
| ref-0010 | Males, Cuban HD patients, stable, pre-HD | Masculino | Cuba | 28 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2004) |
| ref-0066 | Males, Cuban healthy adolescents, 13-16 y | Masculino | Cuba | 101 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2013); DOI 10.1016/j.clnme.2013.04.004 |
| ref-0067 | Males, Cuban healthy adults, 17-59 y | Masculino | Cuba | 1263 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2013); DOI 10.1016/j.clnme.2013.04.004 |
| ref-0068 | Males, Cuban healthy adults, 18-70 y, BMI 19-30 | Masculino | Cuba | 689 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2004); DOI 10.1088/0967-3334/25/5/016 |
| ref-0069 | Males, Cuban healthy older adults, 60-80 y | Masculino | Cuba | 174 | BIVA clássica | Confiança e tolerância | Maltron BioScan BL-960141 (supine) | Nescolarde L (2013); DOI 10.1016/j.clnme.2013.04.004 |
| ref-0179 | Females, Italian CrossFit practitioners | Feminino | Italy | 38 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary Sport Ed. | Cebrián-Ponce Á (2024); DOI 10.1016/j.heliyon.2024.e29139 |
| ref-0077 | Females, Italian girls, 10-11 y (all) | Feminino | Italy | 43 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0078 | Females, Italian girls, 12 y (all) | Feminino | Italy | 20 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0079 | Females, Italian girls, 13 y (all) | Feminino | Italy | 28 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0080 | Females, Italian girls, 14-15 y (all) | Feminino | Italy | 52 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0185 | Females, Italian handball U19 | Feminino | Italy | 18 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary | Di Credico A (2021); DOI 10.3390/ijerph182412972 |
| ref-0081 | Females, Italian healthy elderly, 60-69 y | Feminino | Italy | 41 | BIVA clássica | Confiança e tolerância | Akern BIA 101 | Buffa R (2003); DOI 10.1016/S0899-9007(03)00180-1 |
| ref-0082 | Females, Italian healthy elderly, 70-79 y | Feminino | Italy | 39 | BIVA clássica | Confiança e tolerância | Akern BIA 101 | Buffa R (2003); DOI 10.1016/S0899-9007(03)00180-1 |
| ref-0083 | Females, Italian healthy elderly, 80-89 y | Feminino | Italy | 24 | BIVA clássica | Confiança e tolerância | Akern BIA 101 | Buffa R (2003); DOI 10.1016/S0899-9007(03)00180-1 |
| ref-0084 | Females, Italian healthy infants, 0-3.99 mo | Feminino | Italy | 20 | BIVA clássica | Confiança e tolerância | Akern-RJL STA/BIA (recumbent) | Savino F (2003); DOI 10.1016/S0899-9007(02)00947-4 |
| ref-0085 | Females, Italian healthy infants, 0.5-12 mo (all) | Feminino | Italy | 63 | BIVA clássica | Confiança e tolerância | Akern-RJL STA/BIA (recumbent) | Savino F (2003); DOI 10.1016/S0899-9007(02)00947-4 |
| ref-0086 | Females, Italian healthy infants, 4-7.99 mo | Feminino | Italy | 21 | BIVA clássica | Confiança e tolerância | Akern-RJL STA/BIA (recumbent) | Savino F (2003); DOI 10.1016/S0899-9007(02)00947-4 |
| ref-0087 | Females, Italian healthy infants, 8-11.99 mo | Feminino | Italy | 22 | BIVA clássica | Confiança e tolerância | Akern-RJL STA/BIA (recumbent) | Savino F (2003); DOI 10.1016/S0899-9007(02)00947-4 |
| ref-0360 | Females, Italian, healthy adults, 18-65 y | Feminino | Italy | 2230 | BIVA clássica | Tolerância | Akern BIA 101 / Anniversary / BIVA PRO | Campa F (2023); DOI 10.1016/j.clnu.2023.07.025 |
| ref-0361 | Females, Italian, older adults ≥65 y | Feminino | Italy | 472 | BIVA clássica | Tolerância | Akern BIA 101 / Anniversary / BIVA PRO | Campa F (2025); DOI 10.3389/fnut.2025.1640407 |
| ref-0070 | Males+Females, Italian children 8 y, normal weight | Misto/ambos | Italy | 218 | BIVA clássica | Confiança e tolerância | Akern BIA-101 RJL (supine) | Guida B (2008); DOI 10.1016/j.numecd.2006.08.008 |
| ref-0011 | Males+Females, Italian children 8 y, obese | Misto/ambos | Italy | 111 | BIVA clássica | Confiança e tolerância | Akern BIA-101 RJL (supine) | Guida B (2008); DOI 10.1016/j.numecd.2006.08.008 |
| ref-0071 | Males+Females, Italian children 8 y, overweight | Misto/ambos | Italy | 135 | BIVA clássica | Confiança e tolerância | Akern BIA-101 RJL (supine) | Guida B (2008); DOI 10.1016/j.numecd.2006.08.008 |
| ref-0072 | Males+Females, Italian children 8 y, total | Misto/ambos | Italy | 464 | BIVA clássica | Confiança e tolerância | Akern BIA-101 RJL (supine) | Guida B (2008); DOI 10.1016/j.numecd.2006.08.008 |
| ref-0073 | Males+Females, Italian healthy infants, 0-3.99 mo | Misto/ambos | Italy | 58 | BIVA clássica | Confiança e tolerância | Akern-RJL STA/BIA (recumbent) | Savino F (2003); DOI 10.1016/S0899-9007(02)00947-4 |
| ref-0074 | Males+Females, Italian healthy infants, 0.5-12 mo (all) – referência das elipses | Misto/ambos | Italy | 153 | BIVA clássica | Confiança e tolerância | Akern-RJL STA/BIA (recumbent) | Savino F (2003); DOI 10.1016/S0899-9007(02)00947-4 |
| ref-0075 | Males+Females, Italian healthy infants, 4-7.99 mo | Misto/ambos | Italy | 51 | BIVA clássica | Confiança e tolerância | Akern-RJL STA/BIA (recumbent) | Savino F (2003); DOI 10.1016/S0899-9007(02)00947-4 |
| ref-0076 | Males+Females, Italian healthy infants, 8-11.99 mo | Misto/ambos | Italy | 44 | BIVA clássica | Confiança e tolerância | Akern-RJL STA/BIA (recumbent) | Savino F (2003); DOI 10.1016/S0899-9007(02)00947-4 |
| ref-0089 | Males, Italian (Sardinian) healthy elderly, 60-69 y | Masculino | Italy | 37 | BIVA clássica | Confiança e tolerância | Akern BIA 101 | Buffa R (2003); DOI 10.1016/S0899-9007(03)00180-1 |
| ref-0180 | Males, Italian CrossFit practitioners | Masculino | Italy | 107 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary Sport Ed. | Cebrián-Ponce Á (2024); DOI 10.1016/j.heliyon.2024.e29139 |
| ref-0186 | Males, Italian Serie A soccer, start of season (ellipse values) | Masculino | Italy | 131 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary | Bongiovanni T (2020); DOI 10.3390/jfmk5040073 |
| ref-0090 | Males, Italian healthy elderly, 70-79 y | Masculino | Italy | 42 | BIVA clássica | Confiança e tolerância | Akern BIA 101 | Buffa R (2003); DOI 10.1016/S0899-9007(03)00180-1 |
| ref-0091 | Males, Italian healthy elderly, 80-89 y | Masculino | Italy | 18 | BIVA clássica | Confiança e tolerância | Akern BIA 101 | Buffa R (2003); DOI 10.1016/S0899-9007(03)00180-1 |
| ref-0092 | Males, Italian healthy infants, 0-3.99 mo | Masculino | Italy | 38 | BIVA clássica | Confiança e tolerância | Akern-RJL STA/BIA (recumbent) | Savino F (2003); DOI 10.1016/S0899-9007(02)00947-4 |
| ref-0093 | Males, Italian healthy infants, 0.5-12 mo (all) | Masculino | Italy | 90 | BIVA clássica | Confiança e tolerância | Akern-RJL STA/BIA (recumbent) | Savino F (2003); DOI 10.1016/S0899-9007(02)00947-4 |
| ref-0094 | Males, Italian healthy infants, 4-7.99 mo | Masculino | Italy | 30 | BIVA clássica | Confiança e tolerância | Akern-RJL STA/BIA (recumbent) | Savino F (2003); DOI 10.1016/S0899-9007(02)00947-4 |
| ref-0095 | Males, Italian healthy infants, 8-11.99 mo | Masculino | Italy | 22 | BIVA clássica | Confiança e tolerância | Akern-RJL STA/BIA (recumbent) | Savino F (2003); DOI 10.1016/S0899-9007(02)00947-4 |
| ref-0187 | Males, Italian national handball, U17+U19 | Masculino | Italy | 37 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary | Di Credico A (2021); DOI 10.3390/ijerph182412972 |
| ref-0398 | Males, Italian, elite soccer players | Masculino | Italy | 219 | BIVA clássica | Tolerância | Akern BIA-101 | Micheli ML (2014); DOI 10.1123/ijspp.2013-0119 |
| ref-0188 | Males, Italian, elite youth soccer players, all | Masculino | Italy | 178 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary | Toselli S (2020); DOI 10.3390/ijerph17030729 |
| ref-0362 | Males, Italian, healthy adults, 18-65 y | Masculino | Italy | 2137 | BIVA clássica | Tolerância | Akern BIA 101 / Anniversary / BIVA PRO | Campa F (2023); DOI 10.1016/j.clnu.2023.07.025 |
| ref-0363 | Males, Italian, older adults ≥65 y | Masculino | Italy | 363 | BIVA clássica | Tolerância | Akern BIA 101 / Anniversary / BIVA PRO | Campa F (2025); DOI 10.3389/fnut.2025.1640407 |
| ref-0189 | Females, Lebanese university athletes, endurance | Feminino | Lebanon | 29 | BIVA clássica | Confiança e tolerância | InBody 770 (standing) | Abdelnour M (2024); DOI 10.3390/s24186024 |
| ref-0190 | Females, Lebanese university athletes, strength | Feminino | Lebanon | 29 | BIVA clássica | Confiança e tolerância | InBody 770 (standing) | Abdelnour M (2024); DOI 10.3390/s24186024 |
| ref-0191 | Females, Lebanese, non-athlete university students, 18-35 y | Feminino | Lebanon | 100 | BIVA clássica | Confiança e tolerância | InBody 770 (standing) | Abdelnour M (2024); DOI 10.3390/s24186024 |
| ref-0192 | Males, Lebanese university athletes, endurance | Masculino | Lebanon | 36 | BIVA clássica | Confiança e tolerância | InBody 770 (standing) | Abdelnour M (2024); DOI 10.3390/s24186024 |
| ref-0193 | Males, Lebanese university athletes, strength | Masculino | Lebanon | 54 | BIVA clássica | Confiança e tolerância | InBody 770 (standing) | Abdelnour M (2024); DOI 10.3390/s24186024 |
| ref-0194 | Males, Lebanese, non-athlete university students, 18-35 y | Masculino | Lebanon | 100 | BIVA clássica | Confiança e tolerância | InBody 770 (standing) | Abdelnour M (2024); DOI 10.3390/s24186024 |
| ref-0096 | Females, Mexican, healthy adults, 18-82 y | Feminino | Mexico | 235 | BIVA clássica | Confiança e tolerância | Bodystat Quadscan 4000 | Espinosa-Cuevas MA (2007) |
| ref-0097 | Males, Mexican, healthy adults, 18-82 y | Masculino | Mexico | 204 | BIVA clássica | Confiança e tolerância | Bodystat Quadscan 4000 | Espinosa-Cuevas MA (2007) |
| ref-0098 | Males+Females, Dutch healthy infants, 2 mo (51 M) – referência das elipses | Misto/ambos | Netherlands | 113 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (lying) | L'Abée C (2010); DOI 10.1016/j.clnu.2009.08.007 |
| ref-0099 | Males+Females, Dutch healthy infants, 6-7 mo (23 M) – 2ª medida | Misto/ambos | Netherlands | 53 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (lying) | L'Abée C (2010); DOI 10.1016/j.clnu.2009.08.007 |
| ref-0100 | Males+Females, Dutch healthy infants, 8-12 mo (23 M) – 2ª medida | Misto/ambos | Netherlands | 46 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (lying) | L'Abée C (2010); DOI 10.1016/j.clnu.2009.08.007 |
| ref-0399 | Females, Portuguese athletes (11 sports), >16 y | Feminino | Portugal | 63 | BIVA clássica | Tolerância | Akern BIA 101 Anniversary (supine) | Marini E (2020); DOI 10.1016/j.clnu.2019.02.016 |
| ref-0400 | Males, Portuguese athletes (11 sports), >16 y | Masculino | Portugal | 139 | BIVA clássica | Tolerância | Akern BIA 101 Anniversary (supine) | Marini E (2020); DOI 10.1016/j.clnu.2019.02.016 |
| ref-0012 | Females, Slovak Parkinson's disease, 50-59 y | Feminino | Slovakia | 5 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013) |
| ref-0013 | Females, Slovak Parkinson's disease, 60-69 y | Feminino | Slovakia | 12 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013) |
| ref-0014 | Females, Slovak Parkinson's disease, 70-79 y | Feminino | Slovakia | 7 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013) |
| ref-0101 | Females, Slovak healthy adults, 18-28 y | Feminino | Slovakia | 202 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013); DOI 10.2478/s11535-013-0216-7 |
| ref-0102 | Females, Slovak healthy adults, 29-39 y | Feminino | Slovakia | 55 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013); DOI 10.2478/s11535-013-0216-7 |
| ref-0103 | Females, Slovak healthy adults, 40-49 y | Feminino | Slovakia | 256 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013); DOI 10.2478/s11535-013-0216-7 |
| ref-0104 | Females, Slovak healthy adults, 50-59 y | Feminino | Slovakia | 215 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013); DOI 10.2478/s11535-013-0216-7 |
| ref-0105 | Females, Slovak healthy older adults, 60-69 y | Feminino | Slovakia | 102 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013) |
| ref-0106 | Females, Slovak healthy older adults, 70-79 y | Feminino | Slovakia | 125 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013) |
| ref-0107 | Females, Slovak healthy older adults, 80-92 y | Feminino | Slovakia | 52 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013) |
| ref-0015 | Males, Slovak Parkinson's disease, 50-59 y | Masculino | Slovakia | 10 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013) |
| ref-0016 | Males, Slovak Parkinson's disease, 60-69 y | Masculino | Slovakia | 10 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013) |
| ref-0017 | Males, Slovak Parkinson's disease, 70-79 y | Masculino | Slovakia | 10 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013) |
| ref-0108 | Males, Slovak healthy adults, 18-28 y | Masculino | Slovakia | 193 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013); DOI 10.2478/s11535-013-0216-7 |
| ref-0109 | Males, Slovak healthy adults, 29-39 y | Masculino | Slovakia | 45 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013); DOI 10.2478/s11535-013-0216-7 |
| ref-0110 | Males, Slovak healthy adults, 40-49 y | Masculino | Slovakia | 22 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013); DOI 10.2478/s11535-013-0216-7 |
| ref-0111 | Males, Slovak healthy adults, 50-59 y | Masculino | Slovakia | 32 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013); DOI 10.2478/s11535-013-0216-7 |
| ref-0112 | Males, Slovak healthy older adults, 60-69 y | Masculino | Slovakia | 104 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013) |
| ref-0113 | Males, Slovak healthy older adults, 70-79 y | Masculino | Slovakia | 110 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013) |
| ref-0114 | Males, Slovak healthy older adults, 80-92 y | Masculino | Slovakia | 30 | BIVA clássica | Confiança e tolerância | Akern BIA 101 (supine) | Siváková D (2013) |
| ref-0115 | Females, Korean, healthy adults, 21-82 y | Feminino | South Korea | 105 | BIVA clássica | Confiança e tolerância | InBody S10 (8 electrodes, supine) | Oh JH (2019); DOI 10.3346/jkms.2019.34.e198 |
| ref-0018 | Females, Korean, older adults with sarcopenia | Feminino | South Korea | 14 | BIVA clássica | Confiança e tolerância | RJL Quantum Desktop RJL-101 | Jiang FL (2023) |
| ref-0019 | Females, Korean, older adults, non-sarcopenic | Feminino | South Korea | 57 | BIVA clássica | Confiança e tolerância | RJL Quantum Desktop RJL-101 | Jiang FL (2023); DOI 10.3390/s23167090 |
| ref-0116 | Males, Korean, healthy adults, 22-83 y | Masculino | South Korea | 137 | BIVA clássica | Confiança e tolerância | InBody S10 (8 electrodes, supine) | Oh JH (2019); DOI 10.3346/jkms.2019.34.e198 |
| ref-0020 | Males, Korean, older adults with sarcopenia | Masculino | South Korea | 10 | BIVA clássica | Confiança e tolerância | RJL Quantum Desktop RJL-101 | Jiang FL (2023) |
| ref-0021 | Males, Korean, older adults, non-sarcopenic | Masculino | South Korea | 65 | BIVA clássica | Confiança e tolerância | RJL Quantum Desktop RJL-101 | Jiang FL (2023); DOI 10.3390/s23167090 |
| ref-0119 | Females, Spanish healthy children/adolescents, 10-<11 y | Feminino | Spain | 128 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0120 | Females, Spanish healthy children/adolescents, 11-<12 y | Feminino | Spain | 149 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0121 | Females, Spanish healthy children/adolescents, 12-<13 (impresso; N = 12-<14 da Tab. 1) y | Feminino | Spain | 301 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0122 | Females, Spanish healthy children/adolescents, 13-<14 (impresso; N = 14-<15 da Tab. 1) y | Feminino | Spain | 179 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0123 | Females, Spanish healthy children/adolescents, 15-<19 y | Feminino | Spain | 717 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0124 | Females, Spanish healthy children/adolescents, 4-<5 y | Feminino | Spain | 87 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0125 | Females, Spanish healthy children/adolescents, 5-<6 y | Feminino | Spain | 87 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0126 | Females, Spanish healthy children/adolescents, 6-<7 y | Feminino | Spain | 118 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0127 | Females, Spanish healthy children/adolescents, 7-<8 y | Feminino | Spain | 117 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0128 | Females, Spanish healthy children/adolescents, 8-<9 y | Feminino | Spain | 123 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0129 | Females, Spanish healthy children/adolescents, 9-<10 y | Feminino | Spain | 130 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0130 | Females, Spanish healthy term newborns, 24-72 h | Feminino | Spain | 75 | BIVA clássica | Confiança e tolerância | Akern BIA-101 (supine) | Redondo-del-Río MP (2019); DOI 10.1002/ajhb.23244 |
| ref-0131 | Females, Spanish, ELBW infants | Feminino | Spain | 45 | BIVA clássica | Confiança e tolerância | Akern BIA 101 BIVA PRO | Núñez-Ramos R (2024); DOI 10.3390/nu16244348 |
| ref-0195 | Females, Spanish, elite synchronized swimmers, all | Feminino | Spain | 49 | BIVA clássica | Confiança e tolerância | Z-Metrix (BioparHom) | Carrasco-Marginet M (2017); DOI 10.1371/journal.pone.0178819 |
| ref-0364 | Females, Spanish, healthy adults, 18-74 y | Feminino | Spain | 149 | BIVA clássica | Tolerância | Akern BIA-101 | Atilano-Carsi X (2015); DOI 10.3305/nh.2015.31.3.8128 |
| ref-0117 | Males+Females, Spanish healthy term newborns, 24-72 h | Misto/ambos | Spain | 154 | BIVA clássica | Confiança e tolerância | Akern BIA-101 (supine) | Redondo-del-Río MP (2019); DOI 10.1002/ajhb.23244 |
| ref-0118 | Males+Females, Spanish, ELBW infants | Misto/ambos | Spain | 85 | BIVA clássica | Confiança e tolerância | Akern BIA 101 BIVA PRO | Núñez-Ramos R (2024); DOI 10.3390/nu16244348 |
| ref-0196 | Males, Spanish (Caucasian) non-elite marathon runners, 18-50 y, 24 h pre-race | Masculino | Spain | 19 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary (supine) | Nescolarde L (2020); DOI 10.3389/fphys.2020.00352 |
| ref-0132 | Males, Spanish healthy children/adolescents, 10-<11 y | Masculino | Spain | 163 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0133 | Males, Spanish healthy children/adolescents, 11-<12 y | Masculino | Spain | 159 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0134 | Males, Spanish healthy children/adolescents, 12-<13 y | Masculino | Spain | 161 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0135 | Males, Spanish healthy children/adolescents, 13-<14 y | Masculino | Spain | 156 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0136 | Males, Spanish healthy children/adolescents, 14-<15 y | Masculino | Spain | 173 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0137 | Males, Spanish healthy children/adolescents, 15-<16 y | Masculino | Spain | 191 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0138 | Males, Spanish healthy children/adolescents, 16-<19 y | Masculino | Spain | 558 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0139 | Males, Spanish healthy children/adolescents, 4-<5 y | Masculino | Spain | 100 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0140 | Males, Spanish healthy children/adolescents, 5-<6 y | Masculino | Spain | 99 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0141 | Males, Spanish healthy children/adolescents, 6-<7 y | Masculino | Spain | 111 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0142 | Males, Spanish healthy children/adolescents, 7-<8 y | Masculino | Spain | 120 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0143 | Males, Spanish healthy children/adolescents, 8-<9 y | Masculino | Spain | 124 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0144 | Males, Spanish healthy children/adolescents, 9-<10 y | Masculino | Spain | 150 | BIVA clássica | Confiança e tolerância | RJL 101-A | Redondo-del-Río MP (2017); DOI 10.1002/ajhb.22978 |
| ref-0145 | Males, Spanish healthy term newborns, 24-72 h | Masculino | Spain | 79 | BIVA clássica | Confiança e tolerância | Akern BIA-101 (supine) | Redondo-del-Río MP (2019); DOI 10.1002/ajhb.23244 |
| ref-0146 | Males, Spanish, ELBW infants | Masculino | Spain | 40 | BIVA clássica | Confiança e tolerância | Akern BIA 101 BIVA PRO | Núñez-Ramos R (2024); DOI 10.3390/nu16244348 |
| ref-0365 | Males, Spanish, healthy adults, 18-64 y | Masculino | Spain | 162 | BIVA clássica | Tolerância | Akern BIA-101 | Atilano-Carsi X (2015); DOI 10.3305/nh.2015.31.3.8128 |
| ref-0147 | Females, USA (NHANES 2003-04), all ethnicities pooled, 21-49 y | Feminino | USA | 754 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 | Buffa R (2013); DOI 10.1371/journal.pone.0058533 |
| ref-0352 | Females, USA, obesity, African American | Feminino | USA | 459 | BIVA clássica | Tolerância | seca mBCA 552 (standing) | Rosero-Revelo R (2026) |
| ref-0353 | Females, USA, obesity, Asian | Feminino | USA | 24 | BIVA clássica | Tolerância | seca mBCA 552 (standing) | Rosero-Revelo R (2026) |
| ref-0354 | Females, USA, obesity, Caucasian | Feminino | USA | 1783 | BIVA clássica | Tolerância | seca mBCA 552 (standing) | Rosero-Revelo R (2026) |
| ref-0355 | Females, USA, obesity, Hispanic | Feminino | USA | 83 | BIVA clássica | Tolerância | seca mBCA 552 (standing) | Rosero-Revelo R (2026) |
| ref-0148 | Males, USA (NHANES 2003-04), all ethnicities pooled, 21-49 y | Masculino | USA | 836 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 | Buffa R (2013); DOI 10.1371/journal.pone.0058533 |
| ref-0356 | Males, USA, obesity, African American | Masculino | USA | 90 | BIVA clássica | Tolerância | seca mBCA 552 (standing) | Rosero-Revelo R (2026) |
| ref-0357 | Males, USA, obesity, Asian | Masculino | USA | 15 | BIVA clássica | Tolerância | seca mBCA 552 (standing) | Rosero-Revelo R (2026) |
| ref-0358 | Males, USA, obesity, Caucasian | Masculino | USA | 594 | BIVA clássica | Tolerância | seca mBCA 552 (standing) | Rosero-Revelo R (2026) |
| ref-0359 | Males, USA, obesity, Hispanic | Masculino | USA | 24 | BIVA clássica | Tolerância | seca mBCA 552 (standing) | Rosero-Revelo R (2026) |
| ref-0172 | ELBW infants, SGA | Não identificado | — | 28 | BIVA clássica | Confiança e tolerância | Akern BIA 101 BIVA PRO | Núñez-Ramos R (2024); DOI 10.3390/nu16244348 |
| ref-0173 | ELBW infants, mild extrauterine growth restriction | Não identificado | — | 31 | BIVA clássica | Confiança e tolerância | Akern BIA 101 BIVA PRO | Núñez-Ramos R (2024); DOI 10.3390/nu16244348 |
| ref-0174 | ELBW infants, moderate EUGR | Não identificado | — | 37 | BIVA clássica | Confiança e tolerância | Akern BIA 101 BIVA PRO | Núñez-Ramos R (2024); DOI 10.3390/nu16244348 |
| ref-0175 | ELBW infants, not SGA | Não identificado | — | 57 | BIVA clássica | Confiança e tolerância | Akern BIA 101 BIVA PRO | Núñez-Ramos R (2024); DOI 10.3390/nu16244348 |
| ref-0176 | ELBW infants, severe EUGR | Não identificado | — | 17 | BIVA clássica | Confiança e tolerância | Akern BIA 101 BIVA PRO | Núñez-Ramos R (2024); DOI 10.3390/nu16244348 |
| ref-0177 | ELBW infants, with IUGR | Não identificado | — | 34 | BIVA clássica | Confiança e tolerância | Akern BIA 101 BIVA PRO | Núñez-Ramos R (2024); DOI 10.3390/nu16244348 |
| ref-0178 | ELBW infants, without IUGR | Não identificado | — | 51 | BIVA clássica | Confiança e tolerância | Akern BIA 101 BIVA PRO | Núñez-Ramos R (2024); DOI 10.3390/nu16244348 |
| ref-0154 | Females, Colombian, university students, 15-30 y | Feminino | — | 402 | BIVA clássica | Confiança e tolerância | Biody Xpert (Aminogram), seated | Díaz-Rincón M (2024); DOI 10.20960/nh.04842 |
| ref-0155 | Females, US healthy non-pregnant Caucasian women, 18-40 y (referência) | Feminino | — | 98 | BIVA clássica | Confiança e tolerância | RJL 101 (supine) | Lukaski HC (2007); DOI 10.1016/j.nut.2007.05.001 |
| ref-0156 | Females, US women, 1st trimester | Feminino | — | 13 | BIVA clássica | Confiança e tolerância | RJL 101 (supine) | Lukaski HC (2007); DOI 10.1016/j.nut.2007.05.001 |
| ref-0157 | Females, US women, 2nd trimester | Feminino | — | 15 | BIVA clássica | Confiança e tolerância | RJL 101 (supine) | Lukaski HC (2007); DOI 10.1016/j.nut.2007.05.001 |
| ref-0158 | Females, US women, 3rd trimester | Feminino | — | 14 | BIVA clássica | Confiança e tolerância | RJL 101 (supine) | Lukaski HC (2007); DOI 10.1016/j.nut.2007.05.001 |
| ref-0159 | Females, US women, before pregnancy | Feminino | — | 15 | BIVA clássica | Confiança e tolerância | RJL 101 (supine) | Lukaski HC (2007); DOI 10.1016/j.nut.2007.05.001 |
| ref-0160 | Females, US women, postpartum | Feminino | — | 15 | BIVA clássica | Confiança e tolerância | RJL 101 (supine) | Lukaski HC (2007); DOI 10.1016/j.nut.2007.05.001 |
| ref-0197 | Females, athletes, all sports | Feminino | — | 440 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary | Campa F (2019); DOI 10.3390/ijerph16245066 |
| ref-0198 | Females, athletes, endurance | Feminino | — | 76 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary | Campa F (2019); DOI 10.3390/ijerph16245066 |
| ref-0199 | Females, athletes, team sports | Feminino | — | 187 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary | Campa F (2019); DOI 10.3390/ijerph16245066 |
| ref-0200 | Females, athletes, velocity/power | Feminino | — | 177 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary | Campa F (2019); DOI 10.3390/ijerph16245066 |
| ref-0161 | Females, postmenarcheal girls, 11 y | Feminino | — | 8 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0162 | Females, postmenarcheal girls, 12 y | Feminino | — | 10 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0163 | Females, postmenarcheal girls, 13 y | Feminino | — | 21 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0164 | Females, postmenarcheal girls, 14 y | Feminino | — | 29 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0165 | Females, postmenarcheal girls, 15 y | Feminino | — | 20 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0166 | Females, premenarcheal girls, 10 y | Feminino | — | 20 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0167 | Females, premenarcheal girls, 11 y | Feminino | — | 15 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0168 | Females, premenarcheal girls, 12 y | Feminino | — | 10 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0169 | Females, premenarcheal girls, 13 y | Feminino | — | 7 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0170 | Females, premenarcheal girls, 14 y | Feminino | — | 3 | BIVA clássica | Confiança e tolerância | Akern/RJL BIA-101 | Buffa R (2002); DOI 10.1016/S0899-9007(02)00755-4 |
| ref-0201 | Females, synchronized swimmers, Comen (13.9 y), pre-training | Feminino | — | 34 | BIVA clássica | Confiança e tolerância | Z-Metrix (BioparHom) | Carrasco-Marginet M (2017); DOI 10.1371/journal.pone.0178819 |
| ref-0202 | Females, synchronized swimmers, Junior (16.3 y), pre-training | Feminino | — | 15 | BIVA clássica | Confiança e tolerância | Z-Metrix (BioparHom) | Carrasco-Marginet M (2017); DOI 10.1371/journal.pone.0178819 |
| ref-0149 | Males+Females, 1-4 mo (faixa de Savino) | Misto/ambos | — | 73 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (supine) | Tanabe RF (2012); DOI 10.1016/j.clnu.2011.08.006 |
| ref-0150 | Males+Females, 2 mo (faixa de L'Abée) | Misto/ambos | — | 27 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (supine) | Tanabe RF (2012); DOI 10.1016/j.clnu.2011.08.006 |
| ref-0151 | Males+Females, 4-8 mo (faixa de Savino) | Misto/ambos | — | 57 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (supine) | Tanabe RF (2012); DOI 10.1016/j.clnu.2011.08.006 |
| ref-0152 | Males+Females, 6-7 mo (faixa de L'Abée) | Misto/ambos | — | 27 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (supine) | Tanabe RF (2012); DOI 10.1016/j.clnu.2011.08.006 |
| ref-0153 | Males+Females, 8-12 mo (faixa de Savino) | Misto/ambos | — | 28 | BIVA clássica | Confiança e tolerância | Xitron Hydra 4200 (supine) | Tanabe RF (2012); DOI 10.1016/j.clnu.2011.08.006 |
| ref-0171 | Males, Colombian, university students, 15-30 y | Masculino | — | 206 | BIVA clássica | Confiança e tolerância | Biody Xpert (Aminogram), seated | Díaz-Rincón M (2024); DOI 10.20960/nh.04842 |
| ref-0203 | Males, athletes, all sports | Masculino | — | 1116 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary | Campa F (2019); DOI 10.3390/ijerph16245066 |
| ref-0204 | Males, athletes, endurance | Masculino | — | 165 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary | Campa F (2019); DOI 10.3390/ijerph16245066 |
| ref-0205 | Males, athletes, team sports | Masculino | — | 576 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary | Campa F (2019); DOI 10.3390/ijerph16245066 |
| ref-0206 | Males, athletes, velocity/power | Masculino | — | 375 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary | Campa F (2019); DOI 10.3390/ijerph16245066 |
| ref-0207 | Males, elite international soccer referees, 29-44 y | Masculino | — | 41 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary | Izzicupo P (2023); DOI 10.3390/jfmk8030100 |
| ref-0208 | Males, non-elite marathon runners, 48 h post-race | Masculino | — | 19 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary (supine) | Nescolarde L (2020); DOI 10.3389/fphys.2020.00352 |
| ref-0209 | Males, non-elite marathon runners, immediately post-race | Masculino | — | 19 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary (supine) | Nescolarde L (2020); DOI 10.3389/fphys.2020.00352 |
| ref-0210 | Males, road cyclists, all | Masculino | — | 525 | BIVA clássica | Confiança e tolerância | Akern BIA-101 | Giorgi A (2018); DOI 10.1080/02640414.2018.1470597 |
| ref-0211 | Males, road cyclists, elite | Masculino | — | 79 | BIVA clássica | Confiança e tolerância | Akern BIA-101 | Giorgi A (2018); DOI 10.1080/02640414.2018.1470597 |
| ref-0212 | Males, road cyclists, professionals | Masculino | — | 155 | BIVA clássica | Confiança e tolerância | Akern BIA-101 | Giorgi A (2018); DOI 10.1080/02640414.2018.1470597 |
| ref-0181 | Males, runners G1 (creatinine <1.2 mg/dL), immediately post-race | Masculino | — | 7 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary (supine) | Nescolarde L (2020); DOI 10.3389/fphys.2020.00352 |
| ref-0182 | Males, runners G1, 48 h post-race | Masculino | — | 7 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary (supine) | Nescolarde L (2020); DOI 10.3389/fphys.2020.00352 |
| ref-0183 | Males, runners G2 (creatinine ≥1.2 mg/dL, AKI stage 1), immediately post-race | Masculino | — | 12 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary (supine) | Nescolarde L (2020); DOI 10.3389/fphys.2020.00352 |
| ref-0184 | Males, runners G2, 48 h post-race | Masculino | — | 12 | BIVA clássica | Confiança e tolerância | Akern BIA 101 Anniversary (supine) | Nescolarde L (2020); DOI 10.3389/fphys.2020.00352 |
| ref-0499 | Rossini-Venturini 2022 – Males, Brazilian older adults, without sarcopenia | Masculino | Brazil | 25 | BIVA específica | Confiança e tolerância | ImpediMed DF50 | Não informado (2022) |
| ref-0505 | Frau 2026 pooled – Females, Italian, 18-100 y | Feminino | Italy | 1020 | BIVA específica | Confiança e tolerância | Akern | Não informado (2026) |
| ref-0511 | Frau 2026 pooled – Males, Italian, 18-100 y | Masculino | Italy | 809 | BIVA específica | Confiança e tolerância | Akern | Não informado (2026) |
| ref-0506 | Frau 2026 – Females, Italian, 30-49 y | Feminino | Italy | 248 | BIVA específica | Confiança e tolerância | Akern | Não informado (2026) |
| ref-0507 | Frau 2026 – Females, Italian, 30-65 y | Feminino | Italy | 608 | BIVA específica | Confiança e tolerância | Akern | Não informado (2026) |
| ref-0508 | Frau 2026 – Females, Italian, 50-65 y | Feminino | Italy | 360 | BIVA específica | Confiança e tolerância | Akern | Não informado (2026) |
| ref-0512 | Frau 2026 – Males, Italian, 30-65 y | Masculino | Italy | 441 | BIVA específica | Confiança e tolerância | Akern | Não informado (2026) |
| ref-0513 | Frau 2026 – Males, Italian, 50-65 y | Masculino | Italy | 231 | BIVA específica | Confiança e tolerância | Akern | Não informado (2026) |
| ref-0514 | Frau F et al, JFMK 11:81, 2026 – Males, Italian, 30-49 y | Masculino | Italy | 210 | BIVA específica | Confiança e tolerância | Akern BIA-101/Anniv./BIVA PRO | Frau F (2026) |
| ref-0509 | Ibáñez 2015 (só italianos) – Females, 18-30 y | Feminino | Italy | 117 | BIVA específica | Confiança e tolerância | Akern BIA-101 | Não informado (2015) |
| ref-0515 | Ibáñez 2015 (só italianos) – Males, 18-30 y | Masculino | Italy | 103 | BIVA específica | Confiança e tolerância | Akern BIA-101 | Não informado (2015) |
| ref-0503 | Ibáñez 2015 – Females, Italian-Spanish young adults 18-30 y (pooled) | Feminino | Italy | 227 | BIVA específica | Confiança e tolerância | Akern-RJL BIA 101 | Não informado (2015) |
| ref-0504 | Ibáñez 2015 – Males, Italian-Spanish young adults 18-30 y (pooled) | Masculino | Italy | 213 | BIVA específica | Confiança e tolerância | Akern-RJL BIA 101 | Não informado (2015) |
| ref-0510 | Saragat 2014 – Females, Italian, 65-100 y | Feminino | Italy | 295 | BIVA específica | Confiança e tolerância | Akern BIA-101 | Não informado (2014) |
| ref-0516 | Saragat 2014 – Males, Italian, 65-100 y | Masculino | Italy | 265 | BIVA específica | Confiança e tolerância | Akern BIA-101 | Não informado (2014) |
| ref-0521 | Marini 2020 (Clin Nutr) – Females, Portuguese athletes | Feminino | Portugal | 63 | BIVA específica | Confiança e tolerância | Akern BIA 101 Anniversary | Não informado (2020) |
| ref-0522 | Marini 2020 (Clin Nutr) – Males, Portuguese athletes | Masculino | Portugal | 139 | BIVA específica | Confiança e tolerância | Akern BIA 101 Anniversary | Não informado (2020) |
| ref-0517 | Buffa 2013 – Females, USA NHANES, 21-49 y | Feminino | USA | 754 | BIVA específica | Confiança e tolerância | Xitron 4200 | Não informado (2013) |
| ref-0518 | Buffa 2013 – Males, USA NHANES, 21-49 y | Masculino | USA | 836 | BIVA específica | Confiança e tolerância | Xitron 4200 | Não informado (2013) |
| ref-0519 | Cebrián-Ponce 2024 – Females, CrossFit | Feminino | — | 38 | BIVA específica | Confiança e tolerância | Akern | Não informado (2024) |
| ref-0520 | Cebrián-Ponce 2024 – Males, CrossFit | Masculino | — | 107 | BIVA específica | Confiança e tolerância | Akern | Não informado (2024) |
| ref-0500 | Rossini-Venturini 2022 – Females, with sarcopenia | Feminino | — | 6 | BIVA específica | Confiança e tolerância | ImpediMed DF50 | Não informado (2022) |
| ref-0501 | Rossini-Venturini 2022 – Females, without sarcopenia | Feminino | — | 59 | BIVA específica | Confiança e tolerância | ImpediMed DF50 | Não informado (2022) |
| ref-0502 | Rossini-Venturini 2022 – Males, with sarcopenia | Masculino | — | 4 | BIVA específica | Confiança e tolerância | ImpediMed DF50 | Não informado (2022) |
| ref-0523 | Toselli 2020 – Males, elite youth soccer, all | Masculino | — | 178 | BIVA específica | Confiança e tolerância | Akern BIA 101 Anniversary | Não informado (2020) |
| ref-0401 | Females, German children/adolescents 10–13 y, BMI 11–15 | Feminino | Germany | 190 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0402 | Females, German children/adolescents 10–13 y, BMI >15–20 | Feminino | Germany | 1113 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0403 | Females, German children/adolescents 10–13 y, BMI >20–25 | Feminino | Germany | 748 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0404 | Females, German children/adolescents 10–13 y, BMI >25–30 | Feminino | Germany | 654 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0405 | Females, German children/adolescents 10–13 y, BMI >30–35 | Feminino | Germany | 293 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0406 | Females, German children/adolescents 14–17 y, BMI 14–19 | Feminino | Germany | 157 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0407 | Females, German children/adolescents 14–17 y, BMI >19–25 | Feminino | Germany | 1138 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0408 | Females, German children/adolescents 14–17 y, BMI >25–30 | Feminino | Germany | 1375 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0409 | Females, German children/adolescents 14–17 y, BMI >30–35 | Feminino | Germany | 796 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0410 | Females, German children/adolescents 14–17 y, BMI >35–40 | Feminino | Germany | 271 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0411 | Females, German children/adolescents 6–9 y, BMI 9–13 | Feminino | Germany | 72 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0412 | Females, German children/adolescents 6–9 y, BMI >13–15 | Feminino | Germany | 853 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0413 | Females, German children/adolescents 6–9 y, BMI >15–17 | Feminino | Germany | 1168 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0414 | Females, German children/adolescents 6–9 y, BMI >17–25 | Feminino | Germany | 879 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0450 | Males, German children/adolescents 10–13 y, BMI 11–15 | Masculino | Germany | 186 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0451 | Males, German children/adolescents 10–13 y, BMI >15–20 | Masculino | Germany | 1125 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0452 | Males, German children/adolescents 10–13 y, BMI >20–25 | Masculino | Germany | 484 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0453 | Males, German children/adolescents 10–13 y, BMI >25–30 | Masculino | Germany | 379 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0454 | Males, German children/adolescents 10–13 y, BMI >30–35 | Masculino | Germany | 165 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0455 | Males, German children/adolescents 14–17 y, BMI 14–19 | Masculino | Germany | 34 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0456 | Males, German children/adolescents 14–17 y, BMI >19–25 | Masculino | Germany | 167 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0457 | Males, German children/adolescents 14–17 y, BMI >25–30 | Masculino | Germany | 252 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0458 | Males, German children/adolescents 14–17 y, BMI >30–35 | Masculino | Germany | 249 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0459 | Males, German children/adolescents 14–17 y, BMI >35–40 | Masculino | Germany | 94 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0460 | Males, German children/adolescents 6–9 y, BMI 9–13 | Masculino | Germany | 39 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0461 | Males, German children/adolescents 6–9 y, BMI >13–15 | Masculino | Germany | 860 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0462 | Males, German children/adolescents 6–9 y, BMI >15–17 | Masculino | Germany | 1194 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0463 | Males, German children/adolescents 6–9 y, BMI >17–25 | Masculino | Germany | 670 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0464 | Men, German adults, BMI 18.5–25, 18–19 y | Masculino | Germany | 115 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0465 | Men, German adults, BMI 18.5–25, 20–29 y | Masculino | Germany | 614 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0466 | Men, German adults, BMI 18.5–25, 30–39 y | Masculino | Germany | 639 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0467 | Men, German adults, BMI 18.5–25, 40–49 y | Masculino | Germany | 464 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0468 | Men, German adults, BMI 18.5–25, 50–59 y | Masculino | Germany | 294 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0469 | Men, German adults, BMI 18.5–25, 60–69 y | Masculino | Germany | 218 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0470 | Men, German adults, BMI 18.5–25, >70 y | Masculino | Germany | 86 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0471 | Men, German adults, BMI >25–30, 18–19 y | Masculino | Germany | 138 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0472 | Men, German adults, BMI >25–30, 20–29 y | Masculino | Germany | 1360 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0473 | Men, German adults, BMI >25–30, 30–39 y | Masculino | Germany | 2747 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0474 | Men, German adults, BMI >25–30, 40–49 y | Masculino | Germany | 2494 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0475 | Men, German adults, BMI >25–30, 50–59 y | Masculino | Germany | 1994 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0476 | Men, German adults, BMI >25–30, 60–69 y | Masculino | Germany | 1267 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0477 | Men, German adults, BMI >25–30, >70 y | Masculino | Germany | 313 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0478 | Men, German adults, BMI >30–35, 18–19 y | Masculino | Germany | 115 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0479 | Men, German adults, BMI >30–35, 20–29 y | Masculino | Germany | 1200 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0480 | Men, German adults, BMI >30–35, 30–39 y | Masculino | Germany | 2682 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0481 | Men, German adults, BMI >30–35, 40–49 y | Masculino | Germany | 2809 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0482 | Men, German adults, BMI >30–35, 50–59 y | Masculino | Germany | 2542 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0483 | Men, German adults, BMI >30–35, 60–69 y | Masculino | Germany | 1643 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0484 | Men, German adults, BMI >30–35, >70 y | Masculino | Germany | 381 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0485 | Men, German adults, BMI >35–40, 18–19 y | Masculino | Germany | 55 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0486 | Men, German adults, BMI >35–40, 20–29 y | Masculino | Germany | 518 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0487 | Men, German adults, BMI >35–40, 30–39 y | Masculino | Germany | 1090 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0488 | Men, German adults, BMI >35–40, 40–49 y | Masculino | Germany | 1187 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0489 | Men, German adults, BMI >35–40, 50–59 y | Masculino | Germany | 1060 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0490 | Men, German adults, BMI >35–40, 60–69 y | Masculino | Germany | 643 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0491 | Men, German adults, BMI >35–40, >70 y | Masculino | Germany | 89 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0492 | Men, German adults, BMI >40–50, 18–19 y | Masculino | Germany | 30 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0493 | Men, German adults, BMI >40–50, 20–29 y | Masculino | Germany | 196 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0494 | Men, German adults, BMI >40–50, 30–39 y | Masculino | Germany | 444 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0495 | Men, German adults, BMI >40–50, 40–49 y | Masculino | Germany | 487 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0496 | Men, German adults, BMI >40–50, 50–59 y | Masculino | Germany | 417 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0497 | Men, German adults, BMI >40–50, 60–69 y | Masculino | Germany | 212 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0498 | Men, German adults, BMI >40–50, >70 y | Masculino | Germany | 29 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0415 | Women, German adults, BMI 18.5–25, 18–19 y | Feminino | Germany | 1052 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0416 | Women, German adults, BMI 18.5–25, 20–29 y | Feminino | Germany | 8307 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0417 | Women, German adults, BMI 18.5–25, 30–39 y | Feminino | Germany | 10162 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0418 | Women, German adults, BMI 18.5–25, 40–49 y | Feminino | Germany | 6691 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0419 | Women, German adults, BMI 18.5–25, 50–59 y | Feminino | Germany | 3408 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0420 | Women, German adults, BMI 18.5–25, 60–69 y | Feminino | Germany | 1106 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0421 | Women, German adults, BMI 18.5–25, >70 y | Feminino | Germany | 276 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0422 | Women, German adults, BMI >25–30, 18–19 y | Feminino | Germany | 1129 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0423 | Women, German adults, BMI >25–30, 20–29 y | Feminino | Germany | 11117 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0424 | Women, German adults, BMI >25–30, 30–39 y | Feminino | Germany | 18824 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0425 | Women, German adults, BMI >25–30, 40–49 y | Feminino | Germany | 17090 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0426 | Women, German adults, BMI >25–30, 50–59 y | Feminino | Germany | 13137 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0427 | Women, German adults, BMI >25–30, 60–69 y | Feminino | Germany | 5649 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0428 | Women, German adults, BMI >25–30, >70 y | Feminino | Germany | 1124 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0429 | Women, German adults, BMI >30–35, 18–19 y | Feminino | Germany | 582 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0430 | Women, German adults, BMI >30–35, 20–29 y | Feminino | Germany | 6507 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0431 | Women, German adults, BMI >30–35, 30–39 y | Feminino | Germany | 11506 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0432 | Women, German adults, BMI >30–35, 40–49 y | Feminino | Germany | 12495 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0433 | Women, German adults, BMI >30–35, 50–59 y | Feminino | Germany | 11817 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0434 | Women, German adults, BMI >30–35, 60–69 y | Feminino | Germany | 6305 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0435 | Women, German adults, BMI >30–35, >70 y | Feminino | Germany | 1419 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0436 | Women, German adults, BMI >35–40, 18–19 y | Feminino | Germany | 239 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0437 | Women, German adults, BMI >35–40, 20–29 y | Feminino | Germany | 2857 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0438 | Women, German adults, BMI >35–40, 30–39 y | Feminino | Germany | 5064 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0439 | Women, German adults, BMI >35–40, 40–49 y | Feminino | Germany | 5462 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0440 | Women, German adults, BMI >35–40, 50–59 y | Feminino | Germany | 5178 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0441 | Women, German adults, BMI >35–40, 60–69 y | Feminino | Germany | 3090 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0442 | Women, German adults, BMI >35–40, >70 y | Feminino | Germany | 685 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0443 | Women, German adults, BMI >40–50, 18–19 y | Feminino | Germany | 95 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0444 | Women, German adults, BMI >40–50, 20–29 y | Feminino | Germany | 1306 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0445 | Women, German adults, BMI >40–50, 30–39 y | Feminino | Germany | 2537 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0446 | Women, German adults, BMI >40–50, 40–49 y | Feminino | Germany | 2709 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0447 | Women, German adults, BMI >40–50, 50–59 y | Feminino | Germany | 2280 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0448 | Women, German adults, BMI >40–50, 60–69 y | Feminino | Germany | 1274 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |
| ref-0449 | Women, German adults, BMI >40–50, >70 y | Feminino | Germany | 243 | Índices H²/Z | Confiança | Data Input BIA 2000-S (supine, 50 kHz) | Bosy-Westphal A (2005); DOI 10.1093/ajcn/82.1.60 |

## Critérios de qualidade

- Uma população só entra no banco gráfico quando possui N maior que 2, médias, desvios-padrão positivos e correlação entre -1 e 1.
- Sistemas `R/H × Xc/H`, `Rsp × Xcsp` e `H²/R × H²/Xc` são mantidos separados.
- Linhas incompletas permanecem fora do banco gráfico porque não permitem reconstruir a matriz de covariância da elipse.
- A classificação continental usa o país identificado no registro; valores sem país permanecem como “Não identificado”.
- O estágio de desenvolvimento é uma classificação derivada da descrição textual e deve ser tratado como resumo operacional, não como dado original do artigo.

**Gerado em:** 26 de outubro de 2026

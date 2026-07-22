# BIVA2.0 - Software de Análise BIVA

Ferramenta web para análise de Bioimpedância Vetorial (BIVA) em uma Workspace integrada, com suporte a múltiplos métodos e populações de referência.

## 📋 Conteúdo

- **index.html** - Entrada principal com redirecionamento para a Workspace
- **BIVA2.html** - Workspace integrada para tolerância, confiança e análise mista
- **BIVA2.dc.html** - Fonte editável do design atual da Workspace
- **support.js** - Runtime local utilizado pela Workspace avançada
- **reference_populations_final.json** - Base revisada com 166 populações (133 de confiança e 33 de tolerância)
- **paired_reference_populations.json** - Oito conjuntos de referência para análise pareada
- **biva2-data.js** - Base JSON empacotada para uso direto no navegador
- **BIVA2-modelo-importacao.xlsx** - Modelo padronizado para importação em lote
- **xlsx.full.min.js** - Leitor local de planilhas Excel, sem envio de dados

## 🚀 Como Usar

1. Extraia os arquivos do ZIP
2. Abra **index.html** ou **BIVA2.html** em um navegador web
3. Escolha o método de análise na Workspace (Tolerância, Confiança ou Mista)
4. Selecione a população de referência usando os filtros ou importe o modelo Excel preenchido
5. Em tolerância, escolha a elipse tradicional ou a padronização por z-score
6. Adicione medidas com participante e tempo; medidas do mesmo participante serão conectadas
7. Em confiança, crie e nomeie duas ou mais elipses por média, DP, correlação e N
8. Para dados pareados, selecione T1 e T2 e informe os deltas ou escolha uma referência pareada publicada
9. Alterne entre a visualização T1/T2 conectada e a elipse dos deltas centrada no zero
10. Use "Texto" para acrescentar anotações com fonte, cor, tamanho e posição editáveis
11. Ajuste manualmente os eixos, se precisar padronizar a escala dos gráficos
12. Exporte a figura completa em PNG ou as elipses e estatísticas em Excel
13. Use "Migrar para Mista" para levar tolerância/confiança para a análise mista já carregada

## 🎯 Métodos Disponíveis

### Tolerância
- Análise de variabilidade populacional
- 3 elipses (50%, 75%, 95%)
- Modos tradicional deslocado e z-score centrado no zero
- Múltiplas medidas por participante, tempos e trajetórias longitudinais

### Confiança
- Intervalo de confiança (95%)
- Erro padrão = DP/√N
- Entrada manual, nome, cor, traço e espessura por elipse
- Comparação independente e Hotelling T² pareado sobre os deltas

### Mista
- Combinação de Tolerância + Confiança
- Visão completa e comparativa
- 166 populações e 8 conjuntos pareados

## 🌐 Idiomas Suportados

- Português (Brasil)
- Inglês
- Espanhol
- Italiano

## 📊 Populações de Referência

Total de **166 populações** importadas exclusivamente das abas “Confidence refs” (133) e “Tolerance refs” (33) do arquivo de referência fornecido, além de **8 conjuntos pareados** da aba “Confidence paired data”. A aba auxiliar de coordenadas de desenho não foi tratada como população.

Cada população contém:
- Código e identificação
- Tamanho da amostra (N)
- Média e desvio padrão de R/H
- Média e desvio padrão de Xc/H
- Correlação entre R/H e Xc/H
- Sexo e país de origem

## 📈 Funcionalidades

✅ Entrada de elipses e medidas individuais longitudinais
✅ Importação simultânea de vários participantes e grupos por Excel
✅ Modelo Excel para download com validação e colunas calculadas
✅ Manual do modelo Excel em português, inglês, espanhol e italiano
✅ Cálculo automático de média, DP amostral, correlação de Pearson e N por grupo
✅ BIVA clássica (R/H, Xc/H) e específica (Rsp, Xcsp)
✅ Bloqueio da análise quando faltam estatura ou perímetros exigidos
✅ Gráfico RXc com elipses e fallback Canvas local
✅ Modos claro e escuro com alternância na página inicial e no workspace
✅ Tolerance tradicional deslocada ou centrada em z-score
✅ Eixos dos gráficos editáveis manualmente
✅ Atalho para abrir análise mista mantendo medições, elipses, estilos e eixos
✅ Linha do centro da elipse à origem com cálculo do ângulo de fase
✅ Confidence com entrada de elipses por média, DP, correlação e N
✅ Estilo editável por elipse: cor, traço e espessura
✅ Edição de elipses customizadas já adicionadas
✅ Cálculos estatísticos (distância de Mahalanobis D² e classificação por elipse)
✅ Hotelling T² independente e pareado, F e p-valor
✅ Elipse de confiança dos deltas com origem centralizada
✅ Trajetórias longitudinais com participante, tempo, cor e símbolo
✅ Caixas de texto com fonte, cor, tamanho e posição editáveis
✅ Nomes e legenda dentro da figura exportada
✅ Export PNG com fundo branco consistente
✅ Excel com abas de elipses, comparações em pares, análise pareada e dados longitudinais
✅ Multi-idioma (PT-BR, EN, ES, IT)
✅ Interface responsiva
✅ Workspace única com banco visual e eixos customizáveis

## 🧪 Análise de Confiança

- **Transversal:** compara duas elipses marcadas usando Hotelling T², F aproximado, p-value e distância de Mahalanobis.
- **Pareada:** aplica Hotelling T² de uma amostra ao vetor médio das diferenças T2-T1 usando a matriz de covariância dos deltas.
- **Visualização T1/T2:** conecta os centros das duas elipses e indica a direção temporal.
- **Visualização dos deltas:** desenha o IC 95% do delta e mantém a origem (0,0) no centro do gráfico.
- **Excel:** calcula automaticamente todas as comparações independentes em pares entre as elipses disponíveis.
- Para resultados estáveis, cada grupo/momento precisa ter amostra suficiente para estimar a matriz de covariância.

## 💻 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Sem necessidade de instalação ou servidor
- Funciona offline após carregamento

## 📝 Notas

- Os dados são armazenados localmente no navegador
- Não há envio de dados para servidores externos
- Compatível com desktop, tablet e mobile

## 🔗 Referências

- Piccoli A, Nigrelli S, Caberlotto A, et al. Bivariate normal values of the bioelectrical impedance vector in adult and elderly populations. Am J Clin Nutr 1995;61:269-270.
- Piccoli A, Pillon L, Dumler F. Impedance vector distribution by sex, race, body mass index, and age in the United States: standard reference intervals as bivariate Z scores. Nutrition. 2002;18(2):153-167.
- Campa F, Matias C, Gatterer H, et al. Classic Bioelectrical Impedance Vector Reference Values for Assessing Body Composition in Male and Female Athletes. Int J Environ Res Public Health. 2019;16(24):5066.
- Bioelectrical Impedance Vector Analysis (BIVA) - Metodologia científica estabelecida

---

**Versão:** 9.0
**Data:** Julho 2026
**Desenvolvido com:** HTML5, CSS3, JavaScript e Canvas

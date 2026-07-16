# BIVA2.0 - Software de Análise BIVA

Ferramenta web para análise de Bioimpedância Vetorial (BIVA) em uma Workspace integrada, com suporte a múltiplos métodos e populações de referência.

## 📋 Conteúdo

- **index.html** - Entrada principal com redirecionamento para a Workspace
- **BIVA2.html** - Workspace integrada para tolerância, confiança e análise mista
- **support.js** - Runtime local utilizado pela Workspace avançada
- **reference_populations_final.json** - Base de dados com 183 populações completas
- **biva2-data.js** - Base JSON empacotada para uso direto no navegador

## 🚀 Como Usar

1. Extraia os arquivos do ZIP
2. Abra **index.html** ou **BIVA2.html** em um navegador web
3. Escolha o método de análise na Workspace (Tolerância, Confiança ou Mista)
4. Selecione a população de referência usando os filtros quando estiver em Tolerância ou Mista
5. Em tolerância, escolha a elipse tradicional ou a padronização por z-score
6. Adicione medidas com participante e tempo; medidas do mesmo participante serão conectadas
7. Em confiança, crie e nomeie duas ou mais elipses por média, DP, correlação e N
8. Para dados pareados, selecione T1 e T2 e informe os DP, correlação e N dos deltas
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
- 183 populações

## 🌐 Idiomas Suportados

- Português (Brasil)
- Inglês
- Espanhol

## 📊 Populações de Referência

Total de **183 populações completas** após limpeza de registros incompletos, Piccoli solto e elipses de braço digitadas manualmente, com referências atléticas adicionadas de Campa et al. 2019:
- **BIVAtolerance25042024.xlsm** e artigo Campa 2019 (42 populações)
- **BIVAconfidenceBonegeometryfemaleathletes.xls** e artigo Campa 2019 (141 populações)

Cada população contém:
- Código e identificação
- Tamanho da amostra (N)
- Média e desvio padrão de R/H
- Média e desvio padrão de Xc/H
- Correlação entre R/H e Xc/H
- Sexo e país de origem

## 📈 Funcionalidades

✅ Entrada de elipses e medidas individuais longitudinais
✅ Gráfico RXc com elipses e fallback Canvas local
✅ Interface exclusivamente em modo claro
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
✅ Multi-idioma (PT-BR, EN, ES)
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

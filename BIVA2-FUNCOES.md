# BIVA2.0 - Funções do aplicativo

## Visão geral

O BIVA2.0 é uma aplicação web para análise vetorial de bioimpedância. O aplicativo funciona no navegador, sem envio dos dados inseridos para um servidor, e reúne análises de tolerância, confiança e uma área mista.

## Página inicial

- Escolha entre **Tolerância**, **Confiança** e **Mista**.
- Alterne a interface entre português, inglês, espanhol e italiano.
- Alterne entre os temas claro e escuro.
- Abra o **Estimador de correlação de Pearson** como ferramenta complementar.
- Continue usando a aplicação em computador, tablet ou celular.

## Sistemas de coordenadas

### BIVA clássica

- Eixo X: resistência dividida pela estatura (`R/H`, em `Ω/m`).
- Eixo Y: reatância dividida pela estatura (`Xc/H`, em `Ω/m`).
- Cálculo automático a partir de `R`, `Xc` e estatura durante a importação.
- Disponível para análises de tolerância, confiança, comparação e z-score.

### BIVA específica

- Eixo X: resistência específica (`Rsp`, em `Ω·cm`).
- Eixo Y: reatância específica (`Xcsp`, em `Ω·cm`).
- Usa estatura e perímetros de braço direito, cintura e panturrilha direita.
- Bloqueia a importação quando algum dos três perímetros necessários estiver ausente.
- Possui populações de referência específicas próprias, separadas das referências clássicas.

### Índices de impedância H²/Z

- Eixo X: `H²/R`, em `cm²/Ω`.
- Eixo Y: `H²/Xc`, em `cm²/Ω`.
- Calcula os índices a partir de `R`, `Xc` e estatura durante a importação.
- Mantém essas referências separadas da BIVA clássica para evitar conversões metodologicamente incorretas.
- O ângulo de fase é calculado pela relação original entre `Xc` e `R`, mesmo com os eixos invertidos dos índices.

## Banco de populações de referência

- **523 populações válidas** no banco atual.
- **400** referências de BIVA clássica.
- **25** referências de BIVA específica.
- **98** referências com índices `H²/R` e `H²/Xc`.
- **237** referências aplicáveis a confiança e tolerância.
- **233** referências identificadas para confiança.
- **53** referências identificadas para tolerância.
- Deduplicação por sistema de coordenadas, sexo, N, médias, desvios-padrão e correlação.
- Preservação de grupo, sexo, país, idade, população, equipamento, artigo, ano, DOI, nota, origem da extração, uso da elipse e linhas de proveniência.
- DOI apresentado como hyperlink quando disponível.
- Referências incompatíveis com o sistema de coordenadas selecionado não aparecem na lista.

## Busca e seleção de referências

- Pesquisa por texto em grupo, país, equipamento e referência bibliográfica.
- Filtro por sexo.
- Filtro por população saudável, esportiva ou clínica.
- Seleção simultânea de várias populações.
- Seleção da população ativa para classificação ou criação de elipse.
- Visualização de N, média, desvio-padrão, equipamento, idade e artigo nos cartões.
- Inclusão de uma referência personalizada durante a sessão.

## Análise de tolerância

- Desenha elipses de tolerância de 50%, 75% e 95%.
- Permite inserir vários pontos individuais.
- Importa vários participantes de uma planilha Excel padronizada.
- Calcula automaticamente as coordenadas conforme o sistema selecionado.
- Classifica a medida individual em relação às elipses de 50%, 75% e 95%.
- Calcula distância de Mahalanobis e `D²` para a classificação.
- Permite editar nome, tempo, coordenadas, cor e símbolo de cada ponto.
- Permite excluir pontos individualmente ou limpar a análise.
- Conecta medidas do mesmo participante pela ordem de inclusão.
- Suporta análise longitudinal com diferentes tempos para o mesmo participante.
- Permite migrar os dados já inseridos para a análise mista.

### Tolerância por z-score

- Centraliza a população de referência em `(0,0)`.
- Converte `R/H` e `Xc/H` em escores z.
- Mantém as elipses de 50%, 75% e 95% no espaço padronizado.
- Está disponível apenas para BIVA clássica, porque depende de uma referência clássica compatível.

## Análise de confiança

- Cria elipses de confiança de 95% da média.
- Adiciona uma elipse a partir de uma população ativa.
- Adiciona manualmente nome, médias, desvios-padrão, correlação e N.
- Importa vários participantes e calcula elipses por grupo.
- Calcula média, desvio-padrão amostral, correlação de Pearson e N de cada grupo importado.
- Permite editar os valores de uma elipse já criada.
- Permite alterar nome, cor, traço, espessura e visibilidade.
- Compara várias elipses selecionadas em pares.
- Permite migrar elipses e estilos para a análise mista.

### Comparação independente

- Calcula o teste `T²` de Hotelling para dois grupos independentes.
- Calcula estatística F, graus de liberdade e p-valor.
- Calcula distância de Mahalanobis e `D²`.
- Informa significância estatística e tamanho relativo da separação vetorial.
- Gera todas as comparações em pares no arquivo Excel exportado.

### Comparação pareada

- Define T1/antes e T2/depois.
- Conecta os centros das elipses e mostra a direção temporal.
- Aceita desvio-padrão dos deltas, correlação dos deltas e N pareado.
- Permite selecionar referências pareadas publicadas.
- Desenha a elipse dos deltas centralizada na origem.
- Calcula `T²` de Hotelling pareado, F, graus de liberdade e p-valor.
- Mantém separadas as duas visualizações: T1/T2 e deltas.

## Análise mista

- Exibe populações, elipses de confiança e pontos individuais no mesmo gráfico.
- Permite escolher confiança ou tolerância para cada referência selecionada.
- Preserva dados ao migrar das análises de confiança ou tolerância.
- Combina comparação entre grupos, classificação individual e trajetórias longitudinais.

## Ângulo de fase

- Liga a origem ao centro de cada referência, elipse adicionada ou ponto individual.
- Calcula e mostra `φ = arctan(Xc/R)` em graus.
- Usa a fórmula equivalente correta no modo `H²/Z`.
- Mostra o valor no gráfico e na legenda.
- Anima a formação das linhas para facilitar a identificação visual.
- Distribui os rótulos em posições alternadas para reduzir sobreposição.
- Desativa a função em z-score e na visualização de deltas, nas quais a inclinação não representa o ângulo de fase original.

## Gráfico e edição visual

- Escala automática, escala incluindo zero ou limites manuais.
- Definição manual de início, fim e intervalo dos eixos.
- Edição dos nomes e unidades dos eixos.
- Fundo branco consistente no PNG exportado.
- Legenda interna móvel, fechável e reativável.
- Nomes das referências, elipses e participantes dentro da figura.
- Caixas de texto móveis com fonte, cor, tamanho e posição configuráveis.
- Cores, símbolos, traços e espessuras editáveis.
- Redimensionamento responsivo do gráfico.

## Importação por Excel

- Modelo Excel disponível diretamente no aplicativo.
- Importação de `.xlsx`, `.xls` e `.csv`.
- Campos básicos: grupo, `R`, `Xc`, participante e tempo.
- Estatura obrigatória para os três sistemas normalizados.
- Perímetros obrigatórios apenas para BIVA específica.
- Cor e símbolo opcionais por grupo.
- Validação de colunas, valores e tamanho mínimo dos grupos.
- Aviso quando o N informado diverge do número de linhas importadas.
- Dados permanecem locais no navegador.

## Exportações

### PNG

- Exporta o nomograma completo.
- Inclui elipses, pontos, trajetórias, nomes, ângulos, legenda e caixas de texto.
- Usa fundo branco para manter a figura consistente fora do aplicativo.

### Excel

- Aba de elipses e parâmetros.
- Aba de comparações independentes em pares.
- Aba de análise pareada quando utilizada.
- Aba de dados longitudinais de tolerância.
- Aba de anotações adicionadas ao gráfico.
- Inclui Hotelling `T²`, F, graus de liberdade, p-valor e distância de Mahalanobis.

## Estimador de correlação de Pearson

- Abre uma imagem de uma elipse publicada.
- Calibra os eixos X e Y usando pontos conhecidos.
- Ajusta a elipse por contorno ou pontos extremos.
- Permite ajuste fino de centro, semieixos e rotação.
- Estima a correlação de Pearson pela geometria da elipse.
- Calcula desvios-padrão conforme tipo e cobertura da elipse.
- Possui calculadora direta para semieixos e ângulo conhecidos.
- Copia tabela e exporta os resultados em JSON.

## Regras e limitações metodológicas

- Uma elipse exige N maior que 2, desvios-padrão positivos e correlação estritamente entre -1 e 1.
- Registros incompletos ou com matriz singular não são usados nos cálculos.
- A BIVA deve usar referências obtidas com protocolo, frequência e equipamento compatíveis.
- Os índices `H²/R` e `H²/Xc` não são convertidos para `R/H` e `Xc/H`.
- A análise pareada exige a dispersão e a correlação dos deltas; esses valores não podem ser recuperados apenas das duas elipses marginais.
- O z-score está limitado à BIVA clássica.
- Resultados estatísticos devem ser interpretados junto ao desenho do estudo e ao contexto clínico ou esportivo.

## Arquivos principais

- `index.html`: entrada e redirecionamento para o aplicativo.
- `BIVA2.html`: versão executável atual.
- `BIVA2.dc.html`: fonte editável da interface.
- `biva2-data.js`: banco empacotado para funcionamento local.
- `reference_populations_final.json`: banco estruturado de referências.
- `paired_reference_populations.json`: referências pareadas.
- `BIVA2-modelo-importacao.xlsx`: modelo de importação em lote.
- `estimador-pearson.html`: estimador complementar de correlação.
- `tools/import_reference_populations.py`: importador reproduzível do banco de referências.

**Atualização:** outubro de 2026

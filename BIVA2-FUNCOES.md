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

- Pesquisa por vários termos ao mesmo tempo (ex.: `akern soccer 2020`), sem distinção de maiúsculas ou acentos, em grupo, país, aparelho, idade, tipo, artigo, DOI e notas; o trecho encontrado fica destacado no cartão.
- Filtro por sexo: masculino, feminino e amostras mistas (M+F).
- Filtro por população saudável, esportiva, clínica ou outras.
- Filtros por **aparelho** (fabricante), **país**, **faixa etária** e **estudo** (autor e ano), cada opção com a contagem de referências disponíveis considerando os demais filtros.
- Ordenação por ordem do banco, país, aparelho, maior N ou estudo mais recente.
- Agrupamento da lista por aparelho, país, idade ou estudo, com cabeçalho e contagem por grupo.
- Cartões com o nome descritivo do grupo e etiquetas de país, aparelho, idade e tipo; clicar numa etiqueta filtra por aquele valor.
- Botão **Selecionadas** para ver só o que já está no gráfico e **Limpar filtros** para voltar à lista inteira.
- A lista mostra 60 cartões por vez (**Mostrar mais**), o que mantém a interface rápida com o banco completo.
- Seleção simultânea de várias populações; a cor de cada uma é fixada ao entrar no gráfico.
- Miniatura com a forma real da elipse de tolerância de 95%.
- Inclusão de referências próprias com nome, país, aparelho, idade, artigo, sexo e tipo. Elas ficam salvas no navegador, entram nos mesmos filtros e podem ser excluídas.
- Faixa etária, fabricante e país ausentes são deduzidos do texto do grupo apenas para busca e filtro; os valores auditados do banco não são alterados.

## Aparência das elipses

- Botão **Estilo** na barra do gráfico (ou clique num item de "No gráfico") abre o painel de aparência, encaixado ao lado do gráfico.
- Mesmos controles para populações de referência e elipses de confiança: cor (seletor livre e paleta rápida), tipo de linha (contínua, tracejada, pontilhada, traço-ponto, traço longo), símbolo do centro (círculo, quadrado, losango, triângulo, xis, cruz ou nenhum), espessura, preenchimento e rótulo.
- **Aplicar a todas**: cores padrão, paleta segura para daltonismo (Okabe-Ito), preto e branco para publicação, variar linhas e variar símbolos.
- A legenda dentro da figura reproduz linha e símbolo de cada elipse.
- Estilos entram na exportação Excel e são preservados na sessão.

## Sessão e integração entre páginas

- A análise em andamento (método, populações, elipses, pontos, estilos, eixos, anotações e filtros) é salva no navegador e restaurada ao reabrir ou recarregar a página.
- Na página inicial, o cartão da técnica em uso mostra **Continuar**; **Nova análise** limpa tudo após confirmação.
- O botão **Estimador** abre o estimador de correlação em nova aba.
- Elipses enviadas pelo estimador chegam em **Recebido do Estimador** e podem virar referência própria, elipse de confiança ou apenas preencher o campo de correlação dos formulários.
- Tema claro/escuro compartilhado entre a Workspace e o estimador.

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
- Cores, símbolos, tipos de linha, espessuras e preenchimentos editáveis no painel Estilo.
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
- Usa fundo branco e paleta clara, mesmo com o tema escuro ativo.

### Excel

- Aba de elipses e parâmetros, com estilo, país, aparelho, idade, referência e DOI.
- Aba de comparações independentes em pares.
- Aba de análise pareada quando utilizada.
- Aba de dados longitudinais de tolerância.
- Aba de anotações adicionadas ao gráfico.
- Inclui Hotelling `T²`, F, graus de liberdade, p-valor e distância de Mahalanobis.

## Estimador de correlação de Pearson

- Abre a imagem de uma elipse publicada por arquivo, arrastar-e-soltar ou colagem (`Ctrl+V`).
- Calibra os eixos X e Y com dois pontos conhecidos em cada um; `Enter` percorre os campos e as linhas de calibração podem ser arrastadas.
- Lupa com mira e coordenadas enquanto se marca um ponto.
- Ajusta a elipse por contorno (5 ou mais pontos, arrastáveis) ou pelas 4 pontas dos eixos.
- Ajuste fino de centro, semieixos e rotação por alças, teclado ou valores.
- Funciona com mouse, toque e caneta; pinça para zoom.
- Desfazer com `Ctrl+Z` e sessão salva no navegador.
- Estima a correlação de Pearson pela geometria da elipse.
- Tipo de elipse, cobertura e n são guardados por elipse; calcula médias (centro) e desvios-padrão.
- Tipos: tolerância populacional (χ²), tolerância de Piccoli (n finito), confiança da média (F de Hotelling) e confiança da média (χ², como a Workspace desenha).
- Com duas ou mais elipses do mesmo grupo, mostra o r médio e a amplitude como verificação da marcação.
- **Enviar para o BIVA2**: leva nome, médias, DPs, r e N para a Workspace.
- Possui calculadora direta para semieixos e ângulo conhecidos.
- Copia tabela (médias, DPs, r, n) e exporta os resultados em JSON.

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
- `vendor/`: React e ReactDOM locais, para abrir a Workspace sem internet.

**Atualização:** novembro de 2026

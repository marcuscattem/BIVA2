(function(){
'use strict';

const LANG_KEY='biva2-lang';
const LANGS=['pt-BR','en','es','it'];
const IDX={en:0,es:1,it:2};

// Portuguese source text followed by English, Spanish and Italian.
const TERMS={
  'BIVA2 | Estimador de correlação de Pearson':['BIVA2 | Pearson correlation estimator','BIVA2 | Estimador de correlación de Pearson','BIVA2 | Stimatore della correlazione di Pearson'],
  'Voltar ao BIVA2':['Back to BIVA2','Volver a BIVA2','Torna a BIVA2'],
  'Correlação de Pearson a partir de elipses':['Pearson correlation from ellipses','Correlación de Pearson a partir de elipses','Correlazione di Pearson dalle ellissi'],
  'ferramenta complementar do BIVA2.0':['BIVA2.0 companion tool','herramienta complementaria de BIVA2.0','strumento complementare di BIVA2.0'],
  'Idioma da interface':['Interface language','Idioma de la interfaz','Lingua dell’interfaccia'],
  'Português':['Portuguese','Portugués','Portoghese'],
  'Apagar imagem, calibração e elipses':['Clear image, calibration and ellipses','Borrar imagen, calibración y elipses','Cancella immagine, calibrazione ed ellissi'],
  'Nova sessão':['New session','Nueva sesión','Nuova sessione'],
  'Apagar tudo?':['Clear everything?','¿Borrar todo?','Cancellare tutto?'],
  'Alternar tema claro/escuro (compartilhado com o BIVA2)':['Toggle light/dark theme (shared with BIVA2)','Cambiar tema claro/oscuro (compartido con BIVA2)','Cambia tema chiaro/scuro (condiviso con BIVA2)'],
  'sem calibração':['not calibrated','sin calibración','non calibrato'],
  'r de Pearson':['Pearson r','r de Pearson','r di Pearson'],
  'aguardando':['waiting','en espera','in attesa'],
  'prévia':['preview','vista previa','anteprima'],
  'Copiar o valor de r':['Copy r value','Copiar el valor de r','Copia il valore di r'],
  'copiar':['copy','copiar','copia'],
  'Carregue a imagem do gráfico':['Load the chart image','Cargue la imagen del gráfico','Carica l’immagine del grafico'],
  'Ou abra o exemplo pronto para ver como funciona.':['Or open the ready-made example to see how it works.','O abra el ejemplo preparado para ver cómo funciona.','Oppure apri l’esempio pronto per vedere come funziona.'],
  'O que falta':['Remaining steps','Qué falta','Passaggi mancanti'],
  'Imagem do gráfico':['Chart image','Imagen del gráfico','Immagine del grafico'],
  'Selecionar imagem':['Choose image','Seleccionar imagen','Seleziona immagine'],
  'Nenhum arquivo selecionado':['No file selected','Ningún archivo seleccionado','Nessun file selezionato'],
  'Exemplo integrado':['Built-in example','Ejemplo integrado','Esempio integrato'],
  'Imagem da sessão':['Session image','Imagen de la sesión','Immagine della sessione'],
  'Abrir exemplo':['Open example','Abrir ejemplo','Apri esempio'],
  'Colar imagem':['Paste image','Pegar imagen','Incolla immagine'],
  'Também dá para':['You can also','También puede','Puoi anche'],
  'arrastar o arquivo':['drag the file','arrastrar el archivo','trascinare il file'],
  'para a área central ou colar com':['to the central area or paste with','al área central o pegar con','nell’area centrale o incollare con'],
  '. A sessão fica salva neste navegador.':['. The session is saved in this browser.','. La sesión se guarda en este navegador.','. La sessione viene salvata in questo browser.'],
  'Escalas dos eixos':['Axis scales','Escalas de los ejes','Scale degli assi'],
  'Clique em duas marcas conhecidas de cada eixo e digite os valores (':['Click two known tick marks on each axis and enter their values (','Haga clic en dos marcas conocidas de cada eje e introduzca los valores (','Fai clic su due tacche note di ciascun asse e inserisci i valori ('],
  'avança). As linhas tracejadas podem ser arrastadas para corrigir.':['moves forward). Drag the dashed lines to correct them.','avanza). Las líneas discontinuas se pueden arrastrar para corregirlas.','prosegue). Le linee tratteggiate possono essere trascinate per correggerle.'],
  'Marcar eixo X':['Mark X axis','Marcar eje X','Segna asse X'],
  'X do 1º ponto':['X of 1st point','X del 1.er punto','X del 1° punto'],
  'X do 2º ponto':['X of 2nd point','X del 2.º punto','X del 2° punto'],
  'Marcar eixo Y':['Mark Y axis','Marcar eje Y','Segna asse Y'],
  'Y do 1º ponto':['Y of 1st point','Y del 1.er punto','Y del 1° punto'],
  'Y do 2º ponto':['Y of 2nd point','Y del 2.º punto','Y del 2° punto'],
  'Refazer calibração':['Redo calibration','Rehacer calibración','Ripeti calibrazione'],
  'Marcar a elipse':['Trace the ellipse','Marcar la elipse','Traccia l’ellisse'],
  'Contorno':['Contour','Contorno','Contorno'],
  '4 pontas':['4 endpoints','4 extremos','4 estremi'],
  'Editar':['Edit','Editar','Modifica'],
  'Clique numa elipse para selecioná-la. Arraste o ponto cheio para mudar tamanho e giro; o vazado muda o outro semieixo.':['Click an ellipse to select it. Drag the filled handle to change size and rotation; the hollow handle changes the other semi-axis.','Haga clic en una elipse para seleccionarla. Arrastre el control sólido para cambiar el tamaño y el giro; el control hueco cambia el otro semieje.','Fai clic su un’ellisse per selezionarla. Trascina la maniglia piena per cambiare dimensione e rotazione; quella vuota modifica l’altro semiasse.'],
  'Clique em 5 pontos ou mais espalhados pelo contorno. A lupa mostra onde o clique cai; arraste um ponto para corrigi-lo. Enter confirma.':['Click 5 or more points around the contour. The magnifier shows where the click lands; drag a point to correct it. Enter confirms.','Haga clic en 5 puntos o más distribuidos por el contorno. La lupa muestra dónde cae el clic; arrastre un punto para corregirlo. Enter confirma.','Fai clic su almeno 5 punti distribuiti sul contorno. La lente mostra dove cade il clic; trascina un punto per correggerlo. Invio conferma.'],
  'Clique nas duas pontas do eixo maior e depois nas duas pontas do eixo menor, nessa ordem.':['Click the two endpoints of the major axis, then the two endpoints of the minor axis, in that order.','Haga clic en los dos extremos del eje mayor y después en los dos extremos del eje menor, en ese orden.','Fai clic sui due estremi dell’asse maggiore e poi sui due estremi dell’asse minore, in quest’ordine.'],
  'Criar elipse':['Create ellipse','Crear elipse','Crea ellisse'],
  'Desfazer ponto':['Undo point','Deshacer punto','Annulla punto'],
  'Limpar':['Clear','Limpiar','Cancella'],
  'Elipses marcadas':['Traced ellipses','Elipses marcadas','Ellissi tracciate'],
  'Nenhuma elipse ainda.':['No ellipses yet.','Aún no hay elipses.','Nessuna ellisse.'],
  'enviada':['sent','enviada','inviata'],
  'calibre os eixos':['calibrate the axes','calibre los ejes','calibra gli assi'],
  'Duplicar':['Duplicate','Duplicar','Duplica'],
  'Excluir':['Delete','Eliminar','Elimina'],
  'Ajuste fino':['Fine adjustment','Ajuste fino','Regolazione fine'],
  'Arraste as alças no gráfico, use as setas do teclado, ou digite os valores em pixels.':['Drag the handles on the chart, use the arrow keys, or enter pixel values.','Arrastre los controles del gráfico, use las flechas del teclado o introduzca los valores en píxeles.','Trascina le maniglie sul grafico, usa i tasti freccia oppure inserisci i valori in pixel.'],
  '↺ girar':['↺ rotate','↺ girar','↺ ruota'],
  '↻ girar':['↻ rotate','↻ girar','↻ ruota'],
  'Centro X':['X center','Centro X','Centro X'],
  'Centro Y':['Y center','Centro Y','Centro Y'],
  'Semieixo 1':['Semi-axis 1','Semieje 1','Semiasse 1'],
  'Semieixo 2':['Semi-axis 2','Semieje 2','Semiasse 2'],
  'Rotação na tela (graus)':['On-screen rotation (degrees)','Rotación en pantalla (grados)','Rotazione sullo schermo (gradi)'],
  'Carregue uma imagem ou abra o exemplo':['Load an image or open the example','Cargue una imagen o abra el ejemplo','Carica un’immagine o apri l’esempio'],
  'setas movem ·':['arrows move ·','las flechas mueven ·','le frecce spostano ·'],
  'giram · roda ou pinça dá zoom ·':['rotate · wheel or pinch zooms ·','giran · la rueda o el gesto de pinza amplían ·','ruotano · rotella o pizzico regolano lo zoom ·'],
  '+arrastar move a tela ·':['+drag pans the view ·','+arrastrar desplaza la vista ·','+trascina sposta la vista ·'],
  'desfaz':['undo','deshace','annulla'],
  'Desfazer (Ctrl+Z)':['Undo (Ctrl+Z)','Deshacer (Ctrl+Z)','Annulla (Ctrl+Z)'],
  '↶ desfazer':['↶ undo','↶ deshacer','↶ annulla'],
  'ajustar':['fit','ajustar','adatta'],
  'Resultado':['Result','Resultado','Risultato'],
  'coeficiente de correlação':['correlation coefficient','coeficiente de correlación','coefficiente di correlazione'],
  'r de Pearson entre os dois eixos':['Pearson r between the two axes','r de Pearson entre los dos ejes','r di Pearson tra i due assi'],
  'Parâmetros para o BIVA2':['Parameters for BIVA2','Parámetros para BIVA2','Parametri per BIVA2'],
  'Tipo, cobertura e':['The type, coverage and','El tipo, la cobertura y','Il tipo, la copertura e'],
  'da elipse selecionada convertem os semieixos em desvios-padrão.':['of the selected ellipse convert the semi-axes into standard deviations.','de la elipse seleccionada convierten los semiejes en desviaciones estándar.','dell’ellisse selezionata convertono i semiassi in deviazioni standard.'],
  'Nome da elipse ou população':['Ellipse or population name','Nombre de la elipse o población','Nome dell’ellisse o della popolazione'],
  'ex.: Atletas, homens (Fig. 2)':['e.g.: Athletes, men (Fig. 2)','p. ej.: Atletas, hombres (Fig. 2)','es.: Atleti, uomini (Fig. 2)'],
  'Tipo de elipse':['Ellipse type','Tipo de elipse','Tipo di ellisse'],
  'Tolerância populacional (χ², n grande)':['Population tolerance (χ², large n)','Tolerancia poblacional (χ², n grande)','Tolleranza della popolazione (χ², n grande)'],
  'Tolerância de Piccoli (n finito)':['Piccoli tolerance (finite n)','Tolerancia de Piccoli (n finito)','Tolleranza di Piccoli (n finito)'],
  'Confiança da média (F, Hotelling)':['Mean confidence (F, Hotelling)','Confianza de la media (F, Hotelling)','Confidenza della media (F, Hotelling)'],
  'Confiança da média (χ², n grande)':['Mean confidence (χ², large n)','Confianza de la media (χ², n grande)','Confidenza della media (χ², n grande)'],
  'Cobertura':['Coverage','Cobertura','Copertura'],
  'n da amostra':['sample n','n de la muestra','n del campione'],
  'Enviar para o BIVA2':['Send to BIVA2','Enviar a BIVA2','Invia a BIVA2'],
  'Enviar todas':['Send all','Enviar todas','Invia tutte'],
  'Abrir o BIVA2 →':['Open BIVA2 →','Abrir BIVA2 →','Apri BIVA2 →'],
  'Geometria em unidades do gráfico':['Geometry in chart units','Geometría en unidades del gráfico','Geometria nelle unità del grafico'],
  'Complete os passos ao lado.':['Complete the steps on the left.','Complete los pasos de la izquierda.','Completa i passaggi a sinistra.'],
  'Calculadora direta':['Direct calculator','Calculadora directa','Calcolatore diretto'],
  'Já tem os semieixos em unidades do gráfico? Calcule':['Already have the semi-axes in chart units? Calculate','¿Ya tiene los semiejes en unidades del gráfico? Calcule','Hai già i semiassi nelle unità del grafico? Calcola'],
  'sem imagem nenhuma.':['without any image.','sin ninguna imagen.','senza alcuna immagine.'],
  'Semieixo a':['Semi-axis a','Semieje a','Semiasse a'],
  'Semieixo b':['Semi-axis b','Semieje b','Semiasse b'],
  'Ângulo °':['Angle °','Ángulo °','Angolo °'],
  'Exportar':['Export','Exportar','Esporta'],
  'Copiar tabela':['Copy table','Copiar tabla','Copia tabella'],
  'Baixar JSON':['Download JSON','Descargar JSON','Scarica JSON'],
  'Como o cálculo é feito':['How the calculation works','Cómo se realiza el cálculo','Come viene eseguito il calcolo'],
  'Uma elipse com semieixos':['An ellipse with semi-axes','Una elipse con semiejes','Un’ellisse con semiassi'],
  'e rotação':['and rotation','y rotación','e rotazione'],
  'corresponde à matriz de covariância':['corresponds to the covariance matrix','corresponde a la matriz de covarianza','corrisponde alla matrice di covarianza'],
  ', a menos de um fator de escala.':[', up to a scale factor.',', salvo un factor de escala.',', a meno di un fattore di scala.'],
  'Ao converter de pixels para unidades do gráfico, cada eixo recebe sua própria escala:':['When converting pixels to chart units, each axis gets its own scale:','Al convertir de píxeles a unidades del gráfico, cada eje recibe su propia escala:','Nella conversione dai pixel alle unità del grafico, ogni asse riceve la propria scala:'],
  'Daí':['Therefore','Por tanto','Quindi'],
  '. O fator de cobertura da elipse some na divisão — por isso as elipses de 50%, 75% e 95% do mesmo conjunto devolvem exatamente o mesmo':['. The ellipse coverage factor cancels out in the division, so the 50%, 75% and 95% ellipses from the same set return exactly the same','. El factor de cobertura de la elipse se anula en la división; por eso las elipses del 50%, 75% y 95% del mismo conjunto devuelven exactamente el mismo','. Il fattore di copertura dell’ellisse si annulla nella divisione: per questo le ellissi al 50%, 75% e 95% dello stesso insieme restituiscono esattamente lo stesso'],
  '. Teste isso no exemplo.':['. Try it in the example.','. Pruébelo en el ejemplo.','. Provalo nell’esempio.'],
  'O modo contorno resolve a cônica geral':['Contour mode solves the general conic','El modo contorno resuelve la cónica general','La modalità contorno risolve la conica generale'],
  'por mínimos quadrados sobre os pontos clicados.':['by least squares over the clicked points.','por mínimos cuadrados sobre los puntos marcados.','con i minimi quadrati sui punti selezionati.'],
  'Limites:':['Limitations:','Limitaciones:','Limiti:'],
  'vale para eixos lineares e ortogonais. Escala logarítmica ou figura em perspectiva quebram a suposição. E':['applies to linear, orthogonal axes. A logarithmic scale or perspective image violates the assumption. And','se aplica a ejes lineales y ortogonales. Una escala logarítmica o una imagen en perspectiva rompen el supuesto. Y','vale per assi lineari e ortogonali. Una scala logaritmica o un’immagine in prospettiva violano l’assunto. E'],
  'vem da elipse desenhada, então herda qualquer imprecisão dela.':['comes from the drawn ellipse, so it inherits any imprecision in it.','procede de la elipse dibujada, por lo que hereda cualquier imprecisión.','deriva dall’ellisse disegnata e ne eredita qualsiasi imprecisione.'],

  'Nada para desfazer.':['Nothing to undo.','Nada que deshacer.','Nulla da annullare.'],
  'Carregue a imagem primeiro.':['Load the image first.','Cargue primero la imagen.','Carica prima l’immagine.'],
  'Selecione uma elipse primeiro.':['Select an ellipse first.','Seleccione primero una elipse.','Seleziona prima un’ellisse.'],
  'Não deu para ler essa imagem. Tente PNG ou JPG.':['Could not read this image. Try PNG or JPG.','No se pudo leer esta imagen. Pruebe con PNG o JPG.','Impossibile leggere l’immagine. Prova PNG o JPG.'],
  'Escolha um arquivo de imagem (PNG, JPG…).':['Choose an image file (PNG, JPG…).','Elija un archivo de imagen (PNG, JPG…).','Scegli un file immagine (PNG, JPG…).'],
  'Nenhuma imagem na área de transferência.':['No image found on the clipboard.','No hay ninguna imagen en el portapapeles.','Nessuna immagine negli appunti.'],
  'O navegador bloqueou a leitura. Use Ctrl+V ou o seletor de arquivo.':['The browser blocked access. Use Ctrl+V or the file picker.','El navegador bloqueó la lectura. Use Ctrl+V o el selector de archivos.','Il browser ha bloccato la lettura. Usa Ctrl+V o il selettore di file.'],
  'Exemplo aberto e já calibrado. Contorne qualquer uma das três elipses — todas dão r = 0,680.':['Example opened and calibrated. Trace any of the three ellipses; all yield r = 0.680.','Ejemplo abierto y calibrado. Marque cualquiera de las tres elipses; todas dan r = 0,680.','Esempio aperto e calibrato. Traccia una qualsiasi delle tre ellissi: tutte danno r = 0,680.'],
  'Carregar a imagem do gráfico':['Load the chart image','Cargar la imagen del gráfico','Carica l’immagine del grafico'],
  'Marcar 2 pontos no eixo X':['Mark 2 points on the X axis','Marcar 2 puntos en el eje X','Segna 2 punti sull’asse X'],
  'Marcar 2 pontos no eixo Y':['Mark 2 points on the Y axis','Marcar 2 puntos en el eje Y','Segna 2 punti sull’asse Y'],
  'Digitar os 4 valores dos eixos':['Enter the 4 axis values','Introducir los 4 valores de los ejes','Inserisci i 4 valori degli assi'],
  'Marcar ao menos uma elipse':['Trace at least one ellipse','Marcar al menos una elipse','Traccia almeno un’ellisse'],
  'ir':['go','ir','vai'],
  'Pronto — confira os parâmetros à direita e envie para o BIVA2':['Ready — check the parameters on the right and send them to BIVA2','Listo: compruebe los parámetros de la derecha y envíelos a BIVA2','Pronto: controlla i parametri a destra e inviali a BIVA2'],
  'Neste exemplo o r verdadeiro é 0,680. Compare com o seu.':['In this example, the true r is 0.680. Compare it with yours.','En este ejemplo, el r verdadero es 0,680. Compárelo con el suyo.','In questo esempio, il vero r è 0,680. Confrontalo con il tuo.'],
  'Refine a elipse arrastando as alças; r, médias e DPs acompanham em tempo real.':['Refine the ellipse by dragging the handles; r, means and SDs update in real time.','Ajuste la elipse arrastrando los controles; r, medias y DE se actualizan en tiempo real.','Perfeziona l’ellisse trascinando le maniglie; r, medie e DS si aggiornano in tempo reale.'],
  'Arraste o arquivo para a área central, cole com Ctrl+V ou abra o exemplo.':['Drag the file to the central area, paste with Ctrl+V, or open the example.','Arrastre el archivo al área central, péguelo con Ctrl+V o abra el ejemplo.','Trascina il file nell’area centrale, incollalo con Ctrl+V oppure apri l’esempio.'],
  'Duas marcas do eixo horizontal, bem afastadas uma da outra. A lupa ajuda a acertar o traço.':['Choose two widely separated marks on the horizontal axis. The magnifier helps you place them accurately.','Elija dos marcas bien separadas del eje horizontal. La lupa ayuda a colocarlas con precisión.','Scegli due tacche ben distanti sull’asse orizzontale. La lente aiuta a posizionarle con precisione.'],
  'Duas marcas do eixo vertical, bem afastadas uma da outra.':['Choose two widely separated marks on the vertical axis.','Elija dos marcas bien separadas del eje vertical.','Scegli due tacche ben distanti sull’asse verticale.'],
  'Os números impressos naquelas marcas. Enter passa para o campo seguinte.':['Enter the numbers printed at those marks. Enter moves to the next field.','Introduzca los números impresos en esas marcas. Enter pasa al campo siguiente.','Inserisci i numeri stampati accanto a quelle tacche. Invio passa al campo successivo.'],
  'Contorne a elipse com 5 cliques ou mais e confirme com Enter.':['Trace the ellipse with 5 or more clicks and confirm with Enter.','Marque la elipse con 5 clics o más y confirme con Enter.','Traccia l’ellisse con almeno 5 clic e conferma con Invio.'],
  'Arraste uma imagem para cá, cole com Ctrl+V ou abra o exemplo':['Drag an image here, paste with Ctrl+V, or open the example','Arrastre una imagen aquí, péguela con Ctrl+V o abra el ejemplo','Trascina qui un’immagine, incollala con Ctrl+V oppure apri l’esempio'],
  'Nenhuma elipse ainda.':['No ellipses yet.','Aún no hay elipses.','Nessuna ellisse.'],
  'Amplitude':['Range','Amplitud','Intervallo'],
  'Elipses do mesmo grupo (50, 75 e 95%) devem dar o mesmo r: quanto menor a amplitude, mais confiável a marcação.':['Ellipses from the same group (50%, 75% and 95%) should yield the same r: the smaller the range, the more reliable the tracing.','Las elipses del mismo grupo (50%, 75% y 95%) deben dar el mismo r: cuanto menor sea la amplitud, más fiable será el trazado.','Le ellissi dello stesso gruppo (50%, 75% e 95%) devono dare lo stesso r: minore è l’intervallo, più affidabile è il tracciamento.'],
  'prévia em traçado':['tracing preview','vista previa del trazado','anteprima del tracciamento'],
  'Centro':['Center','Centro','Centro'],
  'Semieixo maior':['Major semi-axis','Semieje mayor','Semiasse maggiore'],
  'Semieixo menor':['Minor semi-axis','Semieje menor','Semiasse minore'],
  'Ângulo do eixo maior':['Major-axis angle','Ángulo del eje mayor','Angolo dell’asse maggiore'],
  'Razão dos eixos':['Axis ratio','Relación de ejes','Rapporto tra gli assi'],
  'carregue a imagem':['load the image','cargue la imagen','carica l’immagine'],
  'falta calibrar os eixos':['the axes need calibration','faltan calibrar los ejes','gli assi devono essere calibrati'],
  'marque uma elipse':['trace an ellipse','marque una elipse','traccia un’ellisse'],
  'selecione uma elipse':['select an ellipse','seleccione una elipse','seleziona un’ellisse'],
  'obrigatório para este tipo':['required for this type','obligatorio para este tipo','obbligatorio per questo tipo'],
  'não altera o DP, mas o BIVA2 precisa':['does not change the SD, but BIVA2 requires it','no cambia la DE, pero BIVA2 lo necesita','non modifica la DS, ma BIVA2 lo richiede'],
  'Média X (centro)':['X mean (center)','Media X (centro)','Media X (centro)'],
  'Média Y (centro)':['Y mean (center)','Media Y (centro)','Media Y (centro)'],
  'DP em X':['X SD','DE en X','DS in X'],
  'DP em Y':['Y SD','DE en Y','DS in Y'],
  'informe n ≥ 5':['enter n ≥ 5','introduzca n ≥ 5','inserisci n ≥ 5'],
  'fator k da elipse':['ellipse k factor','factor k de la elipse','fattore k dell’ellisse'],
  'Calibre os eixos para ver os parâmetros.':['Calibrate the axes to view the parameters.','Calibre los ejes para ver los parámetros.','Calibra gli assi per vedere i parametri.'],
  'Selecione ou marque uma elipse.':['Select or trace an ellipse.','Seleccione o marque una elipse.','Seleziona o traccia un’ellisse.'],
  'Calibre os eixos e marque uma elipse antes de enviar.':['Calibrate the axes and trace an ellipse before sending.','Calibre los ejes y marque una elipse antes de enviar.','Calibra gli assi e traccia un’ellisse prima dell’invio.'],
  'O navegador bloqueou o armazenamento local; copie a tabela.':['The browser blocked local storage; copy the table instead.','El navegador bloqueó el almacenamiento local; copie la tabla.','Il browser ha bloccato l’archiviazione locale; copia la tabella.'],
  'Recebido do Estimador':['Received from Estimator','Recibido del Estimador','Ricevuto dallo Stimatore'],
  ', prontas para virar referência ou elipse de confiança.':['; ready to become a reference or confidence ellipse.','; listas para convertirse en referencia o elipse de confianza.','; pronte per diventare un riferimento o un’ellisse di confidenza.'],
  'Carregue a imagem.':['Load the image.','Cargue la imagen.','Carica l’immagine.'],
  'Falta calibrar os eixos.':['The axes need calibration.','Faltan calibrar los ejes.','Gli assi devono essere calibrati.'],
  'Marque uma elipse.':['Trace an ellipse.','Marque una elipse.','Traccia un’ellisse.'],
  'Selecione uma elipse.':['Select an ellipse.','Seleccione una elipse.','Seleziona un’ellisse.'],
  'Ainda não há r para copiar.':['There is no r to copy yet.','Aún no hay un r que copiar.','Non c’è ancora un r da copiare.'],
  'O navegador bloqueou a cópia.':['The browser blocked copying.','El navegador bloqueó la copia.','Il browser ha bloccato la copia.'],
  'Nada para copiar ainda.':['Nothing to copy yet.','Aún no hay nada que copiar.','Non c’è ancora nulla da copiare.'],
  'Tabela copiada — cole no Excel':['Table copied — paste it into Excel','Tabla copiada: péguela en Excel','Tabella copiata: incollala in Excel'],
  'Sessão anterior restaurada.':['Previous session restored.','Sesión anterior restaurada.','Sessione precedente ripristinata.'],
  'elipses de tolerância 50% · 75% · 95%':['50% · 75% · 95% tolerance ellipses','elipses de tolerancia 50% · 75% · 95%','ellissi di tolleranza 50% · 75% · 95%']
};

let lang='pt-BR';
const textState=new WeakMap();
const attrState=new WeakMap();
let observer=null;

function exact(source){
  if(lang==='pt-BR') return source;
  const values=TERMS[source];
  return values ? values[IDX[lang]] : source;
}

function dynamic(source){
  let m;
  if((m=source.match(/^escala (.+) un\/px$/))) return lang==='en'?'scale '+m[1]+' units/px':lang==='es'?'escala '+m[1]+' unid./px':'scala '+m[1]+' unità/px';
  if((m=source.match(/^Clique em duas marcas do eixo ([XY]) \((\d+)\/2\)$/))) return lang==='en'?`Click two marks on the ${m[1]} axis (${m[2]}/2)`:lang==='es'?`Haga clic en dos marcas del eje ${m[1]} (${m[2]}/2)`:`Fai clic su due tacche dell’asse ${m[1]} (${m[2]}/2)`;
  if((m=source.match(/^Contorno: (\d+) ponto\(s\) — mínimo 5( · Enter confirma)?$/))) return lang==='en'?`Contour: ${m[1]} point(s) — minimum 5${m[2]?' · Enter confirms':''}`:lang==='es'?`Contorno: ${m[1]} punto(s) — mínimo 5${m[2]?' · Enter confirma':''}`:`Contorno: ${m[1]} punto/i — minimo 5${m[2]?' · Invio conferma':''}`;
  if((m=source.match(/^Eixo maior e depois eixo menor: (\d+)\/4( · Enter confirma)?$/))) return lang==='en'?`Major axis, then minor axis: ${m[1]}/4${m[2]?' · Enter confirms':''}`:lang==='es'?`Eje mayor y después eje menor: ${m[1]}/4${m[2]?' · Enter confirma':''}`:`Asse maggiore, poi asse minore: ${m[1]}/4${m[2]?' · Invio conferma':''}`;
  if((m=source.match(/^Agora digite os dois valores do eixo ([XY]) \(Enter avança\)$/))) return lang==='en'?`Now enter both ${m[1]}-axis values (Enter moves forward)`:lang==='es'?`Ahora introduzca los dos valores del eje ${m[1]} (Enter avanza)`:`Ora inserisci i due valori dell’asse ${m[1]} (Invio prosegue)`;
  if((m=source.match(/^Imagem carregada \((\d+)×(\d+) px\)\. Clique em duas marcas do eixo X\.$/))) return lang==='en'?`Image loaded (${m[1]}×${m[2]} px). Click two marks on the X axis.`:lang==='es'?`Imagen cargada (${m[1]}×${m[2]} px). Haga clic en dos marcas del eje X.`:`Immagine caricata (${m[1]}×${m[2]} px). Fai clic su due tacche dell’asse X.`;
  if((m=source.match(/^prévia  r = (.+)$/))) return (lang==='en'?'preview':lang==='es'?'vista previa':'anteprima')+'  r = '+m[1];
  if((m=source.match(/^r médio das (\d+) elipses$/))) return lang==='en'?`mean r of ${m[1]} ellipses`:lang==='es'?`r medio de ${m[1]} elipses`:`r medio di ${m[1]} ellissi`;
  if((m=source.match(/^Enviar todas \((\d+)\)$/))) return (lang==='en'?'Send all':lang==='es'?'Enviar todas':'Invia tutte')+` (${m[1]})`;
  if((m=source.match(/^([\s\S]+) criada — r = (.+)\. Informe tipo, cobertura e n à direita\.$/))) return lang==='en'?`${m[1]} created — r = ${m[2]}. Enter type, coverage and n on the right.`:lang==='es'?`${m[1]} creada — r = ${m[2]}. Introduzca el tipo, la cobertura y n a la derecha.`:`${m[1]} creata — r = ${m[2]}. Inserisci tipo, copertura e n a destra.`;
  if((m=source.match(/^([\s\S]+) criada — falta calibrar os eixos$/))) return lang==='en'?`${m[1]} created — the axes need calibration`:lang==='es'?`${m[1]} creada — faltan calibrar los ejes`:`${m[1]} creata — gli assi devono essere calibrati`;
  if((m=source.match(/^(\d+) elipse\(s\) enviada\(s\) para o BIVA2$/))) return lang==='en'?`${m[1]} ellipse(s) sent to BIVA2`:lang==='es'?`${m[1]} elipse(s) enviada(s) a BIVA2`:`${m[1]} ellisse inviata/e a BIVA2`;
  if((m=source.match(/^r = (.+) copiado$/))) return lang==='en'?`r = ${m[1]} copied`:lang==='es'?`r = ${m[1]} copiado`:`r = ${m[1]} copiato`;
  if((m=source.match(/^centro (.+) · (tol\. pop\.|tol\. Piccoli|conf\. média|conf\. χ²) (\d+)%$/))){
    const type={
      en:{'tol. pop.':'pop. tol.','tol. Piccoli':'Piccoli tol.','conf. média':'mean conf.','conf. χ²':'χ² conf.'},
      es:{'tol. pop.':'tol. pob.','tol. Piccoli':'tol. Piccoli','conf. média':'conf. media','conf. χ²':'conf. χ²'},
      it:{'tol. pop.':'toll. pop.','tol. Piccoli':'toll. Piccoli','conf. média':'conf. media','conf. χ²':'conf. χ²'}
    }[lang];
    return (lang==='en'?'center ':lang==='es'?'centro ':'centro ')+m[1]+' · '+type[m[2]]+' '+m[3]+'%';
  }
  if((m=source.match(/^(desprezível|fraca|moderada|forte|muito forte|quase perfeita) e (negativa|positiva) · r² = (.+)$/))){
    const strength={en:{'desprezível':'negligible','fraca':'weak','moderada':'moderate','forte':'strong','muito forte':'very strong','quase perfeita':'nearly perfect','negativa':'negative','positiva':'positive'},es:{'desprezível':'despreciable','fraca':'débil','moderada':'moderada','forte':'fuerte','muito forte':'muy fuerte','quase perfeita':'casi perfecta','negativa':'negativa','positiva':'positiva'},it:{'desprezível':'trascurabile','fraca':'debole','moderada':'moderata','forte':'forte','muito forte':'molto forte','quase perfeita':'quasi perfetta','negativa':'negativa','positiva':'positiva'}}[lang];
    return strength[m[1]]+' '+(lang==='en'?'and':lang==='es'?'y':'e')+' '+strength[m[2]]+' · r² = '+m[3];
  }
  if((m=source.match(/^(\d+) elipse\(s\) na caixa de entrada do BIVA2(?: — (\d+) sem DP ou n: no BIVA2 só o r poderá ser usado)?\. No workspace elas aparecem em $/))){
    const partial=m[2]?(lang==='en'?` — ${m[2]} without SD or n: only r can be used in BIVA2`:lang==='es'?` — ${m[2]} sin DE o n: en BIVA2 solo se podrá usar r`:` — ${m[2]} senza DS o n: in BIVA2 potrà essere usato solo r`):'';
    return (lang==='en'?`${m[1]} ellipse(s) in the BIVA2 inbox${partial}. In the workspace they appear under `:lang==='es'?`${m[1]} elipse(s) en la bandeja de entrada de BIVA2${partial}. En el espacio de trabajo aparecen en `:`${m[1]} ellisse nella casella di ingresso di BIVA2${partial}. Nell’area di lavoro compaiono in `);
  }
  return null;
}

function translate(source){
  if(lang==='pt-BR') return source;
  const value=exact(source);
  return value!==source ? value : (dynamic(source)||source);
}

function renderText(node){
  if(!node||!node.parentElement||/^(SCRIPT|STYLE)$/.test(node.parentElement.tagName)) return;
  const current=node.nodeValue;
  let state=textState.get(node);
  if(!state||current!==state.last) state={source:current,last:current};
  const match=state.source.match(/^(\s*)([\s\S]*?)(\s*)$/);
  const next=match[1]+translate(match[2])+match[3];
  state.last=next; textState.set(node,state);
  if(current!==next) node.nodeValue=next;
}

function renderAttrs(el){
  if(!el||el.nodeType!==1) return;
  let state=attrState.get(el); if(!state){state={};attrState.set(el,state);}
  ['title','aria-label','placeholder'].forEach(attr=>{
    if(!el.hasAttribute(attr)) return;
    const current=el.getAttribute(attr);
    if(!state[attr]||current!==state[attr].last) state[attr]={source:current,last:current};
    const next=translate(state[attr].source); state[attr].last=next;
    if(current!==next) el.setAttribute(attr,next);
  });
}

function walk(root){
  if(!root) return;
  if(root.nodeType===3){ renderText(root); return; }
  if(root.nodeType!==1&&root.nodeType!==9&&root.nodeType!==11) return;
  if(root.nodeType===1) renderAttrs(root);
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);
  let node; while((node=walker.nextNode())) node.nodeType===3?renderText(node):renderAttrs(node);
}

function setLanguage(next,announce){
  lang=LANGS.includes(next)?next:'pt-BR';
  document.documentElement.lang=lang;
  const select=document.getElementById('langSelect'); if(select) select.value=lang;
  document.title=translate('BIVA2 | Estimador de correlação de Pearson');
  walk(document.body);
  try{localStorage.setItem(LANG_KEY,lang);}catch(e){}
  window.estimatorLanguage=lang;
  if(announce) window.dispatchEvent(new CustomEvent('estimator-language-change',{detail:{lang}}));
}

window.estimatorTranslate=function(source){return translate(String(source));};
window.setEstimatorLanguage=setLanguage;
try{lang=localStorage.getItem(LANG_KEY)||'pt-BR';}catch(e){lang='pt-BR';}
if(!LANGS.includes(lang)) lang='pt-BR';
setLanguage(lang,false);

const select=document.getElementById('langSelect');
if(select) select.addEventListener('change',()=>setLanguage(select.value,true));
observer=new MutationObserver(records=>{
  records.forEach(record=>{
    if(record.type==='characterData') renderText(record.target);
    record.addedNodes&&record.addedNodes.forEach(walk);
  });
});
observer.observe(document.body,{subtree:true,childList:true,characterData:true});
window.addEventListener('storage',event=>{if(event.key===LANG_KEY&&event.newValue&&event.newValue!==lang)setLanguage(event.newValue,true);});
})();

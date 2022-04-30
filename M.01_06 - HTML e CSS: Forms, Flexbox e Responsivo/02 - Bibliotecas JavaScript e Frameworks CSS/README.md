www.momentjs.com  ==> instalar pelo npm install

Importar a biblioteca para o js: 

	let moment = require("moment");	
	let brasilTetra = moment('17071994', 'DDMMYYYY');
	let fromNow = brasilTetra.fromNow();
	console.log(`Ouvimo o "é tetra" há ${fromNow}`);
	
Outras bibliotecas recomendadas: 
* www.cheet.js
* highcharts (utilizado para criar gráficos interativos); 

Colocandoo Bootstrap:
* Baixar ===> https://getbootstrap.com/
* O Bootstrap requer a biblioteca jQuery ==> salvar link ==> https://jquery.com/download/
* Colocar o jQuery antes do Bootstrap

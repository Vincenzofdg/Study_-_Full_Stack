Parte I:

Eventos:
	- Permite nossa página ser dinâmica;
	- Pode ser disparado por uma ação visível da pessoa usuária ou pelo próprio navegador
--------------------------------------------------------------------------------------------------

DOM on-event handlers (Manipulação de eventos disparados pelo DOM);
	- window.onload = 'nome da função sem ()' ==> Esse codigo irá carregar a função assim que a página estiver carregada.

Inline event handlers (Manipulação de eventos declarados na linha do HTML) <==== RECOMENDADO
	- onclick
	

---------------------------------------------------------------------------------------------------

Parte II:

addEventListener recebe dois parâmetros:

	1° click, change, mouseover, etc ...
	2° Função criada

Exemplo 01:	
	|	<p id="clicar">Paragrafo para ser clicado</p>
	|
	|	no arquivo .js
	|	
	|	clickP = document.getElementById("clicar");
	|	clickP.addEventListener("click", recebeClick);
	|
	|	function recebeClick (eventoDeOrigem) {
	|	console.log(eventoDeOrigem.target);
	|	console.log(eventoDeOrigem.target);
	|	}
	
	O eventoDeOrigem é o objeto do evento e tem duas principais propriedades
	Target: O elemento que originou o evento;
	Type: O tipo de evento que originou o click - Mouse, Keyboard, etc ...
	obs: podemos dar qualquer nome... não é padrão eventoDeOrigem.

Exemplo 02:
	|	<div>
	|	|	<button id="mouse-over-leave">Botão passar em cima e remover</button>
	|	</div>
	|
	|	let mouseOverLeaveButton = document.getElementById("mouse-over-leave");
	|	mouseOverLeaveButton.addEventListener("mouseover", mouseEmCima);
	|	mouseOverLeaveButton.addEventListener("mouseleave", mouseSaiuDoElemento);
	|
	|	function mouseEmCima () {
	|	console.log("Mouse passou por cima");
	|	}
	|
	|	function mouseSaiuDoElemento () {
	|	console.log("Mouse saiu do elemento");
	|	}
	
---------------------------------------------------------------------------------------------------
Os mais comuns são: click , change , mouseover e keyup.

Para mais eventos ==> https://www.w3schools.com/jsref/dom_obj_event.asp

Sobre evento ==> https://developer.mozilla.org/pt-BR/docs/Web/API/Event


	
	
	

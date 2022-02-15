Parte I:--------------------------------------------------------------------------------------------

tag form ==> para criar formulario

<form action="" method=""></form>

	* action ==> Para onde esses dados, formulários serão enviados;
	* method ==> Tipo de metodo que iremos usar, ou é GET ou será POST;
		* GET: dados são enviados atraves da URL;
		* POST: dados enviados mais escondidos para outro ambiente sem ser a URL.

Exemplo:

	<form action="" method="GET">
	|	<input type="text" name="texto">
	|	<button type="submit">Enviar</button>
	</form>

Parte II:--------------------------------------------------------------------------------------------

Propriedades do INPUT:

	* type: tipo de entrada de dados que o usuário irá fazer;
		* checkbox: Caixas onde é possivel clicar e selecionar varias opções.
			exemplo:
			<input type="checkbox" id="esporte-1" value="Bas" name="esporte" checked>Basquete
			<input type="checkbox" id="esporte-2" value="vol" name="esporte">Vôlei
		
		* radio: Apenas um pode ser selecionado:
			exemplo:
			<input type="radio" id="hub1" name="hub" value="sp">São Paulo
			<input type="radio" id="hub2" name="hub" value="bh">Belo Horizonte
			<input type="radio" id="hub3" name="hub" value="fl">Florianópolis
			<input type="radio" id="hub4" name="hub" value="mc">Macedônia			
		dica: colocar uma label para que assim qualquer lugar que for clicado irá selecionar a opção:
			<label for="hub1">input type="radio" id="hub1" name="hub" value="sp">São Paulo</label>
		
		* password: Campo de senha:
		<input type="password" name="senha">
		
		* file: Enviar um arquivo. Quando utilizar este tipo de type deve-se colocar tambem enctype="multipart/form-data".
		Isso fará com que seja possivel enviar imagens (media) alem de texto.
		obs: Colocar na tag forms a propriedade <form action="" method="GET" enctype="multipart/form-data">
		<input type="file" name="">
			
	* placeholder: informação, direcionamento (exemplo: digite alguma coisa);
	* required: deixar um campo obrigatório.
	* value: ja deixa o campo preenchido previamente.
	
Tag label: Explicar o campo que estamos usando.

	<label for="ID-DO-INPUT">Digite seu nome</label>	
	* for: criar um vinculo entre o rotulo e o campo em si

Tag textarea: Campo de colocar informação.

	<textarea name="" id="" cols="30" rows="10"></textarea>

Tag select: Clicando nela abre mais opções de selecionar;

	<select name="estado" id="dropdown-estado">
		<option value="sp">São Paulo</option>
		<option value="bn">Belo Horizonte</option>
		<option value="fl">Florianópolis</option>
	</select>

Tag button: Para submeter as informações, ou seja enviar.
	<button type="submit">Enviar</button>
	

 De modo geral, estes são os types que podem ser usados de acordo com a aplicação do campo input:

    	* button: define um botão;
    	* checkbox: permite que o usuário selecione ZERO ou MAIS opções de um número limitado de escolhas;
    	* color: campos de entrada que devem conter uma cor para selecionar;
    	* date: campos de entrada que devem conter uma data;
    	* datetime-local: campo de entrada de data e hora, sem fuso horário;
    	* email: campos de entrada que devem conter um endereço de e-mail;
    	* file: campo de seleção de arquivo e um botão "Procurar" para uploads de arquivos;
    	* month: permite ao usuário selecionar um mês e ano;
    	* number: define um campo de entrada numérico;
    	* password: os caracteres do campo de senha são mascarados (mostrados como asteriscos ou círculos);
    	* radio: permite que um usuário selecione APENAS UMA de um número limitado de opções;
    	* range: define um controle para inserir um número (como um controle deslizante). Intervalo padrão é de 0 a 100;
    	* reset: redefinirá todos os valores do formulário para seus valores padrão;
    	* search: usado para campos de pesquisa;
    	* submit: envia dados de formulário a um manipulador de formulários(especificado na action do form );
    	* tel: campos de entrada que devem conter um número de telefone;
    	* text: campo de entrada de texto de linha única;
    	* time: permite que o usuário selecione um horário (sem fuso horário);
    	* url: campos de entrada que devem conter um endereço URL;
    	* week: permite ao usuário selecionar uma semana e um ano.

O valor default de um type , sempre será text . Portanto, é preciso especificar de acordo com a sua necessidade.
Como complemento, temos os atributos que são propriedades inseridas para seus inputs HTML. Com elas, você poderá adicionar funcionalidades ao seu formulário. Temos os seguintes atributos abaixo:

    	* value: especifica um valor inicial para um campo de entrada;
    	* readonly: especifica que um campo de entrada é somente leitura;
    	* disabled: especifica que um campo de entrada deve ser desativado;
    	* size: especifica a largura visível, em caracteres, de um campo de entrada;
    	* maxlength: especifica o número máximo de caracteres permitidos em um campo de entrada;
    	* min e max: especificam os valores mínimo e máximo para um campo de entrada;
    	* multiple: especifica que o usuário tem permissão para inserir mais de um valor em um campo de entrada;
    	* pattern: especifica uma expressão regular em relação à qual o valor do campo de entrada é verificado;
    	* placeholder: especifica uma dica curta que descreve o valor esperado de um campo de entrada;
    	* required: especifica que um campo de entrada deve ser preenchido antes de enviar o formulário;
    	* step: especifica os intervalos de números válidos para um campo de entrada;
    	* autofocus: especifica que um campo de entrada deve obter foco automaticamente quando a página é carregada;
    	* height e width: especificam a altura e a largura de um elemento;
    	* autocomplete: especifica se um campo de entrada deve ter o preenchimento automático ativado ou desativado.

Parte III:--------------------------------------------------------------------------------------------

const button = document.querySelector('#buttonSubmit');
const nameUser = documento.querySelector('#nameUser');
let inputNameUser = document.querySelector('#inputNameUser')

funcition getUserValue(event) {
	event.preventDefault();
	console.log(inputNameUser.value);
	nameUser.innerHTML = inputNameUser.value;
}
button.addEventListener('click', getUserValue);

Aula ao Vivo:--------------------------------------------------------------------------------------------

no arquivo .html analisar:

form action="" method="get">
	<fieldset>
	|	<legend>Dados pessoais</legend>
	|	<label for="full-name">Nome</label>
                <input type="text" id='full-name' name='full-name' placeholder="Digite seu nome.." />	|	
	</fieldset>

no arquivo .css analisar:

input[type=text], input[type=email], select, textarea {
}


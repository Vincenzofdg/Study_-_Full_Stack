	Part.01: var, let e const


Qual a diferença entre essas declarações?

São utilizadas para o mesmo propósito. Mas há diferenças:

	var ===> ela vaza o escopro, PERIGO!
		
		exemplo:
		for (var idade 78; idade <= 100; idade += 1) {
			console.log(idade);
		}
		console.log(idade);
	
	let ===> Não vaza o escopro.
	
		exemplo:
		for (let idade 78; idade <= 100; idade += 1) {
			console.log(idade);
		}
		console.log(idade);
		
		Dará erro pois a variável nao sai do laço for. 
		
	const ===> variável que nao é possivel reatribuir um valor a ela, constante.

-----------------------------------------------------------------------------------------

	Part.02: Template Literals

É mais uma feature dp ES6, é o `${}`.

	* Sem Template:

		const myName = "Isabella"
		console.log('Hello' + ' ' + myName + '!');

	* Com Template:

		const myName = "Isabella"
		console.log(`Welcome ${myName}!`);

	* Sem Template:

		console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

	* Com Template:

		console.log(`Primeira linha;
		Segunda linha;
		Terceira linha;`
		)

-----------------------------------------------------------------------------------------

	Part.03: Arrow Function

Quando utilizamos "=>" estamos usando uma arrow function.

Exemplo 01:

	* Forma tradicional de declarar uma função:

		const soma = function soma(num1, num2) {
			return num1 + num2;
		}
		console.log(soma(2, 2));

	* Com Arrow Function:

		const soma = (num1, num2) => {
			return num1 + num2
		}
		console.log(soma(2, 2));
		
		outra forma de escrever:
		
		const soma = (num1, num2) => num1 + num2;
		console.log(soma(2, 2);

Exemplo 02:

	* Forma tradicional de declarar uma função:

		function contaPalavras(frase) {
			return frase.split(' ').length;
		}
		console.log(contaPalavras('Fala tribo, beleza?'));

	* Com Arrow Function: Não precisa colocar parenteses em frase poois so existe um parâmetro.

		const contaPalavras = frase => frase.split(' ').length;
		console.log(contaPalavras('Fala tribo, beleza?'));

Exemplo 03:

	* Forma tradicional de declarar uma função:

		function objetoPessoa(nome, idade) {
			return {
				nome: nome,
				idade: idade
			}
		}
		console.log(objetoPessoa('Joaquim', 25));

	* Com Arrow Function: Se so deixar as chaves o js entende que é o corpo da função, mas na verdade ele é o objeto, portanto coloca-se entre parênteses.

		const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});
		console.log(objetoPessoa('Joaquim', 25));

-----------------------------------------------------------------------------------------

	Part.04: Ternary Operator

sintaxe ==> "expressão verdadeira ou falsa" ? "retorno se verdadeira" : "retorno se falsa";

exemplo 01:
	
	const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
	console.log(trueExpression) // isso é verdade

exemplo 02:

	const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
	console.log(falseExpression) // isso é mentira


É bom saber que o operador ternário não substitui as expressões condicionais tradicionais! Em qualquer situação onde exista mais de uma condição a ser avaliada, gerando três ou mais resultados possíveis, o mais simples será utilizar as opções já aprendidas anteriormente: 

	* Situação em que é mais simples usar o operador ternário:

		const checkIfElse = (age) => {
			if (age >= 18) {
		  		return `Você tem idade para dirigir!`;
		  	} else {
		    		return `Você ainda não tem idade para dirigir...`;
		  	}
		};

		const checkTernary = (age) => (
			age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
		);


	* Situação em que usar o operador ternário não faz muito sentido:
	
	const checkIfElse = (fruit) => {
		if (fruit === `maçã`) {
	    		return `Essa fruta é vermelha`;
	  	} else if (fruit === `banana`) {
	    		return `Esta fruta é amarela`;
	  	} else {
	    		return `Não sei a cor`;
	  	}
	};


	const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

	- Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática, pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código no futuro!



























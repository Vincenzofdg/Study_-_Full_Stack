01. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

	- Adição (a + b)
	- Subtração (a - b)
	- Multiplicação (a * b)
	- Divisão (a / b)
	- Módulo (a % b)

02. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

03. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

04. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

05. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

06. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

07. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

	- Porcentagem >= 90 -> A
	- Porcentagem >= 80 -> B
	- Porcentagem >= 70 -> C
	- Porcentagem >= 60 -> D
	- Porcentagem >= 50 -> E
	- Porcentagem < 50 -> F
	- O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

08. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

09. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

	- Atente que, sobre o custo do produto, incide um imposto de 20%.
	- Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
	- O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
		- valorCustoTotal = valorCusto + impostoSobreOCusto
		- lucro = valorVenda - valorCustoTotal (lucro de um produto)

11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

	- A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
	
		- INSS (Instituto Nacional do Seguro Social):
			- Salário bruto até R$ 1.556,94: alíquota de 8%
			- Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
			- Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
			- Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

		- IR (Imposto de Renda)
			- Até R$ 1.903,98: isento de imposto de renda
			- De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
			- De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
			- De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
			- Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

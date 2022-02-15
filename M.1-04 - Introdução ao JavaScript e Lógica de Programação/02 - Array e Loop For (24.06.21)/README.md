Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

	let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    01 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

    02 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

    03 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

		A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

    04 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

    05 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;

    06 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

    07 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

    08 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

    09 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

Bônus

Para os próximos dois exercícios tente entender o que está acontencedo no código abaixo: 

for (let index = 1; index < array.length; index += 1) {

  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
  
    if (array[index] < array[secondIndex]) {
    
      let position = array[index];
      
      array[index] = array[secondIndex];
      
      array[secondIndex] = position;
      
    01 - Ordene o array numbers em ordem crescente e imprima seus valores;

    02 - Ordene o array numbers em ordem decrescente e imprima seus valores; 

    03 - Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
    
    
	[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

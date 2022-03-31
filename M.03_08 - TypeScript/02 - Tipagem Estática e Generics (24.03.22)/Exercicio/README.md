## Exercício 01
Crie uma classe Car cuja o objeto representará um carro.

### Propriedades
- Deve conter uma propriedade do tipo string chamada brand que representa a marca;
- Deve conter uma propriedade do tipo enum chamada color que representa a cor;
  - A cor pode ser: preta, branca, vermelha ou prata.
- Deve conter uma propriedade do tipo number chamada doors que representa a quantidade de portas.

### Comportamentos
- Deve possuir um método chamado honk que aciona a buzina do carro;
- Deve possuir um método chamado openTheDoor que recebe como parâmetro uma porta do tipo enum e abre;
- Deve possuir um método chamado closeTheDoor que recebe como parâmetro uma porta do tipo enum e fecha;
- Deve possuir um método chamado turnOn que liga o carro;
- Deve possuir um método chamado turnOff que desliga o carro;
- Deve possuir um método chamado speedUp que acelera o carro;
- Deve possuir um método chamado speedDown que reduz a velocidade do carro;
- Deve possuir um método chamado stop que para o carro;
- Deve possuir um método chamado turn que recebe uma direção do tipo enum e vira o carro.

## Exercício 02
Vamos agora utilizar a classe Car que criamos no exercício anterior. Uma pessoa motorista de aplicativo ira fazer uma viagem para pegar sua nova pessoa passageira. Ele então entra em seu volkswagen gol prata de 4 portas, liga seu carro e começa o trajeto:

- Siga em frente;
- Em 600 metros vire a esquerda;
- Vire a esquerda;
- Em 200 metros na rotatória pegue a segunda saída a direita;
- Mantenha em frente pelos próximos 1,2 quilômetros;
- Em 300 metros vire a direita;
- Vire a direita;
- Em 400 metros você chegará ao seu destino;
- Você chegou ao seu destino.

Pronto a pessoa motorista para a pessoa passageira entra pela porta de trás do lado do carona, e a viagem continua.

- Siga em frente;
- Em 300 metros vire a direita;
- Vire a direita;
- Mantenha em frente pelos próximos 2 quilômetros;
- Em 200 metros vire a esquerda;
- Vire a esquerda;
- Em 400 metros vire a direita;
- Vire a direita;
- Em 100 metros você chegará ao destino;
- Você chegou ao destino.

A pessoa passageira desce do veículo e a pessoa motorista segue para a próxima corrida. Agora você deve desenvolver um script capaz de automatizar todo o cenário descrito.

## Exercício 03
Crie uma interface que represente uma pizza, ela deve conter:

- Uma propriedade do tipo string chamada flavor que representa o sabor;
- Uma propriedade chamada slices cujo tipo é a união entre os possíveis números de fatias da pizza;
  - O número de fatias pode ser 4, 6 ou 8;
  - Utilize um type alias para armazenar o tipo dessa propriedade

### Crie
- Crie uma pizza sabor Calabresa de 8 fatias;
- Crie uma pizza sabor Marguerita de 6 fatias;
- Crie uma pizza sabor Nutela de 4 fatias;

## Exercício 04
Vamos agora extender nossa interface Pizza com novos tipos de pizza. São eles:

- Pizza Comum - seus sabores são “Calabresa”, “Frango” e “Pepperoni”, podem ter 4, 6 ou 8 pedaços;
- Pizza Vegetariana - seus sabores são “Marguerita”, “Palmito” e “Cogumelo”, podem ter 4, 6 ou 8 pedaços;
- Pizza Doce - seus sabores são “Nutela”, “Goiabada com Queijo” e “Marshmallow”, podem ter somente 4 pedaços.
  
Você deve usar type alias e type unions para criar os possíveis sabores de cada tipo de pizzza.

### Crie
- 3 pizzas do tipo comum;
- 2 pizzas do tipo vegetariana;
- 1 pizza do tipo doce.

## Exercicício 05
Em JavaScript, temos a High Order Function filter. Ela funciona da seguinte forma:

- Recebe como primeiro parâmetro um array que pode ser de qualquer tipo;
- Recebe como segundo parâmetro uma função de callback;
- Retorna um novo array removendo os itens que não atendem a condição da função de callback;
- A função de callback recebe como primeiro parâmetro um item do tipo do array;
- A função de callback pode receber como segundo parâmetro um index do tipo inteiro;
- A função de callback pode receber como terceiro parâmetro o próprio array;
- A função de callback devolve um boleano.

Usando generics e os demais conceitos aprendidos em TypeScript recrie a função filter, nomeie-a como myFilter.
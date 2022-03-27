type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });

// Exercícios:
// 01. Crie um type para um objeto que represente um pássaro.
type Bird = {
  wings: 2;
  beaks: 1;
  biped: true;
}

// 02. Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois.
type Data01 = {
  a: number;
  b: number;
}

function sum(param: Data): number {
  return param.a + param.b;
}

// ou

type Data02 = (x: number, y: number) => number;

// 03. Crie um type para um objeto que represente um endereço.
type Adress = {
  street: string,
  number: number,
  city: string,
  cep: number
}
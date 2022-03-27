// Type Aliases

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

function sum(param: Data01): number {
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

// Type Union
// Forma de declarar que um objeto é um tipo formado a partir de dois ou mais outros tipos
function retornarCPF(cpf: number | string){
  console.log("Seu CPF é: " + cpf);
}

// Exercícios
// 01. Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
type MateriaState = "liquid" | "solid" | "gaseous";

// 02. Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
type Identificador = string | number;

// 03. Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
type OS = "linux" | "mac" | "windows";

// 04. Crie um type union que represente as vogais do alfabeto.
type Vowels = "a" | "e" | "i" | "o" | "u";
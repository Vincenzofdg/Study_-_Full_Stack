// 01. Crie uma função que recebe três parâmetros retorna uma Promise.
//   - Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números";
//   - Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c );
//   - Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo";
//   - Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

const exercicio01 = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if(typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") console.log("Informe apenas números");
    else ((num1 + num2) * num3) > 50 ? resolve(((num1 + num2) * num3) > 50) : reject("Valor muito baixo");
  }) 
};

exercicio01(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

exercicio01(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error.message))

// 02. Escreva um código para consumir a função construída no exercício anterior.
//   - Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe;
//   - Chame a função do exercício anterior, passando os três números aleatórios como parâmetros;
//   - Utilize then e catch para manipular a Promise retornada pela função:
//     - Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição;
//     - Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

const randomNumbers = () => Math.floor(Math.random() * 100 + 1);

const exercicio02 = () => {
  const numbers = Array.from({ length: 3 }).map(randomNumbers);
  exercicio01(...numbers)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error.message));
};

// 03. Reescreva o código do exercício anterior para que utilize async/await.

const exercicio03 = async () => {
  const numbers = Array.from({ length: 3 }).map(randomNumbers);
  
  try {
    const myResult = await exercicio01(...numbers);
    console.log(myResult);
  } catch (err) {
    console.log(err.message)
  }
};

// 04. Utilizando o arquivo simpsons.json: 
//   - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome.
//     Por exemplo: 1 - Homer Simpson.

const { readFile } = require('fs').promises;

readFile('./simpsons.json', 'utf-8')
  .then((conteudo) => JSON.parse(conteudo))   // Convertendo JSON para um array
  .then((str) => str.map(({ id, name }) => `${id} - ${name}`))
  .then((array) => array.forEach((nome) => console.log(nome)))

//   - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

const { readFile } = require('fs').promises;

const acharPeloID = async (gID) => {
  const json = await readFile('./simpsons.json', 'utf-8');
  const array = await JSON.parse(json);
  const findMe = array.find(({ id }) => id == gID);

  findMe ? console.log(findMe.name) : console.log("ID não encontrado");
}

acharPeloID(4000);
acharPeloID(3);

//   - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const { readFile, writeFile } = require('fs').promises;

const filtrar01 = async () => {
  const json = await readFile('./simpsons.json', 'utf-8');
  const array = await JSON.parse(json);
  const filter = array.filter(({ id }) => id !== '6' && id !== '10');
  await writeFile('./newFile.json', JSON.stringify(filter));
}

filtrar01()

//   - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

const { readFile, writeFile } = require('fs').promises;

const filtrar02 = async () => {
  const json = await readFile('./simpsons.json', 'utf-8');
  const array = await JSON.parse(json);
  const filter = array.filter(({ id }) => ['1', '2', '3', '4'].includes(id));
  await writeFile('./simpsonFamily.json', JSON.stringify(filter));
}

filtrar02()

//   - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const { readFile, writeFile } = require('fs').promises;

const filtrar03 = async () => {
  const json = await readFile('./simpsonFamily.json', 'utf-8');
  const array = await JSON.parse(json);
  array.push({ id: `${array.length + 1}`, name: 'Nelson Muntz' })

  await writeFile('./simpsonFamily.json', JSON.stringify(array));
}

filtrar03()

//   - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

const { readFile, writeFile } = require('fs').promises;

const filtrar04 = async () => {
  const json = await readFile('./simpsonFamily.json', 'utf-8');
  const array = await JSON.parse(json);
  const filter = array.filter(({ name }) => name === 'Nelson Muntz');
  filter[0].name = 'Maggie Simpson'
  
  await writeFile('./simpsonFamily.json', JSON.stringify(array));
}

filtrar04()

// 05. Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
//   - Utilize o Promise.all para manipular vários arquivos ao mesmo tempo;
//   - Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt. Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt.
//   - Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt.

const { writeFile, readFile } = require('fs').promises;

const arrayToFile = async () => {
  // Criando os Arrays:
  const arrayStr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const arrayFiles = Array.from({ length: arrayStr.length }, (_elem, i) => `file${++i}.txt`);

  // Funções:
  const fileName = arrayStr.map((string, index) => writeFile(`./file${++index}.txt`, string));
  const fileRead = () => arrayFiles.map((fileName) => readFile(fileName, 'utf-8'));

  // Eventos
  await Promise.all(fileName);
  const conteudo = await Promise.all(fileRead());
  const conteudoNovo = conteudo.join(' ');
  await writeFile('./fileAll.txt', conteudoNovo);
}

arrayToFile();

// 06. Crie um script que mostre na tela o conteúdo de um arquivo escolhido pelo usuário:
//   - Pergunte à pessoa usuária qual arquivo ela deseja ler;
//   - Leia o arquivo indicado;
//   - Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script;
//   - Caso o arquivo exista, escreva seu conteúdo na tela.

const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
  // Realizamos o uso do readline conforme mostrado na documentação.
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    // No entanto, ao abrirmos a pergunta,
    // fazemos isso dentro de uma Promise.
    rl.question(message, (answer) => {
      rl.close();

      // Dessa forma, quando obtivermos a resposta,
      // podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa
      // se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}

async function start() {
  // Como nossa função `question` retorna uma Promise,
  // podemos utilzar `await` para obter a resposta.
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    // Tentamos realizar a leitura do arquivo
    const fileContent = await readFile(fileName, 'utf-8');
    // E exibir seu resultado na tela
    console.log(fileContent);
  } catch (err) {
    // Caso um erro aconteça, exibimos a mensagem de erro na tela.
    console.log('Arquivo inexistente');
  }
}

start();
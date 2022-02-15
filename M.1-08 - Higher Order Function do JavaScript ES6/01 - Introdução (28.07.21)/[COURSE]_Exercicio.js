// 01 - Crie uma função que retorne a string 'Acordando!!'
const string01 = () => 'Acordando!!';

// 02 - Crie outra função que retorne a string 'Bora tomar café!!'
const string02 = () => 'Bora tomar café!!';

// 03 - Crie mais uma função que retorne a string 'Partiu dormir!!'
const string03 = () => 'Partiu dormir!!';

// 04 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.
const doingThings = (string) => {
  console.log(string());
}

doingThings(string01);
doingThings(string02);
doingThings(string03);
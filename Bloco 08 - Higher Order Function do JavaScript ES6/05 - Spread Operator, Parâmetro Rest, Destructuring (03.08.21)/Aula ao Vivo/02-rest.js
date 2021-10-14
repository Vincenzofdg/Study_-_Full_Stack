// Faça uma função que obtenha seis dados de data-hora (ano, mês, dia, hora, minuto, segundo) 
// e retorne os dados de ano, mês e dia formatados.

const assert = require('assert');

const formatDate = (year, month, day, ...time) => {

    return `${day}/${month}/${year} - ${time.join(':')}`
}

// console.log(formatDate('1981', '7', '31', '22', '47', '12'));

const dataInfo = ['1981', '7', '31', '22', '47', '12'];

let expectedValue = '31/7/1981 - 22:47:12';

assert.strictEqual(formatDate('1981', '7', '31', '22', '47', '12'), expectedValue);
// Feramenta que fornece funções para diversos tipos dos Test Doubles

// Criando um stub:

const fs = require('fs');
const sinon = require('sinon');

sinon.stub(fs, 'readFileSync').returns('Valor a ser retornado');

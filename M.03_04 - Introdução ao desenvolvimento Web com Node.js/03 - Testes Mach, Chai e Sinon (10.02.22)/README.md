 - [Documentação do Chai](https://www.chaijs.com/api/bdd/)
 - [Documentação do Sinon](https://sinonjs.org)

Para implementar testes no back-end iremos utilizar a dupla mocha e chai . Apesar de serem duas ferramentas diferentes, elas se completam.

**-D: Esses módulos só serão utilizados em fase de desenvolvimento e não serão utilizados para executar nossa aplicação quando ela for publicada.**
```
npm install -D mocha chai
```
ou
```
npm install --save-dev mocha chai
```

**Instalação Sinon:**
```
npm install -D sinon
```
ou
```
npm install --save-dev sinon
```

## Tipos de Teste:

1. **Unitários:** Trabalham presumindo um escopo limitado a um pequeno fragmento do seu código com interação mínima entre recursos externos;
2. **Integração:** Trabalham presumindo a junção de múltiplos escopos com interações entre eles;
3. **Ponta-a-ponta:** Chamados também de Fim-a-fim (End-to-End; E2E), esses testes pressupõe um fluxo de interação completo com a aplicação, de uma ponta a outra.

## Executando o Teste:

**Instalado de maneira global:** `npm install -g mocha`

**Chamando diretamente no terminal:** `mocha tests/arquivo.js`

**Forma mais recomendável:**
1. Adicionando ao package.json
```
"scripts": {
  "start": "node index.js",
  "test": "mocha tests"
```
2. Executar apenas `npm run test` ou `npm test`

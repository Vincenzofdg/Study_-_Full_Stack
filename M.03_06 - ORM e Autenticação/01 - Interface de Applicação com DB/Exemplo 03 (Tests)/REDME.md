Para testar os models criados com o Sequelize, seguiremos os mesmos conceitos vistos anteriormente: iremos isolar as operações de IO e utilizaremos bibliotecas específicas para nos ajudar com os stubs e asserções.

**Instalando:** `npm i mocha chai sinon chai-http -D`

**package.json:**
```json
"scripts": {
  ...
  "test": "mocha ./tests/**/*$NAME*.test.js --exit"
},
```
## Instalando
1. npm install -D mocha chai sinon @types/mocha @types/chai @types/sinon
2. npm install chai-as-promised @types/chai-as-promised

## Criando TEST no script
```js
"test": "mocha ./tests/**/*.test.js --exit -t 99999"
```

- -t 99999: para nao ter timeout 

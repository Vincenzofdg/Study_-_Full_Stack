```
npm install --save-dev mocha chai
```

```
npm install --save-dev sinon
```

## Comportamento:

A função vai receber o parâmetro N: número de fatos que eu quero buscar.

**Quando N > 0:**

 - Retorna um array de tamanho N;
 - Retorna um array de strings;
 - API de gatos é chamada N vezes.

**Quando N === 0:**

 - Retorna um array vazio.

**Quando typeof N !== 'number'**

 - Levantar um Erro.

**Quando a chamada de API der problema**
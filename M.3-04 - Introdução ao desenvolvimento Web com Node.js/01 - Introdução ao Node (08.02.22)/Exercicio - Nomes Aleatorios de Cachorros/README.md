1. Execulte `npm init -y`;
2. Acesse o [pacote](https://www.npmjs.com/package/dog-names);
3. Instale o pacote `npm install dog-names`;
4. Abra o vscode e crie no diretorio o index.js;
5. Adicione ao index.js:
```
const dogNames = require('dog-names');

console.log(dogNames.femaleRandom());
```

6. Execulte o comando `node index.js`;
7. Entre no arquivo **package.json** e em "scripts" adicione `"start": "node index.js"`;
8. Execulte o comando `npm start`.
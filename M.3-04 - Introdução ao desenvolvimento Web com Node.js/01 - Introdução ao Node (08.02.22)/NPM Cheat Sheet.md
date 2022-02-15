**Para achar pacotes visite o site [npmjs.com](https://www.npmjs.com)**

**[Documentação](https://docs.npmjs.com)**

## Criar novo pacote Node.js

### Cria o arquivo `package.json` personalizado
```shell
$ npm init
```

### Cria o arquivo `package.json` padrão
```shell
$ npm init -y
```

---

## Instalar pacotes no Node.js

### Instala **todas** as depedências do arquivo `package.json`
```shell
$ npm install
```

### Instala o **pacote desejado** nas depedências do arquivo `package.json`

**Template**
```shell
$ npm install <package_name>
```

**Exemplo**
```shell
$ npm install express
```

### Instala o **pacote desejado** nas depedências de **desenvolvimento** do arquivo `package.json`

**Template**
```shell
$ npm install <package-name> --save-dev
```
OU
```shell
$ npm install <package-name> -D
```

**Exemplo**
```shell
$ npm install jest --save-dev
```
OU
```shell
$ npm install jest -D
```


---

## Remover pacotes no Node.js

### Remove o **pacote desejado** das depedências do arquivo `package.json`

**Template**
```shell
$ npm rm <package_name>
```

**Exemplo**
```shell
$ npm rm express
```

[Voltar para Sumário](#sumário)

---

## Criar scripts no arquivo `package.json`

### Cria script para iniciar a **aplicação principal**
**Template**
```json
{
  "scripts": {
    "start": "node nome_do_seu_arquivo.js"
  }
}
```

**Exemplo**
```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

### Cria **script personalizado** para o pacote desejado
**Template**
```json
{
  "scripts": {
    "nome_do_comando_do_script": "o_que_deseja_executar"
  }
}
```
**Exemplo**
```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

---

## Executar scripts do arquivo `package.json`

### Executa a **aplicação principal** do pacote que esta criando

```shell
$ npm start
```

### Executa o **script registrado** no arquivo `package.json`

**Template**
```shell
$ npm run <package-name>
```

**Exemplo**
```shell
$ npm run lint
```

---
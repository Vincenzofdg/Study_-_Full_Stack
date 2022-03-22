## Executando localmente
Para rodar um projeto localmente utilizando o CLI do Heroku, basta instalar as dependências do projeto e utilizar o CLI da seguinte maneira:

```sh
npm install dependências_NodeJs_utilizando_o_npm.
```

```sh
heroku local web
```


## Preparando um Projeto para Deploy
01. npx create-react-app meu-deploy
02. git remove -v (Nenhum resultado pois não tem nenhum remote)
03. git remote add origin git@github.com:[USUARIO_GITHUB]/meu-deploy.git

### Heroku Remote
- **Criar:** `heroku create`
- **Remover:** `git remote rm heroku`

```sh
heroku create meu-deploy-2930
```
Após esse comando, liste novamente os remotes e você verá um novo remote chamado heroku, apontando para um repositório em **https:/git.heroku.com/**, exemplo:
```js
heroku  https://git.heroku.com/meu-deploy-2930.git (fetch)
heroku  https://git.heroku.com/meu-deploy-2930.git (push)
```

### Nomeação do Remote
Por padrão, o CLI vai nomear todos os remotes criados como heroku. Porém, podemos criar um remote passando um nome diferente utilizando a flag `--remote`:
```sh
heroku create meu-deploy-2930 --remote heroku-homolog
```
ou é possivel renomear:
```
git remote rename heroku heroku-homolog
```

### Vincular um App Existente a um Novo Remote
Agora é necessário vincular um app a um outro remote, pois ao removê-lo anteriormente com git remote rm nome-do-remote, o app que estava associado a ele, ficou sem um remote. Utilize a seguinte sintaxe:
```sh
heroku git:remote -a meu-deploy-2930 --remote heroku-test
```
- No caso de haver mais de uma aplicação no repositório, você pode usar o comando `-a` que é um alias de `--app` para escolher a aplicação que será usada.
1. npm init -y
2. npm i express
3. touch index.js
4. node index.js
5. http://localhost:3001/hello

## Instalando nodemon
Para que possamos realizar alterações na aplicação e não precise reiniciar a aplicação. Instalamos o nodemon que iria fazer isso sempre que alterar o codigo.
```
npm i nodemon -D
```
adicione no package.json:
```
scripts: {
  "dev": "nodemon index.js"
}
```
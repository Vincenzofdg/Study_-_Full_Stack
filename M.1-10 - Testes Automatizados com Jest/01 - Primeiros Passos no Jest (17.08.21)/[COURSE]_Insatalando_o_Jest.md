$ npm -v 		// Verificar se o npm esta instalado.

Na pasta do projeto iremos criar um arquivo packege.json
$ npm init -y		// Criar o arquivo.

Retorno:
	Wrote to /home/cleyton/Documents/meuApp/package.json:

	{
	  "name": "meuApp",
	  "version": "1.0.0",
	  "description": "",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "keywords": [],
	  "author": "",
	  "license": "ISC"
	}

Trocar "test": "echo \"Error: no test specified\" && exit 1" por "test": "jest"
	{
	  "name": "meuApp",
	  "version": "1.0.0",
	  "description": "",
	  "main": "index.js",
	  "scripts": {
	    "test": "jest"
	  },
	  "keywords": [],
	  "author": "",
	  "license": "ISC"
	 }

Por fim, vamos instalar o Jest dentro da pasta que você criou. 
$ npm install --save-dev jest

A sua pasta agora contém dois arquivos, o package.json e o package-lock.json e um novo diretório chamado node modules, estes últimos dois foram criados após você executar o comando npm install --save-dev jest.

-------------------------------------------------------------------------------------------------------

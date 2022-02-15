## HTTP

Vamos relembrar o que compõe uma requisição HTTP. Para isso, analisaremos a requisição que é feita pelo navegador quando abrimos a página **https://developer.mozilla.org**.
```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept: text/html
```

As informação que recebemos são:

 - **HTTP**: utilizamos o GET para buscar algo do servidor, e é também o método padrão executado por navegadores quando acessamos uma URL;
 - **/**: É o caminho do servidor do recurso acessado, no nosso casa é "/" pois estamos acessando a página inicial;
 - **1.1**: A versão do protocolo;
 - **Host**: Local onde estamos tentando acessar;
 - **Headers**: Informações adicionais de uma requisição. Exemplo:
  - header Host: Tipo de resposta esperada do endereço do servidor;
  - header Accept: Tipo de resposta esperado do servidor.

<hr />

**Existem Mais de 39 métodos diferentes. Sendo os mais usados:**

 - GET;
 - PUT;
 - POST;
 - DELETE;
 - PATCH.

Requisições do tipo POST, PUT e PATCH carregam mais uma informação para o servidor (corpo, ou body). Exemplo de resposta:
```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (aqui vêm os 29769 bytes da página solicitada)
```

A composição da resposta é definida por:

 - **Versão** (1.1 no exemplo);
 - **Status** (200 => ok);
 - **Headers**;
 - **Body**.
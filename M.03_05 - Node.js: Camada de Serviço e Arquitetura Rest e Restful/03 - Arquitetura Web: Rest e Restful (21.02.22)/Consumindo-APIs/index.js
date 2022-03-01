const fetch = require('node-fetch');

const METHOD = 'post';
const TOKEN = '2d635ea9b637ea0f27d58985cc161d64';
const URL = `https://postman-echo.com/${METHOD}?param1=teste`;


const secondParams = {
    method: METHOD.toUpperCase(),                           // Dizendo qual metodo usar
    headers: new fetch.Headers({                            // Criamos um novo objeto de Headers
        Authorization: TOKEN,                               // Token de seguranca
        'Content-Type': 'application/json',                 // Alem do conteudo que ira enviar tambem tem que adicionar esse elemento ao header
    }),   
    body: JSON.stringify({                                  // stringify pois vamos enviar esse body como JSON
        name: 'Vincenzo',
        email: 'vfdgiacomo@gmail.com',
        password: 'senha213'
    })
};


fetch(URL, secondParams)
  .then((response) => !response.ok ? Promise.reject(response) : response.json())
  .then((data) => console.log(data))
  .catch((theError) => theError.status ? console.error(`Request failed: ${theError.status}`) : console.error(theError));
#### Exercício 1

Nesse exercício, utilizaremos [essa API](https://aws.random.cat/meow) para realizarmos nossas requisições. Vamos focar apenas no desenvolvimento de uma **action assíncrona** e na implementação do `thunk` na `store`. O `reducer`, 
assim como os componentes da aplicação, já estão prontos. Desse modo, realizaremos modificações apenas nos arquivos `actions/index.js` e 
`store/index.js`.

Nessa aplicação, temos dois componentes: 
 1. `Gallery.js`, o qual renderiza uma imagem a partir de uma _URL_ armazenada no estado global da aplicação.
 2. `Button.js`, o qual renderiza um botão que, ao ser clicado, faz a requisição de uma imagem e armazena a URL no estado global por 
 meio de uma `action` assíncrona.

Como a aplicação está quase pronta, já temos o `reducer` e os componentes concluídos, nos falta somente a implementação do `thunk` e da action assíncrona. Para isso:
 1. Caso ainda não tenha feito, execute o comando `npm install` para instalar as dependecias
 necessárias para a aplicação: `redux`, `react-redux`, `react-thunk`.
 2. Faça as implementações necessárias na **store**. (arquivo `store/index.js`)
 3. No arquivo `actions/index.js`, desenvolva a action assíncrona necessária para a
 aplicação rodar adequadamente. Essa _action_ assíncrona deverá fazer o uso de outras duas actions:
    1. Da `requestAPI`: para informar ao usuário que a informação solicitada está carregando
    2. Da `getPicture`: para salvar no estado global da aplicação a _URL_ da imagem solicitada da API.
 
_Observação: Para essa aplicação, é necessário que o nome da action assíncrona seja
 **fetchAPI**._

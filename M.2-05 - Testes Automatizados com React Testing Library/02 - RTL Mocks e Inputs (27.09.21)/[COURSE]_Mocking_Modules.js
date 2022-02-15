// Artigo: https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    }
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke }));
  }

  render() {
    return (
      <div className="App">
        {this.state.joke}
      </div>
    );
  }
}

export default App;

/* O Problema: 
Teste se sua aplicação tem o funcionamento correto no navegador retornando uma piada aleatória a cada vez que a pagina é atualizada.
Agora temos o problema, como testar a aplicação sem que quebre toda vez que nossa api retornar uma nova piada diferente? */

// App.test.js:
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Verifica se, quando recebo uma piada, mostro ela na tela', async () => {
  const joke = {
    id: '7h30d23g46h',
    joke: 'Some boring Joke...',
    status: 100,
  };
  // -------------------------------------------------------------------------------------------------------
  // lembrando => const response = { json: () => console.log('magica') }
  // response.json() chama a função
  const response1 = { json: jest.fn().mockImplementation(() => Promise.response(joke)) }; // Uma Forma
  const response2 = { json: jest.fn(() => Promise.response(joke)) }; // Simplificando a response1
  const response3 = { json: jest.fn().mockResolvedValue(joke) }; // O mais simples e simplificado
  // -------------------------------------------------------------------------------------------------------
  // global é um objeto que armazena varias função que o javascript usa
  global.fetch = jest.fn().mockResolvedValue(response3);
  // Outra forma de escrever:
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });
  // -------------------------------------------------------------------------------------------------------
  const { findByText } = render(<App />);
  await findByText('Some boring Joke...') // Mesma coisa que => await waitFor(() => getByText('Some boring Joke...'))

  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', { headers: { accept: 'application/json' } })
})

// EXEMPLO 01
// App.test.js
afterEach(() => jest.clearAllMocks());
it('fetch joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, "fetch")
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });
  const { findByText } = render(<App />);
  await findByText('Whiteboards ... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
});

/* Análise:
  > A constante joke cria um objeto similar ao que é retornado da API;
  > O jest.spyon espiona as chamadas a função fetch do objeto global , é por meio deste objeto global que conseguimos usar qualquer função do sistema, por exemplo a função parseInt;
  > Quando a função fetch for chamada, ao invés de fazer uma requisição a uma API externa será chamando nosso mock. Repare que para cada .then utilizamos .mockResolvedValue e simulamos o retorno que o fetch teria, primeiro retornamos um objeto que contem a função .json e dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado no nosso componente;
  > É importante termos o async em it('fetch joke', async () => { , para que se possa utilizar await findByText onde estamos dizendo ao nosso teste: ei espere até que consiga encontrar esse texto no dom ou de erro por limite de tempo;
  > As funções toBeCalledTimes e toBeCalledWith servem para garantir respectivamente, o número de chamadas ao nosso fetch e que ele foi chamado com os argumentos corretos;
  > A linha afterEach(() => jest.clearAllMocks()); faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock , isso é bem util para que não tenha interferência entre um teste e outro. */

// EXEMPLO 02
import React from 'react';
import { render } from '@testing-library/react'
import App from './App';

afterEach(() => jest.clearAllMocks());
it('should fetch users', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(()=>
  Promise.resolve({
    json: ()=> Promise.resolve(joke)
  }));

  const { findByText } = render(<App />);
  await findByText('Whiteboards ... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
});

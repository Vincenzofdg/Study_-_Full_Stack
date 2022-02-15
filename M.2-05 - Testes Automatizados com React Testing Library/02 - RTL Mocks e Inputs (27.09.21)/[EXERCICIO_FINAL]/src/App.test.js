import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Melhor do que FireEvent
import App from './App';

const apiMocked = [{
  name: 'Agumon',
  level: 'Rookie',
  img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
}];

describe('Elementos Fixos aparecem na tela:', () => {

  it('01. InputText com label "Digimon"', () => {
    render(<App />);

    const text = screen.getByLabelText('Digimon');

    expect(text).toBeInTheDocument();
    expect(text).toHaveValue('');
  })

  it('02. Buttom com nome "Search Digimon"', () => {
    render(<App />);

    const btn = screen.getByRole('button', {name: 'Search Digimon'})
    const btnAll = screen.getAllByRole('button')

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Search Digimon')
    expect(btnAll.length).toBe(1);
  })

  it('03. h1 com o texto "Faça uma pesquisa"', () => {
    render(<App />);

    const msg = screen.getByRole('heading', {
      level: 1,
      name: 'Faça uma pesquisa',
    });

    expect(msg).toBeInTheDocument();
  })
});
// 
// const msg = screen.getByRole('heading');

describe('Comportamentos dos componentes:', () => {

  it('01. O value do inputText muda ao digitar', () => {
    render(<App />);

    const text = screen.getByLabelText('Digimon');

    userEvent.type(text, 'changed');

    expect(text).toHaveValue('changed');
  })

  it('02. Verifica se a API renderizou algum digimon quando a tela é carregada', () => {
    render(<App />);

    const digimonCarregado = screen.queryByTestId('digimonName');

    expect(digimonCarregado).not.toBeInTheDocument();
  })

  it('03. Realiza a busca por um digimon', async () => {
    const mockResolved = { json: jest.fn().mockResolvedValue(apiMocked) };
    global.fetch = jest.fn().mockResolvedValue(mockResolved);

    render(<App />);
    
    const text = screen.getByLabelText('Digimon');
    const btn = screen.getByRole('button');

    userEvent.type(text, 'Agumon');
    userEvent.click(btn);

    await screen.findByText('level: Rookie'); // <== Faz com que esperemos antes de continuar testando

    const nome = screen.getByRole('heading', {
      level: 2,
      name: 'Agumon',
    })
    expect(nome).toHaveTextContent('Agumon')
    expect(nome).toBeInTheDocument();

    const img = screen.getByAltText('Agumon') // Procura pelo ALT da imagem (https://testing-library.com/docs/dom-testing-library/cheatsheet/#queries)
    expect(img).toBeInTheDocument();
  })

  it('04. É chamado apenas uma vez a função fetch', () => {
    render(<App />);
    
    const btn = screen.getByRole('button');
    
    userEvent.click(btn);
    
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/Agumon');
  })

  it('05. Quando digitado uma nome de digimon que não existe a mensagem deve aparecer', async () => {
    const ErrorMsg = 'A is not a Digimon in our database.';

    const mock = { json: jest.fn().mockResolvedValue({ ErrorMsg }) };
    global.fetch = jest.fn().mockResolvedValue(mock);

    render(<App />);

    const text = screen.getByLabelText('Digimon');
    const btn = screen.getByRole('button');

    userEvent.type(text, 'none');
    userEvent.click(btn);

    await screen.findByText(/is not a Digimon in our database/i);

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/none');
  })

  // it('Caso ocorra uma busca vazia, o fetch não deve ser chamado', () => {
  //   render(<App />);

  //   const text = screen.getByLabelText('Digimon');
  //   const btn = screen.getByRole('button');
    
  //   userEvent.type(text, '');
  //   userEvent.click(btn);

  //   expect(global.fetch).toBeCalledTimes(0);
  // });
})
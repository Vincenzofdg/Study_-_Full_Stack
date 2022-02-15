import React from 'react';
import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import data from '../data';

// Funções:
const verificaCadaPokemonClick = (where) => {
  data.forEach(({ name }) => {
    expect(screen.getByText(name)).toBeInTheDocument();
    userEvent.click(where);
  });
};

const pokemonType = data.reduce((acc, { type }) => {
  const theFilter = data.filter(({ type: kind }) => type === kind).length;
  if (acc.find(({ type: kind }) => kind === type)) return acc;
  return [...acc, { type, qtd: theFilter }];
}, []);

function teste(pokeType, bt, btAll, btNext) {
  bt.forEach((button, index) => {
    expect(button).toHaveTextContent(pokeType[index].type);
    userEvent.click(button);
    if (pokeType[index].qtd > 1) {
      for (let i = 0; i < pokeType[index].qtd; i += 1) {
        const pokesFiltered = data.filter(({ type }) => type === pokeType[index].type);
        const name = screen.getByText(pokesFiltered[i].name);
        expect(name).toBeInTheDocument();
        userEvent.click(btNext);
      }
    }
    expect(btAll).toBeInTheDocument();
  });
}

// Os testes:
describe('Testando os componentes de <Pokedex />', () => {
  it('Se existem um texto "Encountered pokémons":', () => {
    renderWithRouter(<App />);
    const text = screen.getByRole('heading', {
      level: 2,
      name: 'Encountered pokémons',
    });
    expect(text).toBeInTheDocument();
  });

  it('Se e exibido o proiximo pokemon ao clicar em "Próximo pokémon":', () => {
    renderWithRouter(<App />);

    const btn = screen.getByRole('button', { name: /próximo pokémon/i });
    verificaCadaPokemonClick(btn);
  });

  it('Testando os filtros dos botoes:', () => {
    renderWithRouter(<App />);

    const btn = screen.getAllByTestId('pokemon-type-button');
    const btnAll = screen.getByRole('button', { name: 'All' });
    const btnNext = screen.getByRole('button', { name: /próximo pokémon/i });

    teste(pokemonType, btn, btnAll, btnNext);
  });

  it('5.5. se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const btnAll = screen.getByRole('button', { name: 'All' });
    expect(btnAll).toBeInTheDocument();

    userEvent.click(btnAll);

    const btn = screen.getByRole('button', { name: /próximo pokémon/i });
    verificaCadaPokemonClick(btn);
  });
});

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Testando o componente FavoritePokemons.js', () => {
  it('Não tendo favoritos a mensagem "No favorite pokemon found" é mostrada:', () => {
    renderWithRouter(<FavoritePokemons />);

    const msg = screen.getByText('No favorite pokemon found');
    expect(msg).toBeInTheDocument();
  });

  it('Mostra todos os pokemons favoritados:', () => {
    renderWithRouter(<App />);

    // Clicando no "More datails" na figura do pokemon:
    const btnDetails = screen.getByRole('link', { name: 'More details' });
    userEvent.click(btnDetails);

    // Clicando no Check Box para favoritar:
    const checkBox = screen.getByRole('checkbox');
    userEvent.click(checkBox);

    // Clicando no link "Favorite Pokémons" para ver se o pokemon foi favoritado:
    const favorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favorite);

    const pokemon = screen.getByText(/average weight/i);
    expect(pokemon).toBeInTheDocument();
  });
});

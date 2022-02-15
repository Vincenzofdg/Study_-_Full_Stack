import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

const { name, summary, foundAt } = pokemons[0];

describe('Teste o componente `<PokemonDetails.js />', () => {
  afterEach(() => {
    cleanup();
  });

  it('Verifica se as informações são mostradas na tela:',
    () => {
      renderWithRouter(<App />);

      const maisDetalhes = screen.getByRole('link', { name: /more details/i });
      userEvent.click(maisDetalhes);

      const texto = screen.getByText(summary);
      const detalhes = screen.getByRole('heading', { name: `${name} Details` });
      const resumo = screen.getByRole('heading', { name: 'Summary' });

      expect(texto).toBeInTheDocument();
      expect(detalhes).toBeInTheDocument();
      expect(maisDetalhes).not.toBeInTheDocument();
      expect(resumo).toBeInTheDocument();
    });

  it('Se os mapas com as localizações do pokémon são renderizada:', () => {
    renderWithRouter(<App />);

    const maisDetalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(maisDetalhes);

    const local = screen.getByRole('heading', { name: `Game Locations of ${name}` });
    expect(local).toBeInTheDocument();

    foundAt.forEach(({ location }) => {
      const imgText = screen.getByText(location);
      expect(imgText).toBeInTheDocument();
    });

    const imgAll = screen.getAllByAltText(`${name} location`);
    imgAll.forEach((img, index) => {
      expect(img).toHaveAttribute('src', foundAt[index].map);
    });
  });

  it('Favoritar na pagina de detalhes de cada pokemon:', () => {
    renderWithRouter(<App />);

    const maisDetalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(maisDetalhes);

    const btnFavorite = screen.getByRole('checkbox');
    expect(btnFavorite).toBeInTheDocument();

    const toCheck = screen.getByLabelText('Pokémon favoritado?');
    expect(toCheck).toBeInTheDocument();

    userEvent.click(btnFavorite);
    const iconFavorite = screen.getByAltText(`${name} is marked as favorite`);
    expect(iconFavorite).toBeInTheDocument();

    userEvent.click(btnFavorite);
    expect(iconFavorite).not.toBeInTheDocument();
  });
});

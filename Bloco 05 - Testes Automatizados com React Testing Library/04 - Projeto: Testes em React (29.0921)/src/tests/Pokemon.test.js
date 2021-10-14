import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';
import Data from '../data';

const {
  name,
  type,
  image,
  id,
  averageWeight: { value, measurementUnit } } = Data[0];

describe('Verificando o componente <Pokemon />', () => {
  it('Card deve conter => nome, tipo, img e peso', () => {
    renderWithRouter(<App />);

    const text = `Average weight: ${value} ${measurementUnit}`;

    const nome = screen.getByTestId('pokemon-name');
    const tipo = screen.getByTestId('pokemon-type');
    const peso = screen.getByTestId('pokemon-weight');
    const img = screen.getByAltText(`${name} sprite`);

    expect(nome).toBeInTheDocument();
    expect(tipo).toBeInTheDocument();
    expect(peso).toBeInTheDocument();
    expect(img).toBeInTheDocument();

    expect(nome).toHaveTextContent(name);
    expect(tipo).toHaveTextContent(type);
    expect(img).toHaveAttribute('src', image);
    expect(peso).toHaveTextContent(text);
  });

  it('Verifica se exite um link para mais informações no Card', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: 'More details' });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/pokemons/${id}`);
  });

  it('Verifica se ao clicar no link vai para os detalhes do pokemon', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: /details/i });

    userEvent.click(details);

    const text = screen.getByRole('heading', {
      level: 2,
      name: /game Locations of/i,
    });
    expect(text).toBeInTheDocument();
  });

  it('Verifica se existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);

    const linkElement = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkElement);

    const checkInput = screen.getByRole('checkbox');
    userEvent.click(checkInput);

    const starIconElement = screen.getByAltText(`${name} is marked as favorite`);
    expect(starIconElement).toBeInTheDocument();
    expect(starIconElement).toHaveAttribute('src', '/star-icon.svg');
  });
});

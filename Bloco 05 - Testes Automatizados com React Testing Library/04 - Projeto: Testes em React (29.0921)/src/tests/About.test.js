import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../components/About';

describe('Testes relacionados ao About', () => {
  it('Informações sobre o pokedex são renderizadas, sendo 2 paragrafos', () => {
    renderWithRouter(<About />);

    const info = screen.getAllByText(/Pokémons/i);
    const info01 = screen.getByText(/application simulates a Pokédex/i);
    const info02 = screen.getByText(/and see more details for each/i);

    expect(info01).toBeInTheDocument();
    expect(info02).toBeInTheDocument();
    expect(info.length).toBe(2);
  });
  it('Contém um titulo com o texto "About Pokédex"', () => {
    renderWithRouter(<About />);

    const titulo = screen.getByRole('heading', {
      level: 2,
      name: 'About Pokédex',
    });

    expect(titulo).toBeInTheDocument();
  });
  it('Se contém uma imagem com SRC especifico', () => {
    renderWithRouter(<About />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});

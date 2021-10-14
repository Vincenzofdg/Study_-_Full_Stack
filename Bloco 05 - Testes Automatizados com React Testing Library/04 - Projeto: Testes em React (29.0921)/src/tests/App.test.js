import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../renderWithRouter';
import App from '../App';

// Primeira Bateria de Teste:
describe('Se contém links de navegação no topo da pagina', () => {
  it('Primeiro Link => Home', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });

    expect(home).toBeInTheDocument();
  });

  it('Segundo Link => About', () => {
    renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: 'About' });

    expect(about).toBeInTheDocument();
  });

  it('Terceiro Link => Texto', () => {
    renderWithRouter(<App />);
    const text = screen.getByRole('link', { name: /Favorite Pokémons/i });

    expect(text).toBeInTheDocument();
  });
});

// Segunda Bateria de Teste:
describe('Se quando clicar nos links eles te levaram ao local da pagina ', () => {
  it('Home direciona para "/"', () => {
    const { history } = renderWithRouter(<App />);

    const linkTest = screen.getByRole('link', { name: 'Home' });

    userEvent.click(linkTest);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  it('About direciona para "/about"', () => {
    const { history } = renderWithRouter(<App />);

    const linkTest = screen.getByRole('link', { name: 'About' });

    userEvent.click(linkTest);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });

  it('Favorite Pokémons direciona para "/favorites"', () => {
    const { history } = renderWithRouter(<App />);

    const linkTest = screen.getByRole('link', { name: /Favorite Pokémons/i });

    userEvent.click(linkTest);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');
  });

  it('URL que nao existe direciona para "NOT FOUND"', () => {
    const { history } = renderWithRouter(<App />);

    history.push('unknow');

    const { location: { pathname } } = history;
    expect(pathname).toBe('/unknow');
  });
});

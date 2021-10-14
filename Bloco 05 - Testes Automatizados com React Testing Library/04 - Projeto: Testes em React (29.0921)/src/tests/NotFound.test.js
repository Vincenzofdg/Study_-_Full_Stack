import React from 'react';
import { screen } from '@testing-library/react';

import renderWithRouter from '../renderWithRouter';
import NotFound from '../components/NotFound';

describe('Testando o componente NotFound.js', () => {
  it('Se a página tenha um texto "Page requested not found 😭":', () => {
    renderWithRouter(<NotFound />);

    const text = screen.getByRole('heading', {
      level: 2,
      name: /page requested not found/i,
    });

    expect(text).toBeInTheDocument();
  });

  it('Se a pagina renderiza a imagem:', () => {
    renderWithRouter(<NotFound />);

    const img = screen.getByAltText(/pikachu crying/i);

    expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});

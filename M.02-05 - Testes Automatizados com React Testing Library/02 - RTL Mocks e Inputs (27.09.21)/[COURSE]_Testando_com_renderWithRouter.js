// src/App.test.js:
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter'; // <== Importamos o renderWithRouter
import App from './App';

it('Testando se renderiza o componente App(HOME => "/")', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: 'Você está na página Início',
  });
  expect(homeTitle).toBeInTheDocument();
});

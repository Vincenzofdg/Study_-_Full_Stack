// O RTL tem como objetivo ver o comportamento => vendo se é ou não renderizado na tela
// Para instalar o RTL => npx testes

import React from 'react';
import { render } from '@testing-library/react'; // <== Devemos Importar a Lib 
import App from './App';

// Testando se a frase learn react sera renderizada.
// Notar o uso de regex para que não importe o  como a frase esteja escrita e sim ela estar sendo renderizada
it('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
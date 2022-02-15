import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

const digimonMocked = {
  name: 'Agumon',
  level: 'Rookie',
  img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
}

describe('Componentes renderizam apos chamada da API:', () => {
  it('01. Titulo', () => {
    render(<Digimon digimon={ digimonMocked }/>)

    const title = screen.getByRole('heading', { level: 2 });

    expect(title).toHaveTextContent('Agumon')
  });
  it('02. Paragrafo', () => {

  });
  it('03. Imagem', () => {
    render(<Digimon digimon={ digimonMocked }/>)

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
  });
});

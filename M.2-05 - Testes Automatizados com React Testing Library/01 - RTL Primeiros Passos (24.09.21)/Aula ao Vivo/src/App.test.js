import React from 'react';
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

describe('MovieList', ()=>{
  test('Renderiza "Carregando..." quando a aplicação é iniciada', () => {
    const { getByText } = render(<App/>);

    expect(getByText(/carregando/i)).toBeInTheDocument();
  });

  it('Exibe o primeiro filme', async () => {
    render(<App/>);

    // Função retirada da documentação do RTL, estou aprendendo a usar
    // https://testing-library.com/docs/react-testing-library/cheatsheet
    await waitForElementToBeRemoved(() =>
      screen.getByText(/carregando/i),
      { timeout: 3000 },
    );

    expect(screen.getByText('Kingsglaive')).toBeInTheDocument();
    expect(screen.getByText('Final Fantasy')).toBeInTheDocument();
    expect(screen.getByText('Ghost In The Shell')).toBeInTheDocument();
  });

  test('Renderiza a página de detalhes ao clicar em "Ver detalhes"', async () => {
    render(<App/>);

    await waitForElementToBeRemoved(() =>
      screen.getByText(/carregando/i),
      { timeout: 3000 },
    );

    const detailsButton = screen.getByTestId(/kingsglaiveDetails/i);
    fireEvent.click(detailsButton);

    await waitForElementToBeRemoved(() =>
      screen.getByText(/carregando/i),
      { timeout: 3000 },
    );

    expect(screen.getByText(/genre/i)).not.toBeNull();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('App.js test', () => {
  test('ao entrar na página verifica se o texto "sobre mim"'
  + 'aparece e clica no link de projetos', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const aboutText = screen.getByRole('heading', {
      level: 1,
      name: 'Página sobre mim',
    });
    expect(aboutText).toBeInTheDocument();

    const projectsLink = screen.getByRole('link', {
      name: /projetos/i,
    });
    expect(projectsLink).toBeInTheDocument();

    userEvent.click(projectsLink);

    const projectText = screen.getByRole('heading', {
      level: 1,
      name: /projetos/i,
    });
    expect(projectText).toBeInTheDocument();
  });
});

test('ao entrar na página verifica se o texto "sobre mim"'
+ 'aparece e clica no link de comentários', () => {
  render(<MemoryRouter><App /></MemoryRouter>);

  const aboutText = screen.getByRole('heading', {
    level: 1,
    name: 'Página sobre mim',
  });
  expect(aboutText).toBeInTheDocument();

  const commentsLink = screen.getByRole('link', {
    name: /comentário/i,
  });
  expect(commentsLink).toBeInTheDocument();

  userEvent.click(commentsLink);

  const commentsText = screen.getByRole('heading', {
    level: 1,
    name: /comente/i,
  });
  expect(commentsText).toBeInTheDocument();
});

test('exibe a página "Não encontrado" quando eu digitar uma rota inválida', () => {
  const { history } = renderWithRouter(<App />);

  history.push('/rota-que-nao-existe');

  const notFoundText = screen.getByRole('heading', {
    level: 1,
    name: /página não encontrada/i,
  });
  expect(notFoundText).toBeInTheDocument();
});

test('ao entrar na página de comentários eu consigo add um comentário', () => {
  const { history } = renderWithRouter(<App />);
  console.log(history);

  const commentsText = screen.getByRole('heading', {
    level: 1,
    name: /comente/i,
  });
  expect(commentsText).toBeInTheDocument();

  const commentInput = screen.getByRole('textbox');
  const buttonAddComment = screen.getByRole('button', {
    name: /add comment/i,
  });

  userEvent.type(commentInput, 'xablau');
  userEvent.click(buttonAddComment);

  const xablauText = screen.getByText('xablau');
  expect(xablauText).toBeInTheDocument();
});

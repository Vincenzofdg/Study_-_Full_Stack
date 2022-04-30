import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import Item from './Item';

afterEach(cleanup);

describe('Exercicio 01', () => {
  const {getByDisplayValue} = render(<App />);
  const addBtn = getByDisplayValue(/adicionar/i);
  
  it('Verifica se há um botão para adicionar a tarefa:', () => {
    expect(addBtn).toBeInTheDocument(); // <== Botão esta no documento
    expect(addBtn.type).toBe('button') // <== Verificando o tipo.
  });
  
  it('Verifica se há um botão contem o texto "Adicionar":', () => {
    expect(addBtn.value).toBe('Adicionar');
  });
  
  it('Tarefa digitada pelo o usuário precisa ser salva na lista:', () => {
    const { getByText, getByLabelText } = render(<App />)

    const addTask = getByLabelText('Tarefa:');
    const btnToAdd = getByDisplayValue(/adicionar/i); // Btn tinha que ficar dentro do It, pois do lado de fora nao funcionava

    fireEvent.change(addTask, {target: {value: 'Nova Tarefa'}});
    fireEvent.click(btnToAdd);

    expect(addTask).toHaveValue('');
    expect(getByText('Nova Tarefa')).toBeInTheDocument();
  });
});

describe('Exercicio 02', () => {
  
  it('A adição de elementos à lista', () => {
    const myList = ['Realizar CR', 'Ler Post', 'Fazer Projeto'];

    const {getByText, getByLabelText} = render(<App />);
    const addBtn = getByText('Adicionar');
    const addTask = getByLabelText('Tarefa:');

    myList.forEach((each) => {
      fireEvent.change(addTask, {target: {value: each}});
      fireEvent.click(addBtn);
    })

    myList.forEach((each) => expect(getByText(each)).toBeInTheDocument());

  });
  it('Item: Ao passar uma string para ele ela precisa aparecer na tela', () => {
    const {getByText} = render(<Item content="Realizar Nova Tarefa" />);
    const newItem = getByText('Realizar Nova Tarefa');

    expect(newItem).toBeInTheDocument();
  });
});

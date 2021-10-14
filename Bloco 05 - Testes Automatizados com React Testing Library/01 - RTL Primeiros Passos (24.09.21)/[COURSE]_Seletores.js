// Métodos que usamos para indicar ao RTL algum elemento da nossa aplicação e assim podermos realizar nossos testes e comparações.
// fonte: https://testing-library.com/docs/queries/about/

// O que deseja-se testar:
function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
      </label>
      <input id="id-email" type="email" />
    </div>
  );
}

// Testando:
test('Verificando se existe o campo Email.', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');

  expect(inputEmail).toBeInTheDocument(); // <== Verificando se esta renderizado
  expect(inputEmail.type).toBe('email'); // <== Verificando o typo do input
});

// Caso haja um input com um type exclusivo:
function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
      </label>
      <input id="id-email" type="email" />
      <input id="btn-send" type="button" value="Enviar" />
    </div>
  );
}

// Testando:
test('Verificando se existe um botão', () => {
  const { getByRole } = render(<App />);
  const btn = getByRole('button');
  expect(btn).toBeInTheDocument();
});

// Caso haja mais de um input com o mesmo type:
function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
      </label>
      <input id="id-email" type="email" />
      <input id="btn-send" type="button" value="Enviar" />
      <input id="btn-back" type="button" value="Voltar" />
    </div>
  );
}

// Testando
test('Verificando se existe dois botões', () => {
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(2);
});

// Caso haja a necessidade de verificar um botão especifico, será precisso adicionar um data-testid no elemento
// Deseja-se checar se há um botao de enviar na aplicação, portanto:
function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
      </label>
      <input id="id-email" type="email" />
      <input id="btn-send" type="button" data-testid="id-send" value="Enviar" />
      <input id="btn-back" type="button" value="Voltar" />
    </div>
  );
}

Teste:
test('Verificando se existe dois botões', () => {
  const { getAllByRole } = render(<App />);
  const btn = getAllByRole('button');
  expect(btn.length).toBe(2);
});

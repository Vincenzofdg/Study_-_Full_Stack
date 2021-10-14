// Primeiro: Criar e retornar a store
const store = Redux.createStore();

// Segundo:
const reducer = (state) => state;

const store = Redux.createStore(reducer);

// Terceiro: Inicialmente o state vem como undefined , e não queremos isto. Então iremos atribuir a ele um valor padrão.
const reducer = (state = { login: false, email: "" }) => state;

const store = Redux.createStore(reducer);

// Reescrevendo o codigo até aqui:
const ESTADO_INICIAL = { login: false, email: "" };

const reducer = (state = ESTADO_INICIAL) => state;

const store = Redux.createStore(reducer);

// Para verificar o output quando acessamos o store com getState()
console.log(store.getState());


// Alterando os dados do estado inicial:
const fazerLogin = (email) => ({
  type: "LOGIN",
  email
});

const ESTADO_INICIAL = { login: false, email: "" };

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());

// { login: true, email: 'alguem@email.com' }
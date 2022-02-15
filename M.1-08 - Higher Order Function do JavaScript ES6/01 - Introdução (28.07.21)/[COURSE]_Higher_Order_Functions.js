// São funções que usam outras funções em suas operações, devendo aceitá-las como parâmetro e/ou retorná-las.

const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

// Note que o addEventListener é uma HOF
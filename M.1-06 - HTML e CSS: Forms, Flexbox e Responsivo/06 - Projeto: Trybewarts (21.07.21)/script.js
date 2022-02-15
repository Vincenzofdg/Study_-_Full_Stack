const form = document.getElementById('evaluation-form');
const botao = document.getElementById('btn-logar');
const botaoEnviar = document.getElementById('submit-btn');
const login = document.getElementById('login');
const senha = document.getElementById('senha');
const termos = document.querySelector('#agreement');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
// const nota = document.querySelectorAll('.nota');
// const familia = document.querySelectorAll('.familia');
const texto = document.getElementById('textarea');
const skills = document.querySelectorAll('.subject');

botao.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});

termos.addEventListener('click', () => {
  if (termos.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
});

// Requisito 20:
texto.addEventListener('input', () => {
  const num = 500 - document.getElementById('textarea').value.length;
  if (num >= 0) {
    document.getElementById('counter').innerText = num;
  }
});

// Função verifica qual radio está selecionado, logo após, já o guarda
const guardaRadioSelecionado = (nameEntreAspas, nomeChave) => {
  const array = document.getElementsByName(`${nameEntreAspas}`);
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].checked) {
      return `<p>${nomeChave}: ${array[index].value} </p>`;
    }
  }
};

// Função verifica qual checkbox está selecionado, logo após já o guarda
const guardaCheckboxSelecionado = (array, nomeChave) => {
  let guarda = `${nomeChave}:`;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].checked) {
      guarda += ` ${array[index].value}, `;
    }
  }
  return guarda;
};

// Requisito 21:
botaoEnviar.addEventListener('click', () => {
  const familia = guardaRadioSelecionado('family', 'Família'); // Guarda os dados na variavel, antes de resetar o forms.
  const nota = guardaRadioSelecionado('rate', 'Avaliação');
  form.innerHTML = '';
  form.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value}</p>`;
  form.innerHTML += `<p>Email: ${email.value}</p>`;
  form.innerHTML += `<p>Casa: ${casa.value}</p>`;
  form.innerHTML += familia;
  form.innerHTML += `<p>${guardaCheckboxSelecionado(skills, 'Matérias')}</p>`;
  form.innerHTML += nota;
  form.innerHTML += `<p>Observações: ${texto.value}</p>`;
});

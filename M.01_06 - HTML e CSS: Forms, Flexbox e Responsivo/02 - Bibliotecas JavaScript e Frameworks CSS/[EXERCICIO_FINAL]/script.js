const estados = document.getElementById('estados-id');

const opcao = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
for (let index = 0; index < opcao.length; index++) {
  let estado = document.createElement('option');
  estado.innerText = opcao[index];
  estado.id = 'estado'
  estados.appendChild(estado);
}

// PARTE 03:
const botaoEnviar = document.getElementById('btn-enviar');
botaoEnviar.addEventListener('click', function(event) {
  event.preventDefault();
})
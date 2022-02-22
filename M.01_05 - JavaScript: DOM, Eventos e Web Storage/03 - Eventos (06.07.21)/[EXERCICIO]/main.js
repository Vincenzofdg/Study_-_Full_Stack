const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 01 - Crie uma função que adicione a classe 'tech' ao elemento selecionado. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function mudandoDePosicao(event) {
    let techClass = document.querySelector('.tech');
    techClass.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = ''; // zerando o botão
}

firstDiv.addEventListener('click', mudandoDePosicao);
secondDiv.addEventListener('click', mudandoDePosicao);
thirdDiv.addEventListener('click', mudandoDePosicao);

// 02 - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';

input.addEventListener('input', digitar); // const input ja declarada no começo do exercicio

function digitar(event) {
    const texto = document.querySelector('.tech');
    texto.innerText = event.target.value;
}

// 03 - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;

myWebpage.addEventListener('dblclick', abrirJanela)

function abrirJanela() {
    window.location.replace('https://vincenzofdg.github.io/');
}

// 04 - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', alterea cor do mesmo;

myWebpage.addEventListener('mouseover', function(evento) {
    evento.target.style.color = 'red';
});
myWebpage.addEventListener('mouseleave', function(event) {
    event.target.style.color = 'unset'; // unset: volta ao que era
});
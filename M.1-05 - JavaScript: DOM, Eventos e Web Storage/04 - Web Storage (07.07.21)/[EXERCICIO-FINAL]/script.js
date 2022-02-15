const bodyLocation = document.querySelector('body');
const headerLocation = document.querySelector('.pag');
// Padrao:
const defautPag = 'gray'
const defautColor = 'black'

// Criando o botão e o input
function createInputBtn() {
    for (let index = 0; index < 5; index++) {
    let input = document.createElement('input');
    input.id = 'input';
    input.innerHTML = '';
    headerLocation.appendChild(input);
    }

    let btn1 = document.createElement('button');
    btn1.id = 'btn-1';
    btn1.innerHTML = 'Aplicar Mudanças'
    headerLocation.appendChild(btn1);

    let btn2 = document.createElement('button');
    btn2.id = 'btn-2';
    btn2.innerHTML = 'Reset'
    headerLocation.appendChild(btn2);

}
createInputBtn();

// botao de reset
const btnResert = document.getElementById('btn-2')
btnResert.addEventListener('click', function () {
    bodyLocation.style.backgroundColor = defautPag;
    bodyLocation.style.color = defautColor;
})

// Mudando a cor do fundo:
let btnLocation = document.getElementById('btn-1');
btnLocation.addEventListener("click", function () {
    let pagColor = input[0].value
    bodyLocation.style.backgroundColor = pagColor;
})

// Mudando a cor do texto:
btnLocation.addEventListener("click", function () {
    let textColor = input[1].value
    bodyLocation.style.color = textColor;
})

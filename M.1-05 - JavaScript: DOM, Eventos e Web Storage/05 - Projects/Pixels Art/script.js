//**************************VALORES INICIAIS***************************//
    // LOCAL DE DECLARAÇÃO DE CONST:
const pixelBoard = document.getElementById('pixel-board'); // Tabela de Pixel
const colorPalette = document.getElementById('color-palette'); // Tabela de Cores
const colorArray = document.querySelectorAll('.color'); // Array das cores
const clearBoard = document.getElementById('clear-board'); // Botao de Rersetar
    // CONFIURAÇÃO DAS CORES:
const black = document.getElementsByClassName('color')[0]
const green = document.getElementsByClassName('color')[1]
const red = document.getElementsByClassName('color')[2]
const purple = document.getElementsByClassName('color')[3]
black.style.backgroundColor = 'black';
green.style.backgroundColor = 'green';
red.style.backgroundColor = 'red';
purple.style.backgroundColor = 'purple';
    // COR INICIAL SELECIONADA (DEFAULT):
function defautMode() {
    let defautColor = document.getElementsByClassName('color')[0]
    defautColor.classList.add('selected');
}
defautMode();
    // PIXELBORD INICIAL (5 X 5):
function bord(base, hight) {
    for (let l = 0; l < hight; l++) {
        let lineHight = document.createElement('div');
        lineHight.className = 'pixel-linha';
        for (let c = 0; c < base; c++) {
            let lineBase = document.createElement('div');
            lineBase.className = 'pixel';
            lineHight.appendChild(lineBase);
        }
        pixelBoard.appendChild(lineHight);
    }
}
bord(5, 5);
//*********************************************************************//

// Pegando informação do input numero de 5 a 50:
function numberCatch() {
    let numberTyped = document.getElementById('board-size');
    let btnEnter = document.getElementById('generate-board');

    btnEnter.addEventListener('click', function () {

        // Removendo:
        while (pixelBoard.firstChild) {
            pixelBoard.removeChild(pixelBoard.firstChild);
        }

        // Adicionando: FUNCIONANDO
        if (numberTyped.value > 0 && numberTyped.value <= 7) {            
            for (let l = 0; l < numberTyped.value; l++) {
                let lineHight = document.createElement('div');
                lineHight.className = 'pixel-linha';
                for (let c = 0; c < numberTyped.value; c++) {
                    let lineBase = document.createElement('div');
                    lineBase.className = 'pixel';
                    lineHight.appendChild(lineBase);
                }
                pixelBoard.appendChild(lineHight);
            }            
        } else {
            return window.alert('Board inválido!');
        }
    })
}
numberCatch();


// SELECIONA UMA COR DA PALETA:
function selection() {
    colorPalette.addEventListener('click', function (event) {
        for (let r = 0; r < colorArray.length; r++) {
            let deletingClass = colorArray[r] // reset = document.getElementsByClassName('color')[r];
            deletingClass.classList.remove('selected');
        }
        event.target.classList.add('selected');
    })
}
selection()

// USANDO COR SELECIONADA PARA COLORIR:
function colorFill() {
    let selectedColor = document.querySelectorAll('.selected');
    if (selectedColor.length === 1) {
        pixelBoard.addEventListener('click', function (event) {
            let colorSelected = document.querySelector('.selected');
            let colorCSS = getComputedStyle(colorSelected).backgroundColor
            event.target.style.backgroundColor = colorCSS;
        })
    } else {
        return;
    }
}
colorFill()

// RESETANDO O QUE FOI COLORIDO (BOTÃO)
function reset() {
    let pixelArray = document.querySelectorAll('.pixel');// Array das pixel
    clearBoard.addEventListener('click', function () {
        for (let index = 0; index < pixelArray.length; index++) {
            pixelArray[index].style.backgroundColor = 'white';
        }
    })
}
reset()
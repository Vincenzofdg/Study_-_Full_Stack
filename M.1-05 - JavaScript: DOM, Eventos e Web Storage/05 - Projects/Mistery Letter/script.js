const textoDigitado = document.getElementById('carta-texto');
const btnGerarCarta = document.getElementById('criar-carta');
const corpoDaCarta = document.getElementById('carta-gerada');
 contadorDePalavra = document.getElementById('carta-contador')
//----------------------------------------------------------//

// GERANDO A CARTA A PARTIR DO INPUT:
btnGerarCarta.addEventListener('click', function () {
    while (corpoDaCarta.firstChild) {
        corpoDaCarta.removeChild(corpoDaCarta.firstChild)
    }
    if (textoDigitado.value.replace(/ /g, '') === '') {
        corpoDaCarta.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
        let texto = textoDigitado.value.split(' ');
        for (let index = 0; index < texto.length; index++) {
            let gerandoPalavras = document.createElement('span');
            gerandoPalavras.id = 'span';
            gerandoPalavras.innerText = texto[index];
            // SORTEANDO O STYLE
            let sorteioStyle = Math.ceil(Math.random() * 3);
            switch (true) {
                case (sorteioStyle === 1):
                    gerandoPalavras.classList.add('newspaper');
                    break;
                case (sorteioStyle === 2):
                    gerandoPalavras.classList.add('magazine1');
                    break;
                case (sorteioStyle === 3):
                    gerandoPalavras.classList.add('magazine2');
                    break;
            }
            // SORTEANDO A ROTAÇÃO
            let sorteioRota = Math.ceil(Math.random() * 2);
            switch (true) {
                case (sorteioRota === 1):
                    gerandoPalavras.classList.add('rotateleft');
                    break;
                case (sorteioRota === 2):
                    gerandoPalavras.classList.add('rotateright');
                    break;
            }
            // SORTEANDO A INCLINAÇÃO
            let sorteioAngulo = Math.ceil(Math.random() * 2);
            switch (true) {
                case (sorteioAngulo === 1):
                    gerandoPalavras.classList.add('skewleft');
                    break;
                case (sorteioAngulo === 2):
                    gerandoPalavras.classList.add('skewright');
                    break;
            }
            // SORTEANDO O TAMANHO
            let sorteioTamanho = Math.ceil(Math.random() * 3);
            switch (true) {
                case (sorteioTamanho === 1):
                    gerandoPalavras.classList.add('medium');
                    break;
                case (sorteioTamanho === 2):
                    gerandoPalavras.classList.add('big');
                    break;
                case (sorteioTamanho === 3):
                    gerandoPalavras.classList.add('reallybig');
                    break;
            }
            corpoDaCarta.appendChild(gerandoPalavras)
        }
    }
})

// CONTADOR DE PALAVRAS
btnGerarCarta.addEventListener('click',function() {
    let contadorDePalavra = document.getElementById('carta-contador')
    let texto = textoDigitado.value.split(' ');
    contadorDePalavra.innerText = texto.length;
})
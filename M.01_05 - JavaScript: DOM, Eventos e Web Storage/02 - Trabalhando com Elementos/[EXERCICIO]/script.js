// Parte I:
    // 01 - Acesse o elemento elementoOndeVoceEsta.
    const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

    // 02 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
    const pai = elementoOndeVoceEsta.parentNode;
    pai.style.color = 'red';

    // 03 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
    const primeiroFilhoDoFilho = documento.firstElementChild;
    primeiroFilhoDoFilho.innerhtml = 'Adicionando um texto qualquer';

    // 04 - Acesse o primeiroFilho a partir de pai.
    const primeiroFilho = pai.firstElementChild;

    // 05 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
    const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

    // 06 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
    const textElement = elementoOndeVoceEsta.nextSibling;

    // 07 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
    const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

    // 08 - Agora acesse o terceiroFilho a partir de pai.
    const terceiroFilho2 = pai.lastElementChild.previousElementSibling;


// Parte II:
    // 01 - Crie um irmão para elementoOndeVoceEsta.
    const pai = document.getElementById('pai');
    const irmaoElementoOndeVoceEsta = document.createElement('div');
    irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta'
    pai.appendChild(irmaoElementoOndeVoceEsta);

    // 02 - Crie um filho para elementoOndeVoceEsta.
    const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
    const filhoElementoOndeVoceEsta = document.createElement('div');
    filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
    elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

    // 03 - Crie um filho para primeiroFilhoDoFilho.
    const primeiroFilhoDoFilho = document.getElementById(primeiroFilhoDoFilho);
    filhoPrimeiroFilhoDoFilho = document.createElement('div');
    filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
    primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

    // 04 - A partir desse filho criado, acesse terceiroFilho.
    const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement/*primeiroFilhoDoFilho*/.parentElement/*elementoOndeVoceEsta*/.nextElementSibling;/*terceiroFilho*/


// Parte III:
    // 01 - Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
    const pai = document.querySelector('#pai');

    // poderia ser children?
    for (let index = 0; index < pai.childNodes.length; index++) {
        let filhoAtual = pai.childNodes[index]
        if (filhoAtual.id != 'elementoOndeVoceEsta') {
            filhoAtual.removeChild();
        }
    }

    const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();
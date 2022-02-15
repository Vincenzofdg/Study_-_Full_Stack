// Desafio 1
function compareTrue(valor1, valor2) {
    let absoluto;
    if (valor1 === true && valor2 === true) {
        absoluto = true;
    }
    else {
        absoluto = false;
    }
    return absoluto;
}

// Desafio 2
function calcArea(base, height) {
    let calculo = (base * height) / 2;
    return calculo;
}

// Desafio 3
function splitSentence(frase) {
    let palavra = frase.split(' ');
    return palavra;
}

// Desafio 4
function concatName(nomes) {
    let nome = [];
    nome.push(nomes[nomes.length - 1]); // Ultimo Item
    nome.push(nomes[0]);                // Primeiro item
    let nomeForm = nome.join(', ')      // Juntanto
    return nomeForm;
}

// Desafio 5
function footballPoints(wins, ties) {
    let winsPoint = tiesPoint = 0;
    for (let iw = 1; iw <= wins; iw++) {
        winsPoint += 3;
    }
    for (let it = 1; it <= ties; it++) {
        tiesPoint++;
    }
    let total = winsPoint + tiesPoint;
    return total;
}

// Desafio 6
function highestCount(sequencia) {
    // seu código aqui
    let numComp = sequencia[0];
    // Achar o Maior:
    for (let times = 0; times <= sequencia.length - 1; times++) {
        if (sequencia[times] >= numComp) {
            numComp = sequencia[times];
        }
    }
    // Qtas vezes tem o maior:
    let point = 0;
    for (let times = 0; times <= sequencia.length - 1; times++) {
        if (numComp === sequencia[times]) {
            point++
        }
    }
    return point;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let mouseCat1 = Math.abs(cat1 - mouse);
    let mouseCat2 = Math.abs(cat2 - mouse);
    if (mouseCat1 > mouseCat2) {
        return "cat2";
    }
    else if (mouseCat1 < mouseCat2) {
        return "cat1";
    }
    else {
        return "os gatos trombam e o rato foge";
    }
}

// Desafio 8
function fizzBuzz(numArray) {
    let resposta = [];
    for (let num = 0; num <= numArray.length - 1; num++) {
        if (numArray[num] % 3 == 0) {
            if (numArray[num] % 5 == 0) {
                resposta.push("fizzBuzz");
            }
            else {
                resposta.push("fizz");
            }
        }
        else if (numArray[num] % 5 == 0) {
            resposta.push("buzz");
        }
        else {
            resposta.push("bug!");
        }
    }
    return resposta;
}

// Desafio 9
function encode(frase) {
    return frase.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5')
}
function decode(frase) {
    return frase.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u')
}

// Desafio 10
function techList(technologies, name) {
    let array10 = [];
    if (technologies.length === 0) {
        return 'Vazio!';
    }
    else {
        for (let tech of technologies.sort()) {
            array10.push({ tech, name });
        }
    }
    return array10
}

// Desafio 11
function generatePhoneNumber(tel) {
    if (tel.length == 11) {
        for (let index1 = 0; index1 < 11; index1++) {
            let point = 0;
            for (index2 = 0; index2 < 11; index2++) {
                if (tel[index1] === tel[index2]) {
                    point++;
                    if (point === 3) {
                        return 'não é possível gerar um número de telefone com esses valores';
                    }
                }
            }
            if (tel[index1] < 0 || tel[index1] > 9) {
                return 'não é possível gerar um número de telefone com esses valores';
            }
        }
        return `(${tel[0]}${tel[1]}) ${tel[2]}${tel[3]}${tel[4]}${tel[5]}${tel[6]}-${tel[7]}${tel[8]}${tel[9]}${tel[10]}`;
    }
    else {
        return 'Array com tamanho incorreto.';
    }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    if (Math.abs(lineA + lineB > lineC) && Math.abs(lineB + lineC > lineA) && Math.abs(lineC + lineA > lineB)) {
        return true;
    }
    else {
        return false;
    }
}

// Desafio 13
function hydrate(frase) {
    let alcolismo = frase.match(/\d+/g);
    let consiencia = 0;
    for (let index = 0; index < alcolismo.length; index++) {
        consiencia += Number.parseInt(alcolismo[index]);
    }
    if (consiencia == 0 || consiencia > 1) {
        return `${consiencia} copos de água`;
    }
    else {
        return `${consiencia} copo de água`;
    }
}





// ***********************DESAFIO 13****************************

let frase = 'Meu nome é Vincenzo eu tenho 28 anos, 1,87 cm de altura e nasci dia 28 de agosto de 1995';
/*
Usando RegEx \d Metacharacter:
'/d' progura por digitos
'match()'
*/
console.log(frase.match(/\d/g));
console.log(frase.match(/\d+/g)); // g de global... para agrupar
console.log('------------------------------------------------------');
/*
Usando RegEx \D Metacharacter:

*/
console.log(frase.replace(/\D/g, '')); // g faz uma pesquisa global, sem o 'g' retorna a string normal 
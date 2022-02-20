const TOKEN_SIZE = 16;

// Numeros aleatorios com maximo e minimo
const randomNum = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

// 48 - 057  ==> Números
// 65 - 090  ==> Letras maiusculas
// 97 - 122  ==> Letras minusculas
const randomCases = () => {
    const myCase = randomNum(3, 1);

    if (myCase === 1) return String.fromCharCode(randomNum(57, 48));
    if (myCase === 2) return String.fromCharCode(randomNum(90, 65));
    return String.fromCharCode(randomNum(122, 97));
};

const token = () => {
    const array = Array.from({ length: TOKEN_SIZE });
    const key = array.map((_i) => randomCases());
    return key.join('');
};

module.exports = token;

// Biblioteca para gerar token mais facilmente
// https://www.npmjs.com/package/rand-token
const imc = (peso, altura) => {
    const resultado = peso / Math.pow(altura, 2);
    return resultado.toFixed(2);
};

const bmi = (peso, altura) => peso / Math.pow(altura, 2);

module.exports = { imc, bmi };

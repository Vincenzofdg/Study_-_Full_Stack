const { question } = require('readline-sync');

const game = () => {
    const palpite = question('Diga um número de 1 a 10 ... ');
    const sorteio = Math.floor(Math.random() * 10 + 1);
    palpite == sorteio ? console.log('Parabéns, número correto!') : console.log(`Opa, não foi dessa vez. O número era ${sorteio}`);
    const continuar = question('Deseja jogar novamente? (s/n) ');
    continuar === 's' ? game() : console.log('Obrigado por jogar!!');
}

game()

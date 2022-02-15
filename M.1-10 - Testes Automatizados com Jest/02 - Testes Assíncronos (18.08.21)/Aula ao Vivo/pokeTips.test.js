const pokeTips = require("./pokeTips");

// Validar as respostas da função pokeTips usando Jest
test('Retornar o melhor pokemon para começar o jogo', ()=>{
    const callback = (dado) => {
        expect(dado).toBe('Charmander é o melhor pokémon para começar.');
        done();
    }
    pokeTips(callback);
})
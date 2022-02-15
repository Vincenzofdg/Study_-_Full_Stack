// Exemplo gera um falso possitivo:

// Como o setTimeout() é uma função assincrona, gera-se um falso possitivo.
test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
});

// Como não geraria um falso possitivo:
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); // done() segura, não deixa passar até que a chamada nao devolve algo
    }
  }, 500);
});

// Outro Exemplo:
const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

asyncSum(5, 6, console.log)

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});
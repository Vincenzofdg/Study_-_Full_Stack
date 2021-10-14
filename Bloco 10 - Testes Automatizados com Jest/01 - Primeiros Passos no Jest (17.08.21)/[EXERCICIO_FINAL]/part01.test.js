const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, ob3, obj3 } = require('./part01');

describe('Exercicio 01', () => {
  it('Retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => { sum(4, '5') }).toThrowError();
  });
  it('mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});

describe('Exercicio 02', () => {
  it('([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Array passado por parâmetro não sofreu alterações', () => {
    expect(myRemove([1, 2, 3, 4], 9)).toEqual([1, 2, 3, 4]);
  });
  it('([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercicio 03', () => {
  it('([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('verifique se o array passado por parâmetro sofreu alterações', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 9)).toEqual([1, 2, 3, 4]);
  });
  it('([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercicio 04', () => {
  it('número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });
  it('número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it('parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('2')).toBeFalsy();
  });
});

describe('Exercicio 05', () => {
  it('obj1 é identido ao obj2', () => {
    expect(obj1 === obj2).toBeFalsy();
  });
  it('obj2 é identido ao obj3', () => {
    expect(obj2 !== obj3).toBeTruthy();
  });
  it('obj3 é identido ao obj1', () => {
    expect(obj2 === obj3).not.toBeTruthy();
  });
});

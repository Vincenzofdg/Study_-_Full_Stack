const { encode, decode, techList, hydrate, searchEmployee } = require('./part02');

describe('Exercicio 01', () => {
  it('Se encode e decode são funções', () => {
    expect(typeof decode).toBe('function');
    expect(typeof encode).toBe('function');
  });
  it('encode: a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  it('decode: 1, 2, 3, 4 e 5 são convertidas em a, e, i, o, u', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  it('Se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('i, u, e, o, a')).not.toBe('1, 2, 3, 4, 5');
    expect(decode('5, 4, 3, 2, 1')).not.toBe('a, e, i, o, u');
  });
  it('String que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro. ', () => {
    expect(encode('i, u, e, o, a')).toHaveLength(13);
    expect(decode('5, 4, 3, 2, 1')).toHaveLength(13);
  });
});

describe('Exercicio 02', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Exercicio 03', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

describe('Exercicio 04 (Bônus)', () => {
  it('searchEmployee é função?', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('ID buscar o firstName', () => {
    expect(searchEmployee('5569-4', 'firstName')).toEqual('George');
  });
  it('ID buscar o lastName', () => {
    expect(searchEmployee('9852-2-2', 'lastName')).toEqual('Cook');
  });
  it('ID buscar o specialities', () => {
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
  });
  it('ID inexistente', () => {
    expect(searchEmployee('451477-4', 'specialities')).toEqual('ID não identificado');
  });
});
// O método jest.fn(): É a forma mais simples de se realizar o mock

// Exemplo 01: Imagine que a função geradora de cor aleatória seja essa e esteja no arquivo service.js.
function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
module.exports = { randomRgbColor };

// Fazendo os testes (Sem o jest.fn()):
const service = require('./service');

test('#randomRgbColor', () => {
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

/* OCORERÁ UM ERRO !! 
Pois a propriedade toHaveBeenCalled , assim como outras que serão ensinadas a seguir, são exclusivas 
para funções simuladas. Ou seja: se você não simula uma função, a propriedade não funciona corretamente.*/

// Fazendo os testes (Com o jest.fn()):
const service = require('./service');

test('#randomRgbColor', () => {
  service.randomRgbColor = jest.fn();
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

// Realizando o mock de um valor predefinido:
const service = require('./service');

test("#randomRgbColor", () => {
  service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
});


//Testando quantas vezes a função foi chamada:
const service = require('./service');

test("#randomRgbColor", () => {
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe("first call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe("second call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe("default value");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
});
 

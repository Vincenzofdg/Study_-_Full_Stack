funcA = (a, b) => a + b; 
// Simulando uma função simples:
funcA = jest.fn().mockImplementation((a, b) => 5);
funcA = jest.fn((a, b) => 5);

myAsyncFunc = (a, b) => new Promise.resolve(a + b);
myResult = await myAsyncFuncç
// Simulando uma Promise:
myFunc = jest.fn().mockImplementation((a, b) => new Promise.resolve('pass'))
myFunc = jest.fn((a, b) => new Promise.resolve(a + b));
myFunc = jest.fn.mockResolvedValue(a + b);
myFunc.mockResolvedValue(a + b);


// Pra muita coisa poder funcionar você precisa colocar no seu src/setupTests.js essas linhas:
import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;
// Obs: Esta biblioteca serve para monitoramento de alterações no DOM da página.
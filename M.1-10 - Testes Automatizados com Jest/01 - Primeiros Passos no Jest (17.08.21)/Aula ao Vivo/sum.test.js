const sum = require('./sum');

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('adds 4 + 2 to equal 6', () => {
    expect(sum(4, 2)).toBe(6);
});

it('Compara letra A', ()=>{
    expect([1,2,3]).toEqual([1,2,3]);
})
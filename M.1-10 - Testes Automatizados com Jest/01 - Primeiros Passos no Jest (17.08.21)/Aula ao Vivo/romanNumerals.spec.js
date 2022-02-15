// Usando ASSERT => faz parte da estrutura basica do JavaScript, não precisa de instalação.
// const assert = require('assert');
// assert.equal(convertToRoman(1), 'I');
// assert.equal(convertToRoman(2), 'II');

//Usando JEST
const convertToRoman = require('./romanNumerals');

describe('Convert 1 to 5 to roman numbers', () => {
    test('Convert number 1 to I', () => {
        expect(convertToRoman(1)).toBe('I');
    });
    test('Convert number 2 to II', () => {
        expect(convertToRoman(2)).toBe('II');
    });
    test('Convert number 3 to III', () => {
        expect(convertToRoman(3)).toBe('III');
    });
    test('Convert number 4 to IV', () => {
        expect(convertToRoman(4)).toBe('IV');
    });
    test('Convert number 5 to V', () => {
        expect(convertToRoman(5)).toBe('V');
    });
})

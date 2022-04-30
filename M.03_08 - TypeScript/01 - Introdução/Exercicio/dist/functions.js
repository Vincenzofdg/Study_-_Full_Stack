"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
// Exercicio 01 - 05
function theError(unity) {
    throw new Error(`${unity} não é uma unidade válida.`);
}
;
function convert(v, b, nb, u) {
    if (!u.includes(b))
        theError(b);
    if (!u.includes(nb))
        theError(nb);
    return v * Math.pow(10, u.indexOf(nb) - u.indexOf(b));
}
exports.convert = convert;
;

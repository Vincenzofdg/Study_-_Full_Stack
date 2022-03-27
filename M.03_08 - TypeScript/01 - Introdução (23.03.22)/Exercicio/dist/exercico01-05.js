"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = exports.unity = void 0;
exports.unity = {
    length: ["km", "hm", "dam", "m", "dm", "cm", "mm"],
    mass: ["kg", "hg", "dag", "g", "dg", "cg", "mg"],
    capacity: ["kl", "hl", "dal", "l", "dl", "cl", "ml"],
    area: ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"],
    volume: ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"]
};
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npm install readline-sync
// npm install -D @types/readline-sync
const readline_sync_1 = __importDefault(require("readline-sync"));
const process_1 = require("process");
const exercicio01_05_1 = require("./exercicio01-05");
const exercicio06_1 = __importDefault(require("./exercicio06"));
const Exercicio09_10_1 = require("./Exercicio09-10");
console.log('\nExercicio 06:\n');
(0, exercicio06_1.default)();
function unityTable(param) {
    if (param === 'm')
        return exercicio01_05_1.unity.length;
    if (param === 'g')
        return exercicio01_05_1.unity.mass;
    if (param === 'l')
        return exercicio01_05_1.unity.capacity;
    if (param === 'm²')
        return exercicio01_05_1.unity.area;
    return exercicio01_05_1.unity.volume;
}
function exercicio7e8() {
    let bases = '';
    while (!bases.includes('/')) {
        bases = readline_sync_1.default.question("\nConverter (ex. km/m): ");
    }
    ;
    const value = readline_sync_1.default.questionFloat("\nValor a ser convertido:");
    const base = bases.split('/');
    const char = base[0].split('').pop();
    const converted = (0, exercicio01_05_1.convert)(value, base[0], base[1], unityTable(char));
    const msg = `${value} ${base[0]} convertido para ${base[1]} é ${converted} ${base[1]}`;
    console.log(msg);
}
;
const south = {
    [Exercicio09_10_1.Seasons.OUTONO]: [Exercicio09_10_1.Months.MARCO, Exercicio09_10_1.Months.ABRIL, Exercicio09_10_1.Months.MAIO, Exercicio09_10_1.Months.JUNHO],
    [Exercicio09_10_1.Seasons.INVERNO]: [Exercicio09_10_1.Months.JUNHO, Exercicio09_10_1.Months.JULHO, Exercicio09_10_1.Months.AGOSTO, Exercicio09_10_1.Months.SETEMBRO],
    [Exercicio09_10_1.Seasons.PRIMAVERA]: [Exercicio09_10_1.Months.SETEMBRO, Exercicio09_10_1.Months.OUTUBRO, Exercicio09_10_1.Months.NOVEMBRO, Exercicio09_10_1.Months.DEZEMBRO],
    [Exercicio09_10_1.Seasons.VERAO]: [Exercicio09_10_1.Months.DEZEMBRO, Exercicio09_10_1.Months.JANEIRO, Exercicio09_10_1.Months.FEVEREIRO, Exercicio09_10_1.Months.MARCO],
};
const north = {
    [Exercicio09_10_1.Seasons.PRIMAVERA]: south[Exercicio09_10_1.Seasons.OUTONO],
    [Exercicio09_10_1.Seasons.VERAO]: south[Exercicio09_10_1.Seasons.INVERNO],
    [Exercicio09_10_1.Seasons.OUTONO]: south[Exercicio09_10_1.Seasons.PRIMAVERA],
    [Exercicio09_10_1.Seasons.INVERNO]: south[Exercicio09_10_1.Seasons.VERAO],
};
const hemispheres = { "Norte": north, "Sul": south };
function exercicio11() {
    const arrayMounth = Object.values(Exercicio09_10_1.Months).map(item => item);
    const choose01 = readline_sync_1.default.keyInSelect(arrayMounth, "Escolha um mês do ano", { cancel: "SAIR" });
    const choose02 = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });
    if (choose01 === -1 || choose02 === -1)
        (0, process_1.exit)();
    const month = Object.values(Exercicio09_10_1.Months)[choose01];
    const hemisphere = Object.values(hemispheres)[choose02];
    const hemisphereKey = Object.keys(hemispheres)[choose02];
    Object.entries(hemisphere).map((entry) => {
        const seasons = entry[0];
        const months = entry[1];
        if (months.includes(month))
            console.log(`\nMês: ${month}\nHemisfério: ${hemisphereKey}\nEstações: ${seasons}\n`);
    });
}
;
exercicio7e8();
exercicio11();

// npm install readline-sync
// npm install -D @types/readline-sync
import readline from "readline-sync";
import { exit } from "process";
import { convert, unity as u } from "./exercicio01-05";
import Players from "./exercicio06";
import { Months, Seasons } from "./Exercicio09-10";

console.log('\nExercicio 06:\n');
Players();

function unityTable(param: any) {
  if (param === 'm') return u.length;
  if (param === 'g') return u.mass;
  if (param === 'l') return u.capacity;
  if (param === 'm²') return u.area;
  return u.volume
}

function exercicio7e8() {
  let bases: string = '';

  while (!bases.includes('/')) {
    bases = readline.question("\nConverter (ex. km/m): ");
  };
  
  const value = readline.questionFloat("\nValor a ser convertido:");
  const base = bases.split('/'); 
  const char = base[0].split('').pop();
  const converted = convert(value, base[0], base[1], unityTable(char));
  const msg = `${value} ${base[0]} convertido para ${base[1]} é ${converted} ${base[1]}`;
  console.log(msg)
};

const south = {
  [Seasons.OUTONO]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
  [Seasons.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
  [Seasons.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
  [Seasons.VERAO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
};

const north = {
  [Seasons.PRIMAVERA]: south[Seasons.OUTONO],
  [Seasons.VERAO]: south[Seasons.INVERNO],
  [Seasons.OUTONO]: south[Seasons.PRIMAVERA],
  [Seasons.INVERNO]: south[Seasons.VERAO],
};

const hemispheres = { "Norte": north, "Sul": south };

function exercicio11() {
  const arrayMounth = Object.values(Months).map(item => item);

  const choose01 = readline.keyInSelect(arrayMounth, "Escolha um mês do ano", { cancel: "SAIR" });
  const choose02 = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });

  if (choose01 === -1 || choose02 === -1) exit();
  
  const month = Object.values(Months)[choose01];
  const hemisphere = Object.values(hemispheres)[choose02]
  const hemisphereKey = Object.keys(hemispheres)[choose02];

  Object.entries(hemisphere).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    if (months.includes(month)) {
      console.log(`\nMês: ${month}\nHemisfério: ${hemisphereKey}\nEstações: ${seasons}\n`);
    }
  })
};

exercicio7e8();
exercicio11();

export const unity = {
  length: ["km", "hm", "dam", "m", "dm", "cm", "mm"],
  mass: ["kg", "hg", "dag", "g", "dg", "cg", "mg"],
  capacity: ["kl", "hl", "dal", "l", "dl", "cl", "ml"],
  area: ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"],
  volume: ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"]
} 

function theError(unity: string) {
    throw new Error(`${unity} não é uma unidade válida.`)
};

export function convert(v: number, b: string, nb: string, u: any ): number {
  if (!u.includes(b)) theError(b);
  if (!u.includes(nb)) theError(nb);
  return v * Math.pow(10, u.indexOf(nb) - u.indexOf(b));
};

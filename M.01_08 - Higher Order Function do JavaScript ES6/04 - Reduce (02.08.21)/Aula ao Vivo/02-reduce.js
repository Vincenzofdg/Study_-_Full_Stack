let cervejas = [
    { codigo: 123, fabricante: 'Urquell', descricao: 'Pilsner Urquell 500ML', valor: 20, estoque: 200 },
    { codigo: 176, fabricante: 'Schornstein', descricao: 'Schornstein Imperial 500ML', valor: 35.99, estoque: 150 },
    { codigo: 122, fabricante: 'Schornstein', descricao: 'Schornstein IPA 500ML', valor: 18.99, estoque: 300 },
    { codigo: 323, fabricante: 'Maniacs', descricao: 'Maniacs Craft Lager 355ML', valor: 19.99, estoque: 500 },
    { codigo: 183, fabricante: 'Leuven', descricao: 'Leuven Red ALE Knight 600ML', valor: 25.99, estoque: 100 },
    { codigo: 129, fabricante: 'Leuven', descricao: 'Leuven Witbier The Witch 500ML', valor: 19.99, estoque: 200 },
    { codigo: 451, fabricante: 'Lupulus', descricao: 'Lupulus Blanche 330ML', valor: 29.99, estoque: 0 },
]

let aumentos = [
    { fabricante: 'Urquell', aumentoPercentual: 1.10 },
    { fabricante: 'Schornstein', aumentoPercentual: 1.25 },
    { fabricante: 'Leuven', aumentoPercentual: 1.12 },
    { fabricante: 'Maniacs', aumentoPercentual: 1.05 },
    { fabricante: 'Lupulus', aumentoPercentual: 1.10 },
]

// Aplicar o aumento especificado para cada fabricante de cerveja

let novosValoresParaCervejas = cervejas.map((cerveja)=>{
    const fabricante = aumentos.find((aumento)=> aumento.fabricante === cerveja.fabricante);
    cerveja.valor *= fabricante.aumentoPercentual;
    return cerveja;

});

console.log(novosValoresParaCervejas);

let vetorNomes = ['Joicy', 'Gisele', 'Atanes', 'Josi','Ellen', 'Vidi', 'Marco'];

vetorNomes.sort();

console.log(vetorNomes);

vetorNomes.reverse();

console.log(vetorNomes);

let produtos = [
    {id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
    {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
    {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"},
    {id: 6, descricao: "Panela", categoria: "Utensilio"},
    {id: 7, descricao: "Jarra", categoria: "Utensilio"},
]

produtos.sort((produtoA, produtoB)=>{
    if(produtoA.descricao > produtoB.descricao){
        return 1;
    }
    if(produtoB.descricao > produtoA.descricao){
        return -1;
    }
    return 0;
    // return produtoA.descricao > produtoB.descricao ? 1 : (produtoB.descricao > produtoA.descricao ? -1 : 0)
})

console.log(produtos);

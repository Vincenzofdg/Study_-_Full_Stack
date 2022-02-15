let cervejas = [
    { codigo: 123, fabricante: 'Urquell', descricao: 'Pilsner Urquell 500ML', valor: 20, estoque: 200 },
    { codigo: 176, fabricante: 'Schornstein', descricao: 'Schornstein Imperial 500ML', valor: 35.99, estoque: 150 },
    { codigo: 122, fabricante: 'Schornstein', descricao: 'Schornstein IPA 500ML', valor: 18.99, estoque: 300 },
    { codigo: 323, fabricante: 'Maniacs', descricao: 'Maniacs Craft Lager 355ML', valor: 19.99, estoque: 500 },
    { codigo: 183, fabricante: 'Leuven', descricao: 'Leuven Red ALE Knight 600ML', valor: 25.99, estoque: 100 },
    { codigo: 129, fabricante: 'Leuven', descricao: 'Leuven Witbier The Witch 500ML', valor: 19.99, estoque: 200 },
    { codigo: 451, fabricante: 'Lupulus', descricao: 'Lupulus Blanche 330ML', valor: 29.99, estoque: 0 },
]

let pedidos = [
    {id: 345, codigoCerveja: 122, quantidade: 30},
    {id: 765, codigoCerveja: 176, quantidade: 50},
    {id: 234, codigoCerveja: 183, quantidade: 70},
    {id: 980, codigoCerveja: 451, quantidade: 20},
    {id: 211, codigoCerveja: 323, quantidade: 100},
]

let entregas = [
    { placaVeiculo: 'XPL0912', pedidoId:345},
    { placaVeiculo: 'TRP1242', pedidoId:765},
    { placaVeiculo: 'FOL1122', pedidoId:234},
    { placaVeiculo: 'DQE0459', pedidoId:980},
    { placaVeiculo: 'RTP0909', pedidoId:211},
]

// Criar um array de objetos com as informaçoes do id do pedido, descriçao da cerveja, 
// qtd de cervejas do pedido e placa do veiculo que vai fazer a entrega e valor total do pedido
let entregasResumo = pedidos.map((pedido)=>{
    const dadosCerveja = cervejas.find((cerveja)=> cerveja.codigo === pedido.codigoCerveja);
    const entrega = entregas.find((entrega)=>entrega.pedidoId === pedido.id);
    return {pedido: pedido.id, cerveja: dadosCerveja.descricao, qtd: pedido.quantidade, veiculo: entrega.placaVeiculo};
});

console.log(entregasResumo);

function mostraVeiculoMarca(veiculo, marca){
    console.log(`O veiculo ${veiculo} é da marca ${marca}`);
}

mostraVeiculoMarca('Fusca', 'Volks');
mostraVeiculoMarca('Corsa', 'GM');

const mostraVeiculo = mostraVeiculoMarca;

mostraVeiculo('Chevette', 'GM');
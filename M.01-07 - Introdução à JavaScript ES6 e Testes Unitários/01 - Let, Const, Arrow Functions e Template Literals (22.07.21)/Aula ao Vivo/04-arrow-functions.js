// function boasVindas(nome){
//     return 'Seja bem vinda(o), ' + nome;
// }

let boasVindas = nome => 'Seja bem vinda(o), ' + nome;

console.log(boasVindas('Atanes'));

const habilitado = (nome, idade) => {
    let retorno;
    if(idade >= 18){
        retorno = nome + ' você está habilitado(a) a dirigir!'
    } else {
        retorno = nome + ' você ainda não pode dirigir!'
    }

    return retorno;
}

console.log(habilitado('Adriano', 21));


function boasVindas(){
    return 'Seja muito bem vindo ao nosso site!';
}

const boasVindas = () => 'Seja muito bem vindo ao nosso site!';







// const boasVindas = nome => 'Seja bem vinda(o), ' + nome;
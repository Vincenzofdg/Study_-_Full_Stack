const person = {
    nome: 'Márcia',
    sobreNome: 'Jesus',
    greet: (outraFuncao) => {
        return outraFuncao(person);
    }
};


const greetingPeople = (person) => {
    return `Olá ${person.nome} ${person.sobreNome}, tudo bem com você?`;
}

const formalGreeting = (person) => {
    return `Oi ${person.nome}, tudo bem!?`;
}

const badMoodGreeting = () => {
    return 'Oi!';
}

const loveGreeting = (person) => {
    return `Oi ${person.nome} meu amor, tudo bem com você? Estava com saudades!!`;
}

console.table(person);

console.log(person.greet(formalGreeting));
console.log(person.name);

console.log(person.greet(person.nome === 'Márcia' ? loveGreeting : badMoodGreeting));

console.log(formalGreeting(person));
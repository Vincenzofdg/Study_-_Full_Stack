// Acessar os valores de um objeto, mais simples e com menos declarações.

console.log('|-----------Exemplo 01-----------|');

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// Nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito.
const { name, seller } = product;
console.log(name); 
console.log(seller);


console.log('|-----------Exemplo 02-----------|');

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nome, b: classAssigned, c: subject } = student;

console.log(nome);
console.log(classAssigned);
console.log(subject);


console.log('|-----------Exemplo 03-----------|');

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product);
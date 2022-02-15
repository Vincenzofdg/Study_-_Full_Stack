const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);

// Retorna um array dendo de outro array.
console.log(pairKeyValue);

// Retorna um elemento do array "primario".
console.log(pairKeyValue[3]);

// Retornando um elemento dentro de outro elemendo de um arrays.
for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};
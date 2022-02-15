// Callback é basicamente uma função passada por parâmetro para outra função.

// Exemplo:
const myExpenses = [{gym: 99,}, {ifood: 200,}, {phone: 60,}, {internet: 100,},];
const myIncome = 1000;

const monthlyBudget = (myIncome, myExpenses, callback) => {

  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};

// A função CallBack:
const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);


// Aula do Course:
const operacao = (n1, n2, callback) => console.log(`Números: ${n1}, ${n2} | Resultado: ${callback(n1, n2)}`);

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;
const exponenciar = (num1, num2) => num1 ** num2;

operacao(2, 3, exponenciar);
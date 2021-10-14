const { Console } = require("console");

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

/*01 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  - Note que o parâmetro da função já está sendo passado na chamada da função.*/
const customerInfo = (order) => {
  console.log(`Olá ${order.name}.\nEntrega para ${order.name}, Telefone ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`)
}
customerInfo(order);

/*02 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  - Modifique o nome da pessoa compradora.
  - Modifique o valor total da compra para R$ 50,00.*/
const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const pizza = Object.keys(order.order.pizza)
  console.log(`Olá ${order.name}.\nO total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00`)
}
orderModifier(order);
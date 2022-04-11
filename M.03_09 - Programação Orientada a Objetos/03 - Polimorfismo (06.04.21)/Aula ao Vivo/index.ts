import Margerita from './margerita';
import Pepperoni from './pepperoni';
import Pizza, { PizzaSize } from './pizza';
import SaleOff from './SaleOff';

const preparePizza = (pizza: Pizza) => {
  pizza.makePizza();
  pizza.printPrice();
};

console.log('\n\n');
const pepperoni = new Pepperoni(PizzaSize.EXTRA_LARGE);
preparePizza(pepperoni);

const margerita = new Margerita(PizzaSize.EXTRA_LARGE);
preparePizza(margerita);

console.log('Pizzas feitas até o momento: ', Pizza.getCountOrder);


const pepperoniPromocao = new SaleOff(pepperoni)
pepperoniPromocao.pizza.extra

const margeritaPromocao = new SaleOff(margerita)
margeritaPromocao.pizza


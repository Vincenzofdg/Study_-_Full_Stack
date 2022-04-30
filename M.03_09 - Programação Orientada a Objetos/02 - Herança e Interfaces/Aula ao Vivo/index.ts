import Hobbit from './hobbit';
import Player from './player';
import Race from './race';

// const player = new Race('Pedro');
// console.log(`${player}`);

const hobbit = new Hobbit('Frodo', 1, 10);
const player = new Player<Race>(100, 10, hobbit);

player.pickUpItem({
    name: 'machete',
    weight: 2,
})

player.pickUpItem({
    name: 'large stone',
    weight: 9,
})

console.log(player);
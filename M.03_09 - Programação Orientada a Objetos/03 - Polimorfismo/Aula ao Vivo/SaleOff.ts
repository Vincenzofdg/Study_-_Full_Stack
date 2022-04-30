import Margerita from './margerita';
import Pepperoni from './pepperoni';
import Pizza from './pizza';

interface HasExtra {
  extra: {
    border?: boolean;
    desert?: boolean;
  };
}

export default class SaleOff<P extends HasExtra> {
  constructor(public pizza: P) {}
}

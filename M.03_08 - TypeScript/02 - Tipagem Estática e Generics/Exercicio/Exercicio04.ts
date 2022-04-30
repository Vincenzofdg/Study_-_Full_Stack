import { Pizza, IPizza } from './Exercicio03'

type Common = "Calabresa" | "Frango" | "Pepperoni";
type Vegetarian = "Marguerita" | "Palmito" | "Cogumelos";
type Sugar = "Nutela" | "Goiabada com Queijo" | "Marshmallow";

interface PizzaCommon extends IPizza {
  _flavor: Common
};

interface PizzaVegetarian extends IPizza {
  _flavor: Vegetarian
};

interface PizzaSugar extends IPizza {
  _flavor: Sugar,
  _slices: 4
};
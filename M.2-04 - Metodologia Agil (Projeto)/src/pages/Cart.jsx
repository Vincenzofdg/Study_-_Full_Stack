import React from 'react';
// import addToCart from '../services/localstorage';
import '../services/localstorage';
import ProducInCart from '../components/ProductInCart';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.getItems = this.getItems.bind(this);
    this.state = {
      items: '',
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    const items = localStorage.getObj('products');
    this.setState({
      items,
    });
  }

  render() {
    const { items } = this.state;
    return (
      <main>
        { items
          ? (Object.entries(items)
            .map((item) => <ProducInCart key={ item[0] } item={ item[1].product.id } />))
          : (
            <h1 data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </h1>)}
      </main>
    );
  }
}

export default Cart;

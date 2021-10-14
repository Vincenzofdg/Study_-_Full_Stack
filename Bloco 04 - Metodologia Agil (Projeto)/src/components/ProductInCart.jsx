import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addQuantity } from '../services/localstorage';
import BtnAddQuantity from './BtnAddQuantity';

export class ProductInCart extends Component {
  constructor(props) {
    super(props);
    this.getCartItem = this.getCartItem.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.state = {
      product: { id: 'id' },
      quantity: 0,
    };
  }

  componentDidMount() {
    this.getCartItem();
  }

  getCartItem() {
    const { item } = this.props;
    const cartProducts = localStorage.getObj('products');
    const product = Object.entries(cartProducts).find((prdct) => prdct[0] === item);
    this.setState({
      product: product[1].product,
      quantity: product[1].quantity,
    });
  }

  addQuantity({ target: { name, id } }) {
    if (name === 'sum') addQuantity(id, 'sum');
    if (name === 'sub') addQuantity(id, 'sub');
    this.getCartItem();
  }

  render() {
    const { product, quantity } = this.state;
    const totalPrice = Math.round(product.price * quantity * 100) / 100;

    return (
      <>
        <h1 data-testid="shopping-cart-product-name">{ product.title }</h1>
        <p>{ product.price }</p>
        <p data-testid="shopping-cart-product-quantity">{ `${String(quantity)}` }</p>
        <p>{`Preço total: ${totalPrice}`}</p>
        <BtnAddQuantity
          id={ product.id }
          name="sub"
          onClick={ this.addQuantity }
          testid="product-decrease-quantity"
          operation="-"
        />

        <BtnAddQuantity
          id={ product.id }
          name="sum"
          onClick={ this.addQuantity }
          testid="product-increase-quantity"
          operation="+"
        />
      </>
    );
  }
}

ProductInCart.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ProductInCart;

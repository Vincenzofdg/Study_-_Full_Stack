import React from 'react';
import PropTypes from 'prop-types';
import { addToCart } from '../services/localstorage';

class BtnAddCart extends React.Component {
  render() {
    const {
      title,
      price,
      thumbnail,
      id,
      source,
      onClick,
    } = this.props;
    return (
      <button
        type="button"
        onClick={ () => {
          addToCart({ title, price, thumbnail, id });
          onClick();
        } }
        data-testid={ `${source}-add-to-cart` }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

BtnAddCart.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string,
  source: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

BtnAddCart.defaultProps = {
  id: '',
};

export default BtnAddCart;

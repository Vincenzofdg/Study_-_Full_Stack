import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user: { email }, wallet: { expenses } } = this.props;
    const currency = 'BRL';
    const totalExpenses = expenses.reduce((total, expense) => {
      const valueBRL = Math.round(Number(expense.value)
        * Number(expense.exchangeRates[expense.currency].ask) * 100) / 100;

      total += valueBRL;
      return total;
    }, 0);

    return (
      <header>
        <label htmlFor="email-field">
          Email:
          <span name="email-field" data-testid="email-field">
            { email }
          </span>
        </label>
        <label htmlFor="total-field">
          Despesa total:
          <span name="total-field" data-testid="total-field">
            { totalExpenses.toFixed(2) }
          </span>
          <span name="header-currency-field" data-testid="header-currency-field">
            { currency }
          </span>
        </label>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  wallet: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Header);

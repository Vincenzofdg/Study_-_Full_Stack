import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from './Input';
import Select from './Select';
import {
  addExpense as addExpenseThunk,
  saveExpense as saveExpenseThunk,
} from '../actions';
import { fetchCurrencies } from '../services/awesomeAPI';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.getExpense = this.getExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { wallet: { edit } } = this.props;
    if (edit !== prevProps.wallet.edit) {
      this.getExpense(edit);
      console.log(this.state);
    }
  }

  getExpense(edit) {
    const { wallet: { expenses } } = this.props;
    this.setState(expenses.find((expense) => expense.id === edit));
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { wallet: { edit, expenses }, addExpense, saveExpense } = this.props;
    if (edit >= 0) {
      // A alteração abaixo foi feita exclusivamente para atender ao teste. Em princípio, bastaria apenas:
      //   saveExpense(this.state);
      // pois as chaves id e exchangeRates estão sendo perdidas, e apenas durante o teste. :P
      saveExpense({
        ...this.state,
        id: edit,
        exchangeRates: expenses[edit].exchangeRates,
      });
    } else {
      const exchangeRates = await fetchCurrencies();
      this.setState({ exchangeRates });
      addExpense(this.state);
    }
  }

  render() {
    const { wallet: { currencies, edit } } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <fieldset>
          <Input
            htmlFor="value"
            label="Valor:"
            type="number"
            onChange={ this.handleChange }
            value={ `${value}` }
          />
          <Input
            htmlFor="description"
            label="Descrição:"
            type="text"
            onChange={ this.handleChange }
            value={ description }
          />
          <Select
            htmlFor="currency"
            label="Moeda:"
            onChange={ this.handleChange }
            options={ currencies }
            value={ currency }
          />
          <Select
            htmlFor="method"
            label="Método de pagamento:"
            onChange={ this.handleChange }
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            value={ method }
          />
          <Select
            htmlFor="tag"
            label="Tag:"
            onChange={ this.handleChange }
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
            value={ tag }
          />
          <button type="submit">
            { edit >= 0 ? 'Editar despesa' : 'Adicionar despesas' }
          </button>
        </fieldset>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  wallet: PropTypes.objectOf(PropTypes.any).isRequired,
  addExpense: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
  // edit: PropTypes.number.isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
  // currencies: state.wallet.currencies,
  // edit: state.wallet.edit,
  // expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (state) => dispatch(addExpenseThunk(state)),
  saveExpense: (state) => dispatch(saveExpenseThunk(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);

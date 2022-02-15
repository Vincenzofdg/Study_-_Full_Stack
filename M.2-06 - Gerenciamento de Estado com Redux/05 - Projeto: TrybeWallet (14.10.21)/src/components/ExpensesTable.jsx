import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense as deleteExpense, editExpense as changeExpense } from '../actions';

class ExpensesTable extends React.Component {
  editButton(id) {
    const { editExpense } = this.props;
    return (
      <button type="button" data-testid="edit-btn" onClick={ () => editExpense(id) }>
        <span role="img" aria-label="Editar">&#x270D;</span>
      </button>
    );
  }

  deleteButton(id) {
    const { removeExpense } = this.props;
    return (
      <button type="button" data-testid="delete-btn" onClick={ () => removeExpense(id) }>
        <span role="img" aria-label="Excluir">&#x274C;</span>
      </button>
    );
  }

  render() {
    const { wallet: { expenses } } = this.props;
    console.log(expenses);
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map(
            ({ id, value, description, currency, method, tag, exchangeRates }) => (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>{ (Number(exchangeRates[currency].ask)).toFixed(2) }</td>
                <td>
                  { (Number(value) * Number(exchangeRates[currency].ask)).toFixed(2) }
                </td>
                <td>Real</td>
                <td>
                  { this.editButton(id) }
                  { this.deleteButton(id) }
                </td>
              </tr>
            ),
          ) }
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  wallet: PropTypes.objectOf(PropTypes.any).isRequired,
  removeExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(deleteExpense(id)),
  editExpense: (id) => dispatch(changeExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

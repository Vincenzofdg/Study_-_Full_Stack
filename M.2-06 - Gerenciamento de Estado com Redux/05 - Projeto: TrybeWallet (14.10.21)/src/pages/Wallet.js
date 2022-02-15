import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { fetchCurrenciesThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;

    fetchCurrencies();
  }

  render() {
    const { loading, expenses } = this.props;

    return (
      <>
        <Header />
        { loading ? <Loading /> : <ExpensesForm /> }
        { expenses.length > 0 && <ExpensesTable /> }
      </>
    );
  }
}

Wallet.defaultProps = {
  loading: false,
};

Wallet.propTypes = {
  loading: PropTypes.bool,
  fetchCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => (
  {
    loading: state.wallet.loading,
    expenses: state.wallet.expenses,
  });

const mapDispatchToProps = (dispatch) => (
  {
    fetchCurrencies: () => dispatch(fetchCurrenciesThunk()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

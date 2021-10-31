// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  IN_PROGRESS,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  SAVE_EXPENSE,
} from '../actions';

const initialWalletState = {
  currencies: [],
  expenses: [],
  loading: true,
  edit: -1,
};

const wallet = (state = initialWalletState, { type, payload }) => {
  switch (type) {
  case IN_PROGRESS:
    return { ...state, loading: true };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: payload, loading: false };
  case GET_CURRENCIES_ERROR:
    return { ...state, error: payload };
  case ADD_EXPENSE:
    payload.id = state.expenses.length;
    return { ...state, expenses: [...state.expenses, payload] };
  case REMOVE_EXPENSE:
    state.expenses = state.expenses
      .filter((expense) => expense.id !== payload)
      .map((expense) => ({ id: state.expenses.indexOf(expense), ...expense }));
    return { ...state };
  case EDIT_EXPENSE:
    return { ...state, edit: payload };
  case SAVE_EXPENSE:
    state.expenses[payload.id] = payload;
    return { ...state, edit: -1 };
  default:
    return state;
  }
};

export default wallet;

// Coloque aqui suas actions
import { fetchCurrencies } from '../services/awesomeAPI';

export const SET_USER_VALUE = 'SET_USER_VALUE';
export const IN_PROGRESS = 'IN_PROGRESS';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const setUserValue = (payload) => ({
  type: SET_USER_VALUE,
  payload,
});

export const inProgress = () => ({
  type: IN_PROGRESS,
});

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesError = (payload) => ({
  type: GET_CURRENCIES_ERROR,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const removeExpense = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});

export const editExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export const saveExpense = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});

export const fetchCurrenciesThunk = () => async (dispatch) => {
  dispatch(inProgress()); // remover devido a reclamação do lint
  try {
    const currencies = await fetchCurrencies();
    const payload = Object.keys(currencies).filter((currency) => currency !== 'USDT');
    dispatch(getCurrenciesSuccess(payload));
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};

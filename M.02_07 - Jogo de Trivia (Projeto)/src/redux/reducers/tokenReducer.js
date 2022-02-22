import { API_ERROR, API_SUCCESS } from '../actions';

const INITIAL_STATE = {
  success: '',
  error: '',
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_SUCCESS:
    return {
      ...state,
      success: action.payload.success,
    };
  case API_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
};

export default tokenReducer;

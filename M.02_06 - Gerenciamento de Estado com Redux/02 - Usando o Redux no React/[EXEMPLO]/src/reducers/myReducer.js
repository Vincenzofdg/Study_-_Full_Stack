import { CHANGE_THEME } from '../actions/changeTheme';

const INITIAL_STATE = {
  theme: 'light',
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_THEME:
    return { ...state, theme: action.payload };
  default:
    return state;
  }
}

export default myReducer;

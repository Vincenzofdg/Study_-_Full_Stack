import { CHANGE } from "./actionCreators";

const INICIAL = { color: 'red' };

function changeReducer(state = INICIAL, action) {
  switch (action.type) {
    case CHANGE:
      return { 
        ...state,
        color: action.payload
      };
    default:
      return state;
  }
}

export default changeReducer;
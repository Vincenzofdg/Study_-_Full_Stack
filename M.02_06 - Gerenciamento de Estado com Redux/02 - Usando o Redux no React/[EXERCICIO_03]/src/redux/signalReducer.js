import { CHANGE_SIGNAL } from "./actionCreators";

const INICIAL = { color: 'red' };

function signalReducer(state = INICIAL, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { 
        ...state,
        color: action.payload
      };
    default:
      return state;
  }
}

export default signalReducer;
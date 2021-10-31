import { SET_QUESTION, SET_CATEGORY, SET_CONFIG } from '../actions';

const INITIAL_STATE = {
  questions: {},
  category: {},
  config: {},
};

const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_QUESTION:
    return {
      ...state,
      questions: action.payload.questions,
    };
  case SET_CATEGORY:
    return {
      ...state,
      category: action.payload.category,
    };
  case SET_CONFIG:
    return {
      ...state,
      config: action.payload.config,
    };
  default:
    return state;
  }
};

export default questionReducer;

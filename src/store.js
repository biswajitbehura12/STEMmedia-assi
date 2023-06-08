// store.js
import { createStore } from 'redux';

// Define initial state
const initialState = {
  value: '',
};

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;

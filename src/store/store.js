// store.js

import { createStore } from "redux";

// Define initial state
const initialState = {
  list: [],
};

// Define reducer function
function listReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
}

// Create store with reducer
const store = createStore(listReducer);

export default store;

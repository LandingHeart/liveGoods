import { ADD_TO_CART, FETCH_CART, REMOVE_FROM_CART } from "./cartActionTypes";

const initialState = {
  items: [],
  item: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CART:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        item: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}

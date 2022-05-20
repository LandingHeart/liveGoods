import { FETCH_PRODUCT, NEW_PRODUCT } from "./productActionTypes"

const initialState = {
  items: [],
  item: {},
}
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        items: action.payload,
      }
    case NEW_PRODUCT:
      return {
        ...state,
        item: action.payload,
      }
    default:
      return state
  }
}

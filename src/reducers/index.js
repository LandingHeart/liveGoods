import { combineReducers } from "redux"
import productReducer from "./productReducer/productReducer"

export default combineReducers({
  products: productReducer,
})

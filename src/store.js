import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer/productReducer";
import cartReducer from "./reducers/cartReducer/cartReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;

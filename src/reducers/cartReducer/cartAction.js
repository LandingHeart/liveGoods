import { FETCH_PRODUCT, NEW_PRODUCT } from "./productActionTypes";
import { db } from "../../firebase";

export const fetchProduct = () => (dispatch) => {
  db.ref("/products").once("value", (snapshot) => {
    // console.log(Object.values(snapshot.val()));
    dispatch({ type: FETCH_PRODUCT, payload: Object.values(snapshot.val()) });
  });
};

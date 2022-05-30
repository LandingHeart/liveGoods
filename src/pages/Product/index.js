import React from "react";
import { useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./index.less";
export default function Product() {
  const { state } = useLocation();
  const addToCart = () => {};
  return (
    <section
      className="product-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <img src={state.productImgUrl} />
      <div className="product-desc">
        <p>{state.productDescription}</p>
      </div>

      <Button variant="contained" onClick={() => addToCart()}>
        Add to cart
      </Button>
    </section>
  );
}

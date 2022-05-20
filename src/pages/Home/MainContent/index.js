import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../../components/Card";
import { fetchProduct } from "../../../reducers/productReducer/productAction";
import "./style.less";
function MainContent(props) {
  const { products } = props;

  useEffect(() => {
    props.fetchData();
    console.log(products);
    return () => {};
  }, []);
  const renderItem = products.map((item, index) => (
    <Card key={index} item={item} />
  ));

  return (
    <section
      style={{ marginBottom: "200px" }}
      className="main-content-container"
    >
      {renderItem}
    </section>
  );
}

const mapDispatch = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchProduct()),
  };
};
const mapState = (state) => {
  return {
    products: state.products.items,
  };
};

export default connect(mapState, mapDispatch)(MainContent);

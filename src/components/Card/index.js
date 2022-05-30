import React from "react";
import "./style.less";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const { item } = props;
  const navigate = useNavigate();
  return (
    <div id="card">
      <img
        onClick={() => navigate("/product", { replace: true, state: item })}
        src={item.productImgUrl}
        style={{
          width: "100%",
          height: "70%",
          objectFit: "cover",
          overflow: "hidden",
        }}
      />
    </div>
  );
}

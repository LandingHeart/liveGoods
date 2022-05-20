import React from "react";

export default function Card(props) {
  const { item } = props;
  return (
    <div style={{ backgroundColor: "#f3f3f3", height: "300px" }}>
      <img
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

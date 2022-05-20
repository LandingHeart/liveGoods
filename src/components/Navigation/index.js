import "./style.less";

import React from "react";
import HorizontalNav from "../HorizontalNav";
import HeaderNav from "../HeaderNav";
export default function Navigation() {
  return (
    <div className="top-nav-container">
      <HeaderNav />
      <HorizontalNav />
    </div>
  );
}

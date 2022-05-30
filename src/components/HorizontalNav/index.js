import React from "react";
import "./style.less";
export default function HorizontalNav() {
  return (
    <nav className="scroll-nav-menu">
      <a href="#home">Popular</a>
      <a href="#news">News</a>
      <a href="#contact">TextBooks</a>
      <a href="#about">Sales</a>
    </nav>
  );
}

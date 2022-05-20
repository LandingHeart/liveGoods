import React from "react";
import "./style.less";

import { NavLink } from "react-router-dom";
import { Grid, Home, ShoppingCart, Menu } from "react-feather";
export default function BottomNav() {
  return (
    <div className="nav-footer">
      <ul className="clear-fix">
        <li>
          <NavLink to="/">
            <i>
              <Home className="icon" size={28} />
            </i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/category">
            <i>
              <Grid size={28} color="black" />
            </i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <i>
              <ShoppingCart size={28} color="black" />
            </i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <i>
              <Menu size={28} color="black" />
            </i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

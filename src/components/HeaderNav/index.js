import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.less";
export default function HeaderNav() {
  return (
    <div className="input-icon-wrap">
      <span className="input-icon">
        <FontAwesomeIcon className="input-box-icon" icon={faSearch} />
      </span>
      <input type="search" placeholder="search" className="input-with-icon" />
    </div>
  );
}

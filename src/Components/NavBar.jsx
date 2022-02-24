import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "../CSS/NavBar.css";

function NavBar() {
  let [navSearch, setNavSearch] = useState("");
  return (
    <div className="NavBar">
      <div className="title_NavLink">
        <h4>Homejam</h4>
      </div>
      <ul className="links_NavBar">
        <li className="search_li_NavBar">
          <BsSearch className="icon_NavBar" />
          <input
            type="text"
            value={navSearch}
            onChange={(e) => setNavSearch(e.target.value)}
            placeholder="Search"
          />
        </li>
        <li>
          <NavLink to="/">Help</NavLink>
        </li>
        <li>
          <NavLink to="/">Account</NavLink>
        </li>
        <li>
          <FiShoppingBag className="icon_NavBar" />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

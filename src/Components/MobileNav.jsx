import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import "../CSS/NavBar.css";

function MobileNav() {
  return (
    <div className="MobileNav">
      <div className="title_NavLink">
        <h4>Homejam</h4>
      </div>
      <ul className="links_NavBar">
        <li>
          <BsSearch className="icon_NavBar" />
        </li>
        <li>
          <FiShoppingBag className="icon_NavBar" />
        </li>
        <li>
          <GiHamburgerMenu className="HambergIcon_MobileNav" />
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;

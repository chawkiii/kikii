import React from "react";
import "../styles/nav.css";

function Nav() {
  return (
    <nav>
      <div className="nav_logo">logo</div>
      <ul className="nav_list">
        <li className="nav_element">
          <a>Projects</a>
        </li>
        <li className="nav_element">
          <a>Partenariats</a>
        </li>
        <li className="nav_element">
          <a>About</a>
        </li>
        <li className="nav_element">
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

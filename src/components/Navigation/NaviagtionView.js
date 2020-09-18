import React from "react";
import logo from "../../assets/logo.png";

function NaviagtionView() {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__list">
          <a
            className="nav__link"
            href="http://www.matthave.pl/"
            target="_blank"
          >
            <img className="nav__logo" src={logo} alt="logo icon" />
          </a>
          <a
            className="nav__link"
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            target="_blank"
          >
            WHO COVID-19
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NaviagtionView;

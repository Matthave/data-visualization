import React from "react";
import logo from "../../assets/logo.png";
import cx from "classnames";
import PropTypes from "prop-types";

function NavigationView({ listEleOnPosition }) {
  const listClass = cx({
    nav__list: true,
    "nav__list--onPosition": listEleOnPosition,
  });

  const navClass = cx({
    nav: true,
    "nav--onPosition": listEleOnPosition,
  });
  return (
    <nav className={navClass}>
      <ul className="nav__ul">
        <li className={listClass}>
          <a
            className="nav__link"
            href="http://www.matthave.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="nav__logo" src={logo} alt="logo icon" />
          </a>
          <a
            className="nav__link"
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHO COVID-19
          </a>
        </li>
      </ul>
    </nav>
  );
}

NavigationView.propTypes = {
  listEleOnPosition: PropTypes.bool,
};

export default NavigationView;

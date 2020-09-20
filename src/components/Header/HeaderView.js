import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

function HeaderView({ textEleOnPosition, headerEleOnPosition }) {
  const textOnPosition = cx({
    header__text: true,
    "header__text--onPostion": textEleOnPosition,
  });

  const textHide = cx({
    header__text: true,
    "header__text--onPostion": textEleOnPosition,
    "header__text--hideIt": headerEleOnPosition,
  });

  const titleClass = cx({
    header__title: true,
    "header__title--onPosition": headerEleOnPosition,
  });

  const headerClass = cx({
    header: true,
    scrollSection: true,
    "header--height": headerEleOnPosition,
  });

  return (
    <header className={headerClass}>
      <div className="header__titleWrap">
        <h1 className={titleClass}>CoronaVirus</h1>
      </div>

      <div className="header__textWrap">
        <p className={textHide}>Stay Home</p>
        <p className={textHide}>Wash Your Hands</p>
        <p className={textHide}>Avoid The Crowds</p>
        <p className={textOnPosition}>Keep The Distance</p>
        <p className={textOnPosition}>Take Care of Your Health</p>
      </div>
    </header>
  );
}

HeaderView.propTypes = {
  textEleOnPostion: PropTypes.bool,
  headerEleOnPosition: PropTypes.bool,
};

export default HeaderView;

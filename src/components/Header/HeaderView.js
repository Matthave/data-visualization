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
        <p className={textHide}>
          Maintain at least 1 meter distance between yourself and others
        </p>
        <p className={textHide}>Regularly and thoroughly clean your hands</p>
        <p className={textHide}>Avoid going to crowded places</p>
        <p className={textOnPosition}>Get some information about COVID-19</p>
        <p className={textOnPosition}>Take a look on data visualization</p>
      </div>
    </header>
  );
}

HeaderView.propTypes = {
  textEleOnPostion: PropTypes.bool,
  headerEleOnPosition: PropTypes.bool,
};

export default HeaderView;

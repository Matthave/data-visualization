import React from "react";
import maskIcon from "../../../assets/medical-mask.svg";
import distanceIcon from "../../../assets/social-distancing.svg";
import waterIcon from "../../../assets/water-tap.svg";

function MainLastSection() {
  return (
    <>
      <h1 className="main__lastSecTitle">advice for the public</h1>
      <div className="main__iconWrap">
        <div className="main__advice">
          <img src={maskIcon} alt="mask" className="main__icon" id="icon1" />
          <h2 className="main__iconTitle" id="iconTitle1">
            WEAR FACE MASK
          </h2>
        </div>
        <div className="main__advice">
          <img
            src={distanceIcon}
            alt="distance 2m"
            className="main__icon"
            id="icon2"
          />
          <h2 className="main__iconTitle" id="iconTitle2">
            KEEP 2 METERS DISTANCE
          </h2>
        </div>
        <div className="main__advice">
          <img
            src={waterIcon}
            alt="wash hands"
            className="main__icon"
            id="icon3"
          />
          <h2 className="main__iconTitle" id="iconTitle3">
            WASH YOUR HANDS
          </h2>
        </div>
      </div>
    </>
  );
}

export default MainLastSection;

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
          <img src={maskIcon} alt="mask" className="main__icon" />
          <h2 className="main__iconTitle">WEAR FACE MASK</h2>
        </div>
        <div className="main__advice">
          <img src={distanceIcon} alt="distance 2m" className="main__icon" />
          <h2 className="main__iconTitle">KEEP 2 METERE DISTANCE</h2>
        </div>
        <div className="main__advice">
          <img src={waterIcon} alt="wash hands" className="main__icon" />
          <h2 className="main__iconTitle">WASH YOUR HANDS</h2>
        </div>
      </div>
    </>
  );
}

export default MainLastSection;

import React from "react";
import maskIcon from "../../../assets/medical-mask.svg";
import distanceIcon from "../../../assets/social-distancing.svg";
import waterIcon from "../../../assets/water-tap.svg";
import { adviceText } from "../../../constant/constantText";

function MainLastSection({ swapAdviceFunc, swapAdviceState }) {
  return (
    <>
      {console.log(adviceText)}
      <h1 className="main__lastSecTitle">advice for the public</h1>
      <div className="main__iconWrap">
        <div className="main__advice" id="icon1">
          {swapAdviceState ? (
            <h2 className="main__adviceText">{adviceText[0].advice}</h2>
          ) : (
            <img src={maskIcon} alt="mask" className="main__icon" />
          )}

          <h2 className="main__iconTitle" id="iconTitle1">
            WEAR FACE MASK
          </h2>
        </div>
        <div className="main__advice" id="icon2">
          {swapAdviceState ? (
            <h2 className="main__adviceText">{adviceText[1].advice}</h2>
          ) : (
            <img src={distanceIcon} alt="distance 2m" className="main__icon" />
          )}

          <h2 className="main__iconTitle" id="iconTitle2">
            KEEP 2 METERS DISTANCE
          </h2>
        </div>
        <div className="main__advice" id="icon3">
          {swapAdviceState ? (
            <h2 className="main__adviceText">{adviceText[2].advice}</h2>
          ) : (
            <img src={waterIcon} alt="wash hands" className="main__icon" />
          )}

          <h2 className="main__iconTitle" id="iconTitle3">
            WASH YOUR HANDS
          </h2>
        </div>
      </div>
      <button className="main__lastBtn" onClick={() => swapAdviceFunc()}>
        Swap Advice
      </button>
    </>
  );
}

export default MainLastSection;

import React from "react";
import PropTypes from "prop-types";

function MainView({ chartStageNumber }) {
  return (
    <main className="main">
      <section className="main__chartSection scrollSection introSection">
        <h2 className="main__introTitle">Covid-19 Vaccine</h2>
        <h4 className="main__introSubtitle">
          There are currently over 169 COVID-19 vaccine candidates under
          development, with 26 of these in the human trial phase
        </h4>
        <button className="main__introBtn">Learn More</button>
      </section>
      <section className="main__chartSection scrollSection">
        <h1 className="main__title">
          {chartStageNumber < 2 ? 2 : chartStageNumber}
        </h1>
      </section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection lastSection">
        <h1 className="main__title">eloszka</h1>
      </section>
    </main>
  );
}

MainView.propTypes = {
  chartStageNumber: PropTypes.number,
};

export default MainView;

import React from "react";
import Chart from "../../containers/Chart/Chart";
import PropTypes from "prop-types";
import MainLastSection from "./MainLastSection/MainLastSection";
import MainFixedSection from "./MainFixedSection/MainFixedSection";

function MainView({ dataMost, dataHistorical }) {
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
          <Chart dataMost={dataMost} />
        </h1>
      </section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection"></section>
      <section className="scrollSection lastSection">
        <MainLastSection />
      </section>
      <section className="scrollSection"></section>
      <MainFixedSection dataMost={dataMost} />
    </main>
  );
}

MainView.propTypes = {
  dataMost: PropTypes.array,
};

export default MainView;

import React from "react";

function MainFixedSection({ dataMost }) {
  return (
    <>
      {dataMost.map((ele) => (
        <div
          className="fixedSection"
          key={ele.countryInfo._id}
          id={`fixedSection${ele.countryInfo._id}`}
        >
          <p className="fixedSection__text">
            The <span className="fixedSection__country">{ele.country}</span> has{" "}
            <span className="fixedSection__cases">
              {ele.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>{" "}
            infections, of which there are currently{" "}
            <span className="fixedSection__active">
              {ele.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>{" "}
            activites. CoronaVirus has killed{" "}
            <span className="fixedSection__deaths">
              {ele.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
            people in the country and another{" "}
            <span className="fixedSection__critical">
              {ele.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>{" "}
            are in critical condition. Today{" "}
            <span className="fixedSection__todayD">
              {ele.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>{" "}
            people have died in the{" "}
            <span className="fixedSection__country">{ele.country}</span> and{" "}
            <span className="fixedSection__todayC">
              {ele.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>{" "}
            are newly infected.
          </p>
        </div>
      ))}
    </>
  );
}

export default MainFixedSection;

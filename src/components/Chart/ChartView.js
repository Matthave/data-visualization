import React from "react";

function ChartView() {
  return (
    <svg
      className="chart__svg"
      width={`${window.innerWidth}`}
      height={`${window.innerHeight}`}
    ></svg>
  );
}

export default ChartView;

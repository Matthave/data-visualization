import React, { Component } from "react";
import PropTypes from "prop-types";
import ChartView from "../../components/Chart/ChartView";
import {
  select,
  scaleLinear,
  scaleBand,
  axisLeft,
  axisBottom,
  max,
  format,
} from "d3";

export class Chart extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.dataTop10.length !== prevProps.dataTop10.length) {
      this.initForSvg();
    }
  }

  initForSvg = () => {
    const { dataTop10 } = this.props;
    const container = select(".chart__svg");
    const containerWidth = container.attr("width");
    const containerHeight = +container.attr("height");
    const margin = {
      top: 20,
      right: 20,
      bottom: 75,
      left: 85,
    };

    //Margin settings
    const innerWidth = containerWidth - margin.left - margin.right;
    const innerHeight = containerHeight - margin.top - margin.bottom;

    //Inst if scaleLinear + calculate from 0 do highest value
    const xScale = scaleLinear()
      .domain([0, max(dataTop10, (d) => d.cases)])
      .range([0, innerWidth])
      .nice();

    //Inst of scaleBand + calculate from 0 do highest value + padding
    const yScale = scaleBand()
      .domain(dataTop10.map((d) => d.country))
      .range([0, innerHeight])
      .padding(0.2);

    //Add to main g, another g, and use margin method
    const g = container
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    //yAxis ( dele domain line and tick line)
    const yAxis = axisLeft(yScale).tickSize(-innerWidth);
    g.append("g").call(yAxis).selectAll(".domain").remove();

    //xAxis
    //Settings to xAxist format + replace
    const xAxistTickFormat = (number) =>
      format(".1s")(number).replace("k", "K");
    const xAxis = axisBottom(xScale)
      .tickFormat(xAxistTickFormat)
      .tickSize(-innerHeight)
      .tickPadding(5);

    const xAxisG = g
      .append("g")
      .attr("class", "svg__xAxis")
      .call(xAxis)
      .attr("transform", `translate(0,${innerHeight})`);

    xAxisG.select(".domain").remove();

    //Main group g
    g.selectAll("rect")
      .data(dataTop10)
      .enter()
      .append("rect")
      .attr("class", "svg__rect")
      .attr("y", (d) => yScale(d.country))
      .attr("width", (d) => xScale(d.cases))
      .attr("height", yScale.bandwidth());
  };

  render() {
    return <ChartView />;
  }
}

Chart.propTypes = {
  dataTop10: PropTypes.array,
};

export default Chart;

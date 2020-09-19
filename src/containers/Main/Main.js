import React, { Component } from "react";
import MainView from "../../components/Main/MainView";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.sectionElements = document.querySelectorAll(".scrollSection");
    this.sectionArray = [...this.sectionElements];
    this.currentIndexOfSection = this.sectionArray.findIndex(
      this.isScrolledIntoView
    );
    this.currentIndexOfSection = Math.max(this.currentIndexOfSection, 0);

    this.state = {
      scrollPause: false,
      chartStageNumber: 0,
      data: [],
    };
  }

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.addEventListener("wheel", (e) => this.scrollDirection(e));
    this.sectionElements = document.querySelectorAll(".scrollSection");

    this.setState({
      chartStageNumber: this.currentIndexOfSection,
    });

    fetch("https://corona.lmao.ninja/v2/countries")
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .catch((err) => console.log(err));
  }

  componentWillUnmount() {
    document.removeEventListener("wheel", (e) => this.scrollDirection(e));
  }

  scrollDirection = (e) => {
    if (this.state.scrollPause) return;
    this.setState({
      scrollPause: true,
    });

    setTimeout(() => {
      this.setState({
        scrollPause: false,
      });
    }, 500);

    const direction = e.deltaY > 0 ? 1 : -1;
    this.whichSectionNow(direction);
  };

  whichSectionNow = (direction) => {
    const isLastSection =
      this.currentIndexOfSection === this.sectionElements.length - 1;
    const isFirstSection = this.currentIndexOfSection === 0;
    if (direction === 1) {
      if (isLastSection) return this.scrollToLastElement(direction);
    } else if (direction === -1) {
      if (isFirstSection) return;
      if (isLastSection) return this.scrollToLastElement(direction);
    }

    this.currentIndexOfSection += direction;
    this.scrollToElement();
  };

  scrollToElement = () => {
    if (
      this.currentIndexOfSection === 0 ||
      this.currentIndexOfSection === 1 ||
      this.currentIndexOfSection === 2
    ) {
      this.sectionElements[this.currentIndexOfSection].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    this.setState({
      chartStageNumber: this.currentIndexOfSection,
    });
  };

  scrollToLastElement = (direction) => {
    if (this.currentIndexOfSection === 10 && direction === 1) {
      this.sectionElements[10].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (this.currentIndexOfSection === 10 && direction === -1) {
      this.sectionElements[2].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      this.currentIndexOfSection = 9;
      this.setState({
        chartStageNumber: 9,
      });
    }
  };

  isScrolledIntoView(e) {
    const rect = e.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = Math.floor(rect.bottom);
    const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    return isVisible;
  }

  render() {
    const { chartStageNumber, data } = this.state;
    data.sort(function (a, b) {
      return b.cases - a.cases;
    });
    const dataTop10 = data.slice(0, 15);

    return (
      <MainView chartStageNumber={chartStageNumber} dataTop10={dataTop10} />
    );
  }
}

export default Main;

import React, { Component } from "react";
import MainView from "../../components/Main/MainView";
import { rectVisibilityHellOfIfs } from "../../utils";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.sectionElements = document.querySelectorAll(".scrollSection");
    this.sectionArray = [...this.sectionElements];
    this.currentIndexOfSection = this.sectionArray.findIndex(
      this.isScrolledIntoView
    );
    this.currentIndexOfSection = Math.max(this.currentIndexOfSection, 0);

    this.initialY = null;
    this.initialX = null;

    this.startTouch = this.startTouch.bind(this);
    this.moveTouch = this.moveTouch.bind(this);

    this.state = {
      scrollPause: false,
      chartStageNumber: 0,
      data: [],
    };
  }

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.addEventListener("wheel", (e) => this.scrollDirection(e));
    document.addEventListener("touchstart", this.startTouch, false);
    document.addEventListener("touchmove", this.moveTouch, false);

    document.addEventListener("swipeUp", () => this.whichSectionNow(1));
    document.addEventListener("swipeDown", () => this.whichSectionNow(-1));
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

  startTouch(event) {
    this.initialX = event.touches[0].clientX;
    this.initialY = event.touches[0].clientY;
  }

  moveTouch(event) {
    if (!this.initialX || !this.initialY) return;
    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;

    const diffX = this.initialX - currentX;
    const diffY = this.initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        document.dispatchEvent(new Event("swipeLeft"));
      } else {
        document.dispatchEvent(new Event("swipeRight"));
      }
    } else {
      if (diffY > 0) {
        document.dispatchEvent(new Event("swipeUp"));
      } else {
        document.dispatchEvent(new Event("swipeDown"));
      }
    }

    this.initialX = null;
    this.initialY = null;
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
      if (isLastSection) return;
    } else if (direction === -1) {
      if (isFirstSection) return;
    }

    this.currentIndexOfSection += direction;
    this.scrollToElement(direction);
  };

  scrollToElement = (direction) => {
    if (
      this.currentIndexOfSection === 0 ||
      this.currentIndexOfSection === 1 ||
      this.currentIndexOfSection === 2 ||
      this.currentIndexOfSection === 14
    ) {
      const fixedSectionEle = document.querySelectorAll(".fixedSection");
      if (this.currentIndexOfSection == 0 || this.currentIndexOfSection === 1) {
        fixedSectionEle.forEach((ele) => (ele.style.display = "none"));
      } else {
        fixedSectionEle.forEach((ele) => (ele.style.display = "initial"));
      }

      this.sectionElements[this.currentIndexOfSection].scrollIntoView({
        behavior: "smooth",
      });
    }

    if (this.currentIndexOfSection === 13 && direction === -1) {
      this.sectionElements[2].scrollIntoView({
        behavior: "smooth",
      });
    }

    rectVisibilityHellOfIfs(this.currentIndexOfSection);
    this.setState({
      chartStageNumber: this.currentIndexOfSection,
    });
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
    const dataMost = data.slice(0, 12);
    dataMost.forEach((ele, index) => {
      ele.countryInfo._id = index;
    });

    return <MainView chartStageNumber={chartStageNumber} dataMost={dataMost} />;
  }
}

export default Main;

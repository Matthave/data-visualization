import React, { Component } from "react";
import HeaderView from "../../components/Header/HeaderView";

export class Header extends Component {
  state = {
    textEleOnPosition: false,
    headerEleOnPosition: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        textEleOnPosition: true,
      });
    }, 500);

    setTimeout(() => {
      this.setState({
        headerEleOnPosition: true,
      });
    }, 3000);
  }

  render() {
    const { textEleOnPosition, headerEleOnPosition } = this.state;
    return (
      <HeaderView
        textEleOnPosition={textEleOnPosition}
        headerEleOnPosition={headerEleOnPosition}
      />
    );
  }
}

export default Header;

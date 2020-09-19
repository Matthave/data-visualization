import React, { Component } from "react";
import NavigationView from "../../components/Navigation/NavigationView";

export class Navigation extends Component {
  state = {
    listEleOnPosition: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        listEleOnPosition: true,
      });
    }, 3000);
  }

  render() {
    const { listEleOnPosition } = this.state;
    return <NavigationView listEleOnPosition={listEleOnPosition} />;
  }
}

export default Navigation;

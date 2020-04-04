import React, { Component } from "react";
import Progress from "./progress";
import Home from "./home";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <img
            width="60"
            src="./img/logo.png"
            srcSet="./img/logo.svg"
            alt="logo"
          ></img>
        </header>
        {this.state.step >= 1 && <Progress />}
        {this.state.step === 0 && <Home />}
      </React.Fragment>
    );
  }
}

export default Main;

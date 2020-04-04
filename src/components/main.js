import React, { Component } from "react";
import Progress from "./progress";
import Home from "./home";
import Step1 from "./step1";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      progressWidth: 25,
    };
  }

  changeStep = (stepNbr) => {
    this.setState({ step: stepNbr });
  };

  getImageSrc = (src) => {
    src.persist();
    console.log(src.target.style.backgroundImage);
    this.setState({
      bgSrc: src,
    });
    this.changeStep(2);
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <img
            width="60"
            src="./img/logo.png"
            srcSet="./img/logo.svg"
            alt="logo"
            className="logo"
          ></img>
        </header>
        {/* {this.state.step >= 1 && (
          <Progress
            progressWidth={this.state.progressWidth}
            step={this.state.step}
          />
        )} */}
        {this.state.step === 0 && <Home changeStep={this.changeStep} />}
        {this.state.step === 1 && (
          <Step1 getImageSrc={this.getImageSrc} changeStep={this.changeStep} />
        )}
      </React.Fragment>
    );
  }
}

export default Main;

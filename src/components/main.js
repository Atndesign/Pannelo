import React, { Component } from "react";
import Progress from "./progress";
import Home from "./home";
import Step1 from "./step1";
import Step2 from "./step2";
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
    this.setState({
      bgSrc: src.target.style.backgroundImage,
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
          <Step1
            step={this.state.step}
            getImageSrc={this.getImageSrc}
            changeStep={this.changeStep}
          />
        )}
        {this.state.step === 2 && (
          <Step2
            step={this.state.step}
            imgSrc={this.state.bgSrc}
            changeStep={this.changeStep}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Main;

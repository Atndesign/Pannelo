import React, { Component } from "react";

class Progress extends Component {
  render() {
    return (
      <div className="container">
        <div className="progress-container">
          <div className="progress__bar">
            <div
              className="progress__bar-in"
              style={{ width: this.props.progressWidth + "%" }}
            ></div>
          </div>
          <div className="progress__indicator-container --step1">
            <div className="progress__indicator"></div>
            <p>Step 1: Picture</p>
          </div>
          <div className="progress__indicator-container --step2">
            <div className="progress__indicator"></div>
            <p>Step 2: Text</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;

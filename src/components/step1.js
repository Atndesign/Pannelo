import React, { Component } from "react";
import PanelThumbnail from "./panelThumbnail";

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgs: [1, 2, 3, 4, 5, 6],
    };
  }
  render() {
    return (
      <div className="step1">
        <h1 className="step__title">Please choose a picture</h1>
        <div className="row">
          {this.state.bgs.map((bg) => {
            return (
              <PanelThumbnail
                getImageSrc={this.props.getImageSrc}
                key={bg}
                src={"bg" + bg}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Step1;

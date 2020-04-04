import React, { Component } from "react";

class PanelThumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="col-lg-6">
        <div
          onClick={(e) => this.props.getImageSrc(e)}
          className="thumbnail"
          style={{
            backgroundImage: "url(./img/bgs/" + this.props.src + ".png)",
          }}
        ></div>
      </div>
    );
  }
}

export default PanelThumbnail;

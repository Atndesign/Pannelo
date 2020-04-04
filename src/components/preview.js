import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="preview">
        <h2>Preview</h2>
        <div
          className="preview__thumbnail"
          style={{
            backgroundImage: this.props.bgSrc,
          }}
        >
          <p
            className="preview__text"
            style={{
              fontSize: this.props.size + "px",
              color: this.props.color,
            }}
          >
            {this.props.text}
          </p>
        </div>
      </div>
    );
  }
}

export default Preview;

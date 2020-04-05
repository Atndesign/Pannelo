import React, { Component } from "react";
import Preview from "./preview";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      size: 20,
      color: "#fff",
    };
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e,
    });
  };

  download = () => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      let url = canvas.toDataURL("image/jpeg");
      saveAs(url, "banner.jpg");
    });
  };

  newText = () => {
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div className="step2">
        {/* <button className="home__btn" onClick={this.props.}>Go back</button> */}
        <h1 className="step__title">Enter your custom text</h1>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="">Enter your text here</label>
            <input
              value={this.state.text}
              className="step2__text-input"
              type="text"
              onChange={(e) => this.handleChange(e.target.value, "text")}
            />
            <p></p>
            <div className="step2__controls">
              <label htmlFor="">Font size</label>
              <select
                className="form-control step2__input"
                type="range"
                name=""
                id=""
                onChange={(e) => this.handleChange(e.target.value, "size")}
              >
                <option value="20">20</option>
                <option value="22">22</option>
                <option value="24">24</option>
                <option value="26">26</option>
                <option value="28">28</option>
                <option value="30">30</option>
                <option value="32">32</option>
                <option value="34">34</option>
                <option value="36">36</option>
              </select>
              <label htmlFor="">Font Color</label>
              <input
                className="form-control step2__input"
                type="color"
                name=""
                id=""
                onChange={(e) => this.handleChange(e.target.value, "color")}
              />
            </div>

            {/* <label htmlFor="">Border size</label>
            <input type="range" name="" id="" /> */}
          </div>
          <div className="col-lg-6">
            <Preview
              text={this.state.text}
              size={this.state.size}
              bgSrc={this.props.imgSrc}
              color={this.state.color}
            />
            <div className="step2__bottom-control">
              <button className="step2__dl" onClick={this.download}>
                Download
              </button>
              <button className="step2__dl" onClick={this.newText}>
                New text
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Step2;

import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <p className="home__surtitle ">Welcome to</p>
        <h1 className="home__title animated fadeInUp delay-1s">Pannelo</h1>
        <p className="home__desc animated fadeInUp delay-2s">
          Pannelo let’s you create a twitch panel with predefined backgrounds
        </p>
        <button
          className="home__btn animated fadeInUp delay-2s"
          onClick={(e) => this.props.changeStep(1)}
        >
          Create my panel
        </button>
      </div>
    );
  }
}

export default Home;

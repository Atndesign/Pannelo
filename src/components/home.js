import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p className="home__surtitle">Welcome to</p>
        <h1 className="home__title">Pannelo</h1>
        <p>
          Pannelo let’s you create a twitch panel with predefined backgrounds
        </p>
        <button className="home__btn">Create my panel</button>
      </div>
    );
  }
}

export default Home;

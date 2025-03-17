import React, { Component } from "react";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Navbar",
      time: new Date().toLocaleTimeString(),
    };
    console.log("Constructor");
  }

  shouldComponentUpdate(nextProps, nextState) {

    return this.state.time !== nextState.time;
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    this.timerID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate");
    if (prevState.time !== this.state.time) {
      document.title = `Час: ${this.state.time}`;
    }
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
    clearInterval(this.timerID);
  }

  render() {
    console.log("Render");
    return (
      <nav style={{ background: "#282c34", padding: "10px", color: "white" }}>
        <h1>{this.state.title}</h1>
        <p>Поточний час: {this.state.time}</p>
      </nav>
    );
  }
}

export default Navbar;

import React, { Component } from "react";

class Content1 extends Component {
    constructor(props) {
      super(props);
      this.state = { text: "Hello World!" };
      console.log("Content1 constructor");
    }
  
    componentDidMount() {
      console.log("Content1 componentDidMount");
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      console.log("Content1 shouldComponentUpdate");
      return nextState.text !== this.state.text; 
    }
  
    componentDidUpdate() {
      console.log("Content1 componentDidUpdate");
    }
  
    componentWillUnmount() {
      console.log("Content1 componentWillUnmount");
    }
  
    changeText = () => {
      this.setState({ text: "New Content!" });
    };
  
    render() {
      console.log("Content1 render");
      return (
        <div>
          <h2>Content1 Component</h2>
          <p>{this.state.text}</p>
          <button onClick={this.changeText}>Change Text</button>
        </div>
      );
    }
  }
 
export default Content1
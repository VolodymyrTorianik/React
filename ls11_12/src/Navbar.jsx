import React, { Component } from "react";

class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      console.log("Navbar constructor");
    }
  
    componentDidMount() {
      console.log("Navbar componentDidMount (Компонент загружен)");
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      console.log("Navbar shouldComponentUpdate");
      return nextState.counter !== this.state.counter; 
    }
  
    componentDidUpdate() {
      console.log("Navbar componentDidUpdate (Компонент обновлён)");
    }
  
    componentWillUnmount() {
      console.log("Navbar componentWillUnmount (Компонент удалён)");
    }
  
    incrementCounter = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
  
    render() {
      console.log("Navbar render");
      return (
        <div>
          <h2>Navbar Component</h2>
          <p>Counter: {this.state.counter}</p>
          <button onClick={this.incrementCounter}>Increase Counter</button>
        </div>
      );
    }
  }
  
export default Navbar
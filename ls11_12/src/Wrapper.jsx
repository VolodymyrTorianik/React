import React, { Component } from "react";
import Navbar from './Navbar';
import Content1 from './Content1';

class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state = { showNavbar: true, showContent1: true }; 
    }
  
    toggleNavbar = () => {
      this.setState({ showNavbar: !this.state.showNavbar }); 
    };
  
    toggleContent1 = () => {
      this.setState({ showContent1: !this.state.showContent1 }); 
    };
  
    render() {
      return (
        <div>
          <h1>Wrapper Component</h1>
          <button onClick={this.toggleNavbar}>Toggle Navbar</button>
          <button onClick={this.toggleContent1}>Toggle Content1</button>
          {this.state.showNavbar && <Navbar />} 
          {this.state.showContent1 && <Content1 />} 
        </div>
      );
    }
  }
  

export default Wrapper
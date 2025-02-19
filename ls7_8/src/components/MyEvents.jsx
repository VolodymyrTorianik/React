import React from 'react';

class MyEvents extends React.Component {
  handleClick = () => {
    alert('Button Clicked!');
  };

  handleMouseDown = () => {
    console.log('Mouse Down Event');
  };

  handleMouseUp = () => {
    console.log('Mouse Up Event');
  };

  handleMouseMove = () => {
    console.log('Mouse Move Event');
  };

  handleCut = () => {
    alert('Text Cut!');
  };

  handleCopy = () => {
    alert('Text Copied!');
  };

  handleMouseWheel = () => {
    console.log('Mouse Wheel Scrolled');
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove} onWheel={this.handleMouseWheel}>
        <button onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
          Click Me
        </button>
        <hr/>
        <p onCut={this.handleCut}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis, consequatur laudantium porro magnam ab nisi. Nostrum dignissimos animi, maiores laudantium non et doloremque fuga aut, eius porro accusantium nihil?
        </p>
        <hr/>
        <p onCopy={this.handleCopy} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis, consequatur laudantium porro magnam ab nisi. Nostrum dignissimos animi, maiores laudantium non et doloremque fuga aut, eius porro accusantium nihil?
        </p>
      </div>
    );
  }
}

export default MyEvents;

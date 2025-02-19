import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>{this.props.data.content}</p>
      </footer>
    );
  }
}

export default Footer;

import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <aside>
        <ul>
          {this.props.data.links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </aside>
    );
  }
}

export default Sidebar;

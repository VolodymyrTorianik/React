import React from 'react';



function Sidebar({ data }) {
  return (
    <div>
      <ul>
        {data.links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

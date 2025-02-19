import React from 'react';
import Count from './Count';
import MyEvents from './MyEvents';

class Content extends React.Component {
  render() {
    const post = {
      title: 'Components Class React',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta reprehenderit suscipit cupiditate. Repellat excepturi odio similique qui cumque modi alias cupiditate? Minus, modi vel. Quisquam animi vel sapiente illo!'
    };

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.describe}</p>
        <Count />
        <div>
        <h2>Here you can see my Events</h2>
        <MyEvents />
      </div>
      </div>
      
    );
  }
}

export default Content;

import React, { useState } from 'react';
import Count from './Count';

function Content() {
  const contentData = {
    title: 'Content Title',
    describe: 'This is the description of the content.'
  };

  return (
    <div>
      <h1>{contentData.title}</h1>
      <p>{contentData.describe}</p>
      <Count />
    </div>
  );
}

export default Content;

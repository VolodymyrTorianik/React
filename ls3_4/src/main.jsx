import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import React from 'react';

const n1 = 111;
const n2 = true;

function A () {
  console.log(222);
  
}

function B () {
  console.log(444);
  return 444;
}

const n3 = 'hello';

const ddd = 'class My name';

const El = React.createElement('section', {d: 1111}, <h2>Hello</h2>
)

const randomID = 'ID-' + Math.random();

createRoot(document.getElementById('root')).render(
<div>
  <h1>Hello React!</h1>
  <div className='bg-red'>
    Hello text
  </div>
  <App variabel="32523"></App>
  <App></App>
  <App/>
  {App()}
  <div>
    111
  </div>
  <div className={ddd}>
    {111}
  </div>
  <div>
    {n1}
  </div>
  <div>
    {n2}
  </div>
  <div>
    {A()}
  </div>
  <div>
    <h3>
      {n3}
    </h3>
  </div>
  <div>
    {/* {()=> {console.log(333);}} */}
  </div>
  <div>
    {B()}
  </div>
  <div>
    {React.createElement('div', {className: 1}, <div>2222</div>)}
  </div>
  <div>
    {El}
  </div>
  <div id={randomID}>
    {randomID}
  </div>
  </div>
)

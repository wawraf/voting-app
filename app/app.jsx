console.log('This is a message from client.')

import React from 'react'
const ReactDOM = require('react-dom');

/* Import Styles */
require('./styles/main');

/* Import Components */

const text = [
  'Some text',
  'Hello World!',
  'This is just a destructuring test :)'
]

const [ iDontWantThat, ...sentences ] = text;

const App = ({array}) => (
  <div className='App'>
    {array.map((element, index) => (
      <p key={index}>{element}</p>
    ))}
  </div>
)

ReactDOM.render(
  <App array={sentences}/>,
  document.getElementById('main')
)
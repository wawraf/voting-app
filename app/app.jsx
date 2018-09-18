console.log('%cThis is a message from client.', 'color: green; font-weight: bold;')

import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
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
  <Provider store={store}>
    <App array={sentences}/>
  </Provider>,
  document.getElementById('main')
)
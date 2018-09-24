console.log('%cThis is a message from client.', 'color: green; font-weight: bold;')

import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
const ReactDOM = require('react-dom');

/* Import Styles */
require('./styles/main');

/* Import Components */
import App from './components/containers/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
console.log('%cThis is a message from client.', 'color: green; font-weight: bold;')

import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
const ReactDOM = require('react-dom');

/* Import Styles */
require('./styles/main');

/* Import Components */
import App from './components/containers/App'

import axios from 'axios'
import { login, logout } from './store/actions'

axios
  .get('/auth/user')
  .then(res => {
    !!res.data.user
    ? store.dispatch(login(res.data.user._id))
    : store.dispatch(logout())
  })
  .then(() => 
        ReactDOM.render(
          <Provider store={store}>
            <App />
          </Provider>,
          document.getElementById('main')
        )
       )
  .catch(err => console.log('Error while checking user and loading APP.'))
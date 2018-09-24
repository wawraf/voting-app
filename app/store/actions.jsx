const actionTypes = require('./actionTypes');
const axios = require('axios')

// Authentication
const login = () => (
  { type: actionTypes.LOGIN, payload: true }
)

const logout = () => {
  return {type: actionTypes.LOGOUT, payload: false}
}

const checkUser = () => (dispatch) => {
  console.log('checking user with axios')
  axios
  .get('/auth/user')
  .then(res => {
    console.log('checking user')
    console.log(res.data.user)
    !!res.data.user
    ? dispatch(login())
    : dispatch(logout())
  })
  .catch(err => console.log('error while checking user'))
}

// Sidebar
const showSidebar = () => {
  return {type: actionTypes.SHOW_SIDEBAR}
}

module.exports = {
  checkUser,
  showSidebar
}
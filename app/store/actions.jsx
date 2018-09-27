const actionTypes = require('./actionTypes');
const axios = require('axios')

// Authentication
const login = (id) => (
  { type: actionTypes.LOGIN, payload: {isLogged: true, user: id} }
)

const logout = () => {
  return {type: actionTypes.LOGOUT, payload: {isLogged: false, user: null}}
}

const checkUser = () => (dispatch) => {
  axios
  .get('/auth/user')
  .then(res => {
    !!res.data.user
    ? dispatch(login(res.data.user._id))
    : dispatch(logout())
  })
  .catch(err => console.log('error while checking user'))
}

// Sidebar
const showLoginBar = () => {
  return {type: actionTypes.SHOW_LOGINBAR}
}

const loading = (bool) => (
  { type: actionTypes.LOADING, payload: bool}
)

// Polls
const _getAllPolls = (polls) => (
  { type: actionTypes.GET_ALL_POLLS, payload: polls}
)

const getAllPolls = () => (dispatch) => {
  dispatch(loading(true))
  
  axios.get('/api/polls')
  .then((res) => {
    dispatch(_getAllPolls(res.data))
  })
  .then((res) => dispatch(loading(false)))
  .catch(err => console.log('Fetching all articles - ERROR!'))
}

module.exports = {
  login, 
  logout,
  loading,
  checkUser,
  showLoginBar,
  getAllPolls
}
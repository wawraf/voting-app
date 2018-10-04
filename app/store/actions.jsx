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
const showLoginBar = (show) => {
  // Disabling background element's scrollbar
  if (show == 'show') document.body.classList.add('disableScroll')
  else document.body.classList.remove('disableScroll')
    
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
    dispatch(_getOnePoll({}))
  })
  .then((res) => dispatch(loading(false)))
  .catch(err => console.log('Fetching all polls - ERROR!'))
}

const getMyPolls = (owner) => (dispatch) => {
  dispatch(loading(true))
  
  axios.get('/api/mypolls/' + owner)
  .then((res) => {
    dispatch(_getAllPolls(res.data))
    dispatch(_getOnePoll({}))
  })
  .then((res) => dispatch(loading(false)))
  .catch(err => console.log('Fetching my polls - ERROR!'))
}

const _getOnePoll = (poll) => (
  {
    type: actionTypes.GET_ONE_POLL, payload: poll
  }
)

const getOnePoll = (pid) => (dispatch) => {
  dispatch(loading(true))
  
  axios.get('/api/poll/' + pid)
  .then((res) => {
    dispatch(_getOnePoll(res.data))
  })
  .then(res => dispatch(loading(false)))
  .catch((err) => console.log('Fetching one poll - ERROR!'))
}

const _vote = (index) => (
  {
    type: actionTypes.VOTE, payload: index
  }
)

const vote = (index, pid, aid) => (dispatch) => {
  axios
    .put('/api/poll/' + pid + '/' + aid + '/vote')
    .then(res => dispatch(_vote(index)))
    .catch(err => console.log(err))
}

const removePoll = (pid) => (dispatch)=> {
  axios.delete('/api/poll/' + pid)
  .then(res => dispatch(_getOnePoll({removed: true})))
  .catch(err => console.log('Error while deleting poll'))
}

module.exports = {
  login, 
  logout,
  loading,
  checkUser,
  showLoginBar,
  getAllPolls,
  getMyPolls,
  getOnePoll,
  vote,
  removePoll
}
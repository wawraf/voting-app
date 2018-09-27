import { LOGIN, LOGOUT, LOADING, SHOW_LOGINBAR, GET_ALL_POLLS } from './actionTypes'
import { combineReducers } from 'redux'

const isLogged = (state = {isLogged: false, user: null}, action) => {
  switch (action.type) {
    case LOGIN || LOGOUT:
      return action.payload
    default:
      return state
  }
}

const isLoading = (state = true, action) => {
  if (action.type == LOADING) return action.payload
  else return state
}

const showLoginBar = (state = false, action) => {
  if (action.type == SHOW_LOGINBAR) {
    return !state
  } else return state
}

const allPolls = (state = [], action) => {
  if (action.type == GET_ALL_POLLS) return action.payload
  else return state
}

const reducers = combineReducers({
  isLogged,
  showLoginBar,
  allPolls,
  isLoading
})

export default reducers
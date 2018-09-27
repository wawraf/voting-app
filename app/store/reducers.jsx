import { LOGIN, LOGOUT, SHOW_LOGINBAR } from './actionTypes'
import { combineReducers } from 'redux'

const isLogged = (state = null, action) => {
  switch (action.type) {
    case LOGIN || LOGOUT:
      return action.payload
    default:
      return state
  }
}

const showLoginBar = (state = false, action) => {
  if (action.type == SHOW_LOGINBAR) {
    return !state
  } else return state
}

const reducers = combineReducers({
  isLogged,
  showLoginBar
})

export default reducers
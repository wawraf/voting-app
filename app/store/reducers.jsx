import { LOGIN, LOGOUT, SHOW_SIDEBAR } from './actionTypes'
import { combineReducers } from 'redux'

const isLogged = (state = false, action) => {
  switch (action.type) {
    case LOGIN || LOGOUT:
      return action.payload
    default:
      return state
  }
}

const showSidebar = (state = false, action) => {
  console.log(action)
  if (action.type == SHOW_SIDEBAR) {
    return !state
  } else return state
}

const reducers = combineReducers({
  isLogged,
  showSidebar
})

export default reducers
import { LOGIN, LOGOUT, LOADING, 
        SHOW_LOGINBAR, GET_ALL_POLLS, 
        GET_ONE_POLL, VOTE, REMOVE_POLL } from './actionTypes'
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

const currentPoll = (state = {}, action) => {
  if (action.type == GET_ONE_POLL) 
    return action.payload
  else if (action.type == VOTE) {
    const index = action.payload
    const newState = {
      ...state, 
      answers: [
        ...state.answers.map((answer, i) => {
          if (i !== index) {
            return answer
          }
          return {
            ...answer,
            votes: state.answers[index].votes + 1
          }
        })
      ]
    }

    return newState
  }
  else return state
}

const error = (state = false, action) => {
  return state
}

const reducers = combineReducers({
  isLogged,
  showLoginBar,
  allPolls,
  currentPoll,
  isLoading,
  error
})

export default reducers
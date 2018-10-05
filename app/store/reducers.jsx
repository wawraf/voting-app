import { LOGIN, LOGOUT, LOADING, 
        SHOW_LOGINBAR, GET_ALL_POLLS, 
        GET_ONE_POLL, VOTE, REMOVE_POLL, ADD_ANSWER, 
        SHOW_ANSWER_FORM, INPUT_CHANGE } from './actionTypes'
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
  else if (action.type == ADD_ANSWER) {
    const newAnswer = action.payload
    return {
      ...state,
      answers: [
        ...state.answers,
        newAnswer
      ]
    }
  }
  else return state
}

const error = (state = false, action) => {
  return state
}

const showAddAnswerForm = (state = false, action) => {
  if (action.type == SHOW_ANSWER_FORM) {
    return action.payload == 'showForm'
      ? true 
      : action.payload == 'closeForm'
        ? false
        : state
  } else return state
}

const reducers = combineReducers({
  isLogged,
  showLoginBar,
  allPolls,
  currentPoll,
  isLoading,
  error,
  showAddAnswerForm
})

export default reducers
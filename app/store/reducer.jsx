import { ADD_TODO, TOGGLE_TODO, SET_FILTER, TYPING, visibilityFilters } from './actions'

import { combineReducers } from 'redux'

const todos = (state = [], action) => {
  return state
}

const filter = (filter = '', action) => {
  return filter
}

const reducer = combineReducers({
  todos,
  filter
})

module.exports = { reducer }
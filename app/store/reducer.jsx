import { action1, action2 } from './actions'
import { combineReducers } from 'redux'

const reducer1 = (stateOfReducer1 = [], action) => {
  return stateOfReducer1
}

const reducer2 = (stateOfReducer2 = '', action) => {
  return stateOfReducer2
}

const reducer = combineReducers({
  reducer1,
  reducer2
})

export default reducer
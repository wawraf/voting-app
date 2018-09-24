import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

console.log('New store:')
console.log(store.getState())

export default store

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState())
// })

// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_COMPLETED))

// unsubscribe()
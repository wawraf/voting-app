import { createStore } from 'redux';
import { reducer } from './reducer'

export const store = createStore(reducer, window.STATE_FROM_SERVER)

console.log('New store:')
console.log(store.getState())

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
import { applyMiddleware, compose, createStore } from 'redux'
import createRootReducer from './reducers/reducer'
import thunkMiddleware from 'redux-thunk'

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    compose(
      applyMiddleware(
        thunkMiddleware
      ),
    ),
  )
  return store
}
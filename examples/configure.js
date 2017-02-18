import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import middlewares from './middlewares'

const configureStore = initialState =>
  createStore(reducer, initialState, applyMiddleware(...middlewares))

export default configureStore

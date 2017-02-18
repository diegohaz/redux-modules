import { createStore } from 'redux'
import reducer from './reducer'

const configureStore = initialState => createStore(reducer, initialState)

export default configureStore

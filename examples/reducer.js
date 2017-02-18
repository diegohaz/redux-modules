import { combineReducers } from 'redux'
import status from './status/reducer'
import resource from './resource/reducer'

const reducers = {
  status,
  resource,
}

export default combineReducers(reducers)

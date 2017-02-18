import { combineReducers } from 'redux'

// to add a new reducer just import it
import status from './status/reducer'
import resource from './resource/reducer'

// and add that here
const reducers = {
  status,
  resource,
}

export default combineReducers(reducers)

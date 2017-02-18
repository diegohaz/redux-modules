import upperFirst from 'lodash/upperFirst'

// to add new selectors just import them
import * as entities from './entities/selectors'
import * as resource from './resource/selectors'
import * as status from './status/selectors'

// and add it here
const stores = {
  entities,
  resource,
  status,
}

Object.keys(stores).forEach((storeName) => {
  const selectors = stores[storeName]
  const fromStore = `from${upperFirst(storeName)}`
  const getState = (state = {}) => state[storeName] || {}

  module.exports[fromStore] = {}

  Object.keys(selectors).forEach((selectorName) => {
    const selector = selectors[selectorName]
    if (typeof selector === 'function') {
      module.exports[fromStore][selectorName] = (state, ...args) =>
        selector(getState(state), ...args)
    }
  })
})

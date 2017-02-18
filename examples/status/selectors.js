import find from 'lodash/find'
import pick from 'lodash/pick'

export const initialState = {
  loading: {},
  error: {}
}

const getIn = (state, prefix) => {
  // isLoading(state)
  if (typeof prefix === 'undefined') {
    return !!find(state, value => !!value)
  // isLoading(state, ['POST_DETAIL_READ', 'POST_CREATE'])
  } else if (Array.isArray(prefix)) {
    return !!find(pick(state, prefix), value => !!value)
  // isLoading(state, 'POST_CREATE')
  } else if (Object.prototype.hasOwnProperty.call(state, prefix)) {
    return !!state[prefix]
  }
  return false
}

export const getLoadingState = (state = initialState) => state.loading || {}
export const getErrorState = (state = initialState) => state.error || {}
export const isLoading = (state, prefix) => getIn(getLoadingState(state), prefix)
export const hasError = (state, prefix) => getIn(getErrorState(state), prefix)

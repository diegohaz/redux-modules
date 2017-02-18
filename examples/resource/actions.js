export const RESOURCE_CREATE_REQUEST = 'RESOURCE_CREATE_REQUEST'
export const RESOURCE_CREATE_SUCCESS = 'RESOURCE_CREATE_SUCCESS'
export const RESOURCE_CREATE_FAILURE = 'RESOURCE_CREATE_FAILURE'

export const resourceCreateRequest = data => ({
  type: RESOURCE_CREATE_REQUEST,
  data,
})

export const resourceCreateSuccess = detail => ({
  type: RESOURCE_CREATE_SUCCESS,
  detail,
})

export const resourceCreateFailure = error => ({
  type: RESOURCE_CREATE_FAILURE,
  error,
})

export const RESOURCE_LIST_REQUEST = 'RESOURCE_LIST_REQUEST'
export const RESOURCE_LIST_SUCCESS = 'RESOURCE_LIST_SUCCESS'
export const RESOURCE_LIST_FAILURE = 'RESOURCE_LIST_FAILURE'

export const resourceListRequest = params => ({
  type: RESOURCE_LIST_REQUEST,
  params,
})

export const resourceListSuccess = list => ({
  type: RESOURCE_LIST_SUCCESS,
  list,
})

export const resourceListFailure = error => ({
  type: RESOURCE_LIST_FAILURE,
  error,
})

export const RESOURCE_DETAIL_REQUEST = 'RESOURCE_DETAIL_REQUEST'
export const RESOURCE_DETAIL_SUCCESS = 'RESOURCE_DETAIL_SUCCESS'
export const RESOURCE_DETAIL_FAILURE = 'RESOURCE_DETAIL_FAILURE'

export const resourceDetailRequest = needle => ({
  type: RESOURCE_DETAIL_REQUEST,
  needle,
})

export const resourceDetailSuccess = (needle, detail) => ({
  type: RESOURCE_DETAIL_SUCCESS,
  needle,
  detail,
})

export const resourceDetailFailure = (needle, error) => ({
  type: RESOURCE_DETAIL_FAILURE,
  needle,
  error,
})

export const RESOURCE_UPDATE_REQUEST = 'RESOURCE_UPDATE_REQUEST'
export const RESOURCE_UPDATE_SUCCESS = 'RESOURCE_UPDATE_SUCCESS'
export const RESOURCE_UPDATE_FAILURE = 'RESOURCE_UPDATE_FAILURE'

export const resourceUpdateRequest = (needle, data) => ({
  type: RESOURCE_UPDATE_REQUEST,
  needle,
  data,
})

export const resourceUpdateSuccess = (needle, detail) => ({
  type: RESOURCE_UPDATE_SUCCESS,
  needle,
  detail,
})

export const resourceUpdateFailure = (needle, error) => ({
  type: RESOURCE_UPDATE_FAILURE,
  needle,
  error,
})

export const RESOURCE_DELETE_REQUEST = 'RESOURCE_DELETE_REQUEST'
export const RESOURCE_DELETE_SUCCESS = 'RESOURCE_DELETE_SUCCESS'
export const RESOURCE_DELETE_FAILURE = 'RESOURCE_DELETE_FAILURE'

export const resourceDeleteRequest = needle => ({
  type: RESOURCE_DELETE_REQUEST,
  needle,
})

export const resourceDeleteSuccess = needle => ({
  type: RESOURCE_DELETE_SUCCESS,
  needle,
})

export const resourceDeleteFailure = (needle, error) => ({
  type: RESOURCE_DELETE_FAILURE,
  needle,
  error,
})

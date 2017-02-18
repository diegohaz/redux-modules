import { schema } from 'normalizr'

export const resource = new schema.Entity('resource')

export const actionsMeta = {
  RESOURCE_CREATE_SUCCESS: { property: 'detail', schema: resource },
  RESOURCE_LIST_SUCCESS: { property: 'list', schema: [resource] },
  RESOURCE_DETAIL_SUCCESS: { property: 'detail', schema: resource },
  RESOURCE_UPDATE_REQUEST: { property: 'data', schema: resource },
  RESOURCE_UPDATE_SUCCESS: { property: 'detail', schema: resource },
}

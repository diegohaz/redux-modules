import values from 'lodash/values'
import * as selectors from '../selectors'

const altState = {
  resource: {
    1: {
      id: 1,
      title: 'test',
      description: 'test'
    },
    2: {
      id: 2,
      title: 'test 2',
      description: 'test 2'
    }
  }
}

test('initialState', () => {
  expect(selectors.initialState).toEqual({})
})

test('getEntity', () => {
  expect(selectors.getEntity(undefined, 'test')).toEqual({})
  expect(selectors.getEntity({}, 'test')).toEqual({})
  expect(selectors.getEntity(altState, 'test')).toEqual({})
  expect(selectors.getEntity(altState, 'resource')).toEqual(altState.resource)
})

test('getDetail', () => {
  expect(selectors.getDetail(undefined, 'test')).toBeUndefined()
  expect(selectors.getDetail(undefined, 'test', 1)).toBeUndefined()
  expect(selectors.getDetail({}, 'test')).toBeUndefined()
  expect(selectors.getDetail({}, 'test', 1)).toBeUndefined()
  expect(selectors.getDetail(altState, 'resource')).toBeUndefined()
  expect(selectors.getDetail(altState, 'resource', 1)).toEqual(altState.resource[1])
})

test('getList', () => {
  expect(selectors.getList(undefined, 'test')).toEqual([])
  expect(selectors.getList(undefined, 'test', [1])).toEqual([undefined])
  expect(selectors.getList({}, 'test')).toEqual([])
  expect(selectors.getList({}, 'test', [1])).toEqual([undefined])
  expect(selectors.getList(altState, 'resource')).toEqual(values(altState.resource))
  expect(selectors.getList(altState, 'resource', [1])).toEqual([altState.resource[1]])
})

test('getDenormalizedDetail', () => {
  expect(selectors.getDenormalizedDetail(undefined, 'test')).toBeUndefined()
  expect(selectors.getDenormalizedDetail(undefined, 'test', 1)).toBeUndefined()
  expect(selectors.getDenormalizedDetail({}, 'test')).toBeUndefined()
  expect(selectors.getDenormalizedDetail({}, 'test', 1)).toBeUndefined()
  expect(selectors.getDenormalizedDetail(altState, 'resource')).toBeUndefined()
  expect(selectors.getDenormalizedDetail(altState, 'resource', 1)).toEqual(altState.resource[1])
})

test('getDenormalizedList', () => {
  expect(selectors.getDenormalizedList(undefined, 'test')).toEqual([])
  expect(selectors.getDenormalizedList(undefined, 'test', [1])).toEqual([undefined])
  expect(selectors.getDenormalizedList({}, 'test')).toEqual([])
  expect(selectors.getDenormalizedList({}, 'test', [1])).toEqual([undefined])
  expect(selectors.getDenormalizedList(altState, 'resource')).toEqual(values(altState.resource))
  expect(selectors.getDenormalizedList(altState, 'resource', [1])).toEqual([altState.resource[1]])
})

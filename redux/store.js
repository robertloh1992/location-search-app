import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { searchLocationReducer } from '@redux/reducers/searchLocationReducer'
import { rootEpic } from '@redux/epics/searchLocationEpics'

const rootReducer = combineReducers({ search: searchLocationReducer })
const epicMiddleware = createEpicMiddleware()

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

epicMiddleware.run(rootEpic)

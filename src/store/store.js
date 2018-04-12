import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware  from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { logger } from 'redux-logger'
import { combineReducers } from 'redux'

import { homepageReducer } from './../app/containers/Homepage/reducer'
import { showDetailsReducer } from './../app/containers/ShowDetailsPage/reducer'
import { searchInputReducer } from './../app/containers/SearchInput/reducer'

const rootReducer = combineReducers({
	homepageReducer,
	showDetailsReducer,
	searchInputReducer
})
export { rootReducer }

export const store = applyMiddleware(logger, promise(), thunkMiddleware)(createStore)
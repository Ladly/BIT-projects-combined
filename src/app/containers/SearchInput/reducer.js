import {
	SEARCH_SHOWS_PENDING,
	SEARCH_SHOWS_FULFILLED,
	SEARCH_SHOWS_REJECTED
} from './constants'

const initialState = {
	searchShows: [],
	searchShowsLoading: false,
	searchShowSuccess: false,
	searchShowError: false
} 

export const searchInputReducer = (state = initialState, action) => {
	switch(action.type) {
	case SEARCH_SHOWS_PENDING:
		return {
			...state, 
			searchShowsLoading: true
		}
		break
	case SEARCH_SHOWS_FULFILLED:
		return {
			...state, 
			searchShowsLoading: false,
			searchShowSuccess: true,
			searchShows: action.payload
		}
		break
	case SEARCH_SHOWS_REJECTED: 
		return {
			...state, 
			searchShowsLoading: false,
			searchShowSuccess: false,
			searchShowError: true
		}
		break
	default: 
		return state
	}
}
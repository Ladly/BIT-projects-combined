import {
	FETCH_TOP_THREE_SHOWS_PENDING,
	FETCH_TOP_THREE_SHOWS_FULFILLED,
	FETCH_TOP_THREE_SHOWS_REJECTED
} from './constants'

const initialState = {
	topThreeShows: [],
	topThreeShowsLoading: false,
	topThreeShowsSuccess: false,
	topThreeShowsError: false
} 

export const headerReducer = (state = initialState, action) => {
	switch(action.type) {
	case FETCH_TOP_THREE_SHOWS_PENDING:
		return {
			...state, 
			topThreeShowsLoading: true
		}
		break
	case FETCH_TOP_THREE_SHOWS_FULFILLED:
		return {
			...state, 
			topThreeShowsLoading: false,
			topThreeShowsSuccess: true,
			topThreeShows: action.payload
		}
	case FETCH_TOP_THREE_SHOWS_REJECTED: 
		return {
			...state, 
			topThreeShowsLoading: false,
			topThreeShowsSuccess: false,
			topThreeShowsError: true
		}
		break
	default: 
		return state
	}
}
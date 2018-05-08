import { 
	FETCH_SHOWS_PENDING,
	FETCH_SHOWS_FULFILLED,
	FETCH_SHOWS_REJECTED
} from './constants'

const initialState = {
	fetchedShows: [],
	fetchShowsLoading: false,
	fetchShowsSuccess: false,
	fetchShowsError: false
}

export const homepageReducer = (state = initialState, action) => {
	switch(action.type) {
	case FETCH_SHOWS_PENDING:
		return {
			...state,
			fetchShowsLoading: true
		}
		break
	case FETCH_SHOWS_FULFILLED:
		return {
			...state,
			fetchShowsLoading:false,
			fetchShowsSuccess: true,
			fetchedShows: action.payload
		}            
		break
	case FETCH_SHOWS_REJECTED:
		return {
			...state,
			fetchShowsLoading: false,
			fetchShowsSuccess: false,
			fetchShowsError: true
		}
		break
	default:
		return state
	}
}
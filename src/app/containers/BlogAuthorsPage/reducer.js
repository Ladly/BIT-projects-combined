import {
	FETCH_AUTHORS_PENDING,
	FETCH_AUTHORS_FULFILLED,
	FETCH_AUTHORS_REJECTED
} from './constants'

const initialState = {
	fetchedAuthors: [],
	fetchedAuthorsLoading: false,
	fetchedAuthorsSuccess: false,
	fetchedAuthorsError: false
}

export const authorsPageReducer = (state = initialState, action) => {
	switch(action.type){
	case FETCH_AUTHORS_PENDING:
		return {
			...state,
			fetchedAuthorsLoading: true
		}
		break
	case FETCH_AUTHORS_FULFILLED:
		return {
			...state,
			fetchedAuthorsLoading: false,
			fetchedAuthorsSuccess: true,
			fetchedAuthors: action.payload
		}
		break
	case FETCH_AUTHORS_REJECTED:
		return {
			...state,
			fetchedAuthorsLoading: false,
			fetchedAuthorsSuccess: false,
			fetchedAuthorsError: true
		}
		break
	default:
		return state
	}
}

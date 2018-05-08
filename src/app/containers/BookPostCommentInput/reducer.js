import {
	POST_DATA_PENDING,
	POST_DATA_FULFILLED,
	POST_DATA_REJECTED
} from './constants'

const initialState = {
	postDataLoading: false,
	postDataSuccess: false,
	postDataError: false
}

export const bookPostCommentInputReducer = (state = initialState, action) => {
	switch(action.type) {
	case POST_DATA_PENDING:
		return {
			...state, 
			postDataLoading: true
		}
	case POST_DATA_FULFILLED:
		return {
			...state,
			postDataLoading: false,
			postDataSuccess: true,
		}
	case POST_DATA_REJECTED:
		return {
			postDataLoading: false,
			postDataSuccess: false,
			postDataError: true
		}
	default:
		return state
	}
}
import {
	POST_VIDEO_DATA_PENDING,
	POST_VIDEO_DATA_FULFILLED,
	POST_VIDEO_DATA_REJECTED
} from './constants'

const initialState = {
	postVideoLoading: false,
	postVideoSuccess: false,
	postVideoError: false
}

export const videoPostModalReducer = (state = initialState, action) => {
	switch(action.type) {
	case POST_VIDEO_DATA_PENDING:
		return {
			...state, 
			postVideoLoading: true
		}
	case POST_VIDEO_DATA_FULFILLED:
		return {
			...state,
			postVideoLoading: false,
			postVideoSuccess: true,
		}
	case POST_VIDEO_DATA_REJECTED:
		return {
			postVideoLoading: false,
			postVideoSuccess: false,
			postVideoError: true
		}
	default:
		return state
	}
}
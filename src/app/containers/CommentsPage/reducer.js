import {
	FETCH_SINGLE_SHOW_PENDING,
	FETCH_SINGLE_SHOW_FULFILLED,
	FETCH_SINGLE_SHOW_REJECTED
} from './constants'

const initialState = {
	singleShow: null,
	singleShowLoading: false,
	singleShowSuccess: false,
	singleShowError: false
} 

export const commentsReducer = (state = initialState, action) => {
	switch(action.type) {
	case FETCH_SINGLE_SHOW_PENDING:
		return {
			...state, 
			singleShowLoading: true
		}
		break
	case FETCH_SINGLE_SHOW_FULFILLED:
		return {
			...state, 
			singleShowLoading: false,
			singleShowSuccess: true,
			singleShow: action.payload
		}
	case FETCH_SINGLE_SHOW_REJECTED: 
		return {
			...state, 
			singleShowLoading: false,
			singleShowSuccess: false,
			singleShowError: true
		}
		break
	default: 
		return state
	}
}
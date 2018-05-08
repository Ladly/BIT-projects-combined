import {
	FETCH_SINGLE_USER_PROFILE_PENDING,
	FETCH_SINGLE_USER_PROFILE_FULFILLED,
	FETCH_SINGLE_USER_PROFILE_REJECTED
} from './constants'

const initialState = {
	fetchedUserProfile: null,
	fetchedUserProfileLoading: false,
	fetchedUserProfileSuccess: false,
	fetchedUserProfileError: false
} 

export const bookUsersDetailsPageReducer = (state = initialState, action) => {
	switch(action.type) {
	case FETCH_SINGLE_USER_PROFILE_PENDING:
		return {
			...state, 
			fetchedUserProfileLoading: true
		}
		break
	case FETCH_SINGLE_USER_PROFILE_FULFILLED:
		return {
			...state, 
			fetchedUserProfileLoading: false,
			fetchedUserProfileSuccess: true,
			fetchedUserProfile: action.payload
		}
	case FETCH_SINGLE_USER_PROFILE_REJECTED: 
		return {
			...state, 
			fetchedUserProfileLoading: false,
			fetchedUserProfileSuccess: false,
			fetchedUserProfileError: true
		}
		break
	default: 
		return state
	}
}
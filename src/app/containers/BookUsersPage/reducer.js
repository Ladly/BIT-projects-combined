import {
	FETCH_BOOK_USERS_PENDING,
	FETCH_BOOK_USERS_FULFILLED,
	FETCH_BOOK_USERS_REJECTED
} from './constants'

const initialState = {
	fetchedBookUsers: [],
	fetchedBookUsersLoading: false,
	fetchedBookUsersSuccess: false,
	fetchedBookUserssError: false
} 

export const bookUsersPageReducer = (state = initialState, action) => {
	switch(action.type) {
	case FETCH_BOOK_USERS_PENDING:
		return {
			...state, 
			fetchedBookUsersLoading: true
		}
		break
	case FETCH_BOOK_USERS_FULFILLED:
		return {
			...state, 
			fetchedBookUsersLoading: false,
			fetchedBookUsersSuccess: true,
			fetchedBookUsers: action.payload
		}
	case FETCH_BOOK_USERS_REJECTED: 
		return {
			...state, 
			fetchedBookUsersLoading: false,
			fetchedBookUsersSuccess: false,
			fetchedBookUserssError: true
		}
		break
	default: 
		return state
	}
}
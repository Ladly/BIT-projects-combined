import {
	FETCH_BOOK_TEXT_POST_PENDING,
	FETCH_BOOK_TEXT_POST_FULFILLED,
	FETCH_BOOK_TEXT_POST_REJECTED,

	FETCH_BOOK_IMAGE_POST_PENDING,
	FETCH_BOOK_IMAGE_POST_FULFILLED,
	FETCH_BOOK_IMAGE_POST_REJECTED,

	FETCH_BOOK_VIDEO_POST_PENDING,
	FETCH_BOOK_VIDEO_POST_FULFILLED,
	FETCH_BOOK_VIDEO_POST_REJECTED,

	FETCH_CURRENT_USER_PENDING,
	FETCH_CURRENT_USER_FULFILLED,
	FETCH_CURRENT_USER_REJECTED,

	DELETE_POST_PENDING,
	DELETE_POST_FULFILLED,
	DELETE_POST_REJECTED,
	
} from './constants'

const initialState = {
	fetchedBookTextPost: null,
	fetchedBookTextPostLoading: false,
	fetchedBookTextPostSuccess: false,
	fetchedBookTextPostError: false,
	
	fetchedBookImagePost: null,
	fetchedBookImagePostLoading: false,
	fetchedBookImagePostSuccess: false,
	fetchedBookImagePostError: false,
	
	fetchedBookVideoPost: null,
	fetchedBookVideoPostLoading: false,
	fetchedBookVideoPostSuccess: false,
	fetchedBookVideoPostError: false,
	
	fetchedCurrentUser: null,
	fetchedCurrentUserLoading: false,
	fetchedCurrentUserSuccess: false,
	fetchedCurrentUserError: false,

	deletedPost: null,
	deletedPostLoading: false,
	deletedPostSuccess: false,
	deletedPostError: false,
} 

export const bookPostDetailsReducer = (state = initialState, action) => {
	switch(action.type) {
	case FETCH_BOOK_TEXT_POST_PENDING:
		return {
			...state, 
			fetchedBookTextPostLoading: true
		}
		break
	case FETCH_BOOK_TEXT_POST_FULFILLED:
		return {
			...state, 
			fetchedBookTextPostLoading: false,
			fetchedBookTextPostSuccess: true,
			fetchedBookTextPost: action.payload
		}
		break
	case FETCH_BOOK_TEXT_POST_REJECTED: 
		return {
			...state, 
			fetchedBookTextPostLoading: false,
			fetchedBookTextPostSuccess: false,
			fetchedBookTextPostError: true
		}
		break

	case FETCH_BOOK_IMAGE_POST_PENDING:
		return {
			...state, 
			fetchedBookImagePostLoading: true
		}
		break
	case FETCH_BOOK_IMAGE_POST_FULFILLED:
		return {
			...state, 
			fetchedBookImagePostLoading: false,
			fetchedBookImagePostSuccess: true,
			fetchedBookImagePost: action.payload
		}
		break
	case FETCH_BOOK_IMAGE_POST_REJECTED: 
		return {
			...state, 
			fetchedBookImagePostLoading: false,
			fetchedBookImagePostSuccess: false,
			fetchedBookImagePostError: true
		}
		break

	case FETCH_BOOK_VIDEO_POST_PENDING:
		return {
			...state, 
			fetchedBookVideoPostLoading: true
		}
		break
	case FETCH_BOOK_VIDEO_POST_FULFILLED:
		return {
			...state, 
			fetchedBookVideoPostLoading: false,
			fetchedBookVideoPostSuccess: true,
			fetchedBookVideoPost: action.payload
		}
		break
	case FETCH_BOOK_VIDEO_POST_REJECTED: 
		return {
			...state, 
			fetchedBookVideoPostLoading: false,
			fetchedBookVideoPostSuccess: false,
			fetchedBookVideoPostError: true
		}
		break

	case FETCH_CURRENT_USER_PENDING:
		return {
			...state, 
			fetchedCurrentUserLoading: true
		}
		break
	case FETCH_CURRENT_USER_FULFILLED:
		return {
			...state, 
			fetchedCurrentUserLoading: false,
			fetchedCurrentUserSuccess: true,
			fetchedCurrentUser: action.payload
		}
		break
	case FETCH_CURRENT_USER_REJECTED: 
		return {
			...state, 
			fetchedCurrentUserLoading: false,
			fetchedCurrentUserSuccess: false,
			fetchedCurrentUserError: true
		}
		break

	case DELETE_POST_PENDING:
		return {
			...state, 
			deletedPostLoading: true
		}
		break
	case DELETE_POST_FULFILLED:
		return {
			...state, 
			deletedPostLoading: false,
			deletedPostSuccess: true,
			deletedPost: action.payload
		}
		break
	case DELETE_POST_REJECTED: 
		return {
			...state, 
			deletedPostLoading: false,
			deletedPostSuccess: false,
			deletedPostError: true
		}
		break
	default: 
		return state
	}
}
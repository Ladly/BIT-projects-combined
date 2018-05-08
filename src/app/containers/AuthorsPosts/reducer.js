import {
	FETCH_AUTHORS_POSTS_PENDING,
	FETCH_AUTHORS_POSTS_FULFILLED,
	FETCH_AUTHORS_POSTS_REJECTED,

	FETCH_AUTHOR_PENDING,
	FETCH_AUTHOR_FULFILLED,
	FETCH_AUTHOR_REJECTED
} from './constants'

const initialState = {  
	fetchedAuthorsPosts: [],
	fetchedAuthorsPostsLoading: false,
	fetchedAuthorsPostsSuccess: false,
	fetchedAuthorsPostsError: false,

	fetchedAuthor: null,
	fetchedAuthorLoading: false,
	fetchedAuthorSuccess: false,
	fetchedAuthorError: false
}

export const authorsPostsReducer = (state = initialState, action) => {
	switch(action.type){
	case FETCH_AUTHORS_POSTS_PENDING:
		return {
			...state,
			fetchedAuthorsPostsLoading: true
		}
		break
	case FETCH_AUTHORS_POSTS_FULFILLED:
		return {
			...state,
			fetchedAuthorsPostsLoading: false,
			fetchedAuthorsPostsSuccess: true,
			fetchedAuthorsPosts: action.payload
		}
		break
	case FETCH_AUTHORS_POSTS_REJECTED:
		return {
			...state,
			fetchedAuthorsPostsLoading: false,
			fetchedAuthorsPostsSuccess: false,
			fetchedAuthorsPostsError: true
		}
		break

	case FETCH_AUTHOR_PENDING:
		return {
			...state,
			fetchedAuthorLoading: true
		}
		break
	case FETCH_AUTHOR_FULFILLED:
		return {
			...state,
			fetchedAuthorLoading: false,
			fetchedAuthorSuccess: true,
			fetchedAuthor: action.payload
		}
		break
	case FETCH_AUTHOR_REJECTED:
		return {
			...state,
			fetchedAuthorLoading: false,
			fetchedAuthorSuccess: false,
			fetchedAuthorError: true
		}
		break
	default:
		return state
	}
}

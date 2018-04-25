import {
    FETCH_BOOK_POSTS_PENDING,
    FETCH_BOOK_POSTS_FULFILLED,
    FETCH_BOOK_POSTS_REJECTED
} from './constants'

const initialState = {
    fetchedBookShows: [],
    fetchedBookShowsLoading: false,
    fetchedBookShowsSuccess: false,
    fetchedBookShowsError: false
} 

export const bookFeedReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BOOK_POSTS_PENDING:
            return {
                ...state, 
                fetchedBookShowsLoading: true
            }
            break
        case FETCH_BOOK_POSTS_FULFILLED:
            return {
                ...state, 
                fetchedBookShowsLoading: false,
                fetchedBookShowsSuccess: true,
                fetchedBookShows: action.payload
            }
        case FETCH_BOOK_POSTS_REJECTED: 
            return {
                ...state, 
                fetchedBookShowsLoading: false,
                fetchedBookShowsSuccess: false,
                fetchedBookShowsError: true
            }
            break
        default: 
            return state
    }
}
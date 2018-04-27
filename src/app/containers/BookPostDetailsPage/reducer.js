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
        default: 
            return state
    }
}
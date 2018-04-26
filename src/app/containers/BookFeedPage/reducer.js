import {
    FETCH_BOOK_POSTS_PENDING,
    FETCH_BOOK_POSTS_FULFILLED,
    FETCH_BOOK_POSTS_REJECTED,
    
    DISPLAY_TEXT_MODAL,
    HIDE_TEXT_MODAL,
    DISPLAY_IMAGE_MODAL,
    HIDE_IMAGE_MODAL,
    DISPLAY_VIDEO_MODAL,
    HIDE_VIDEO_MODAL
} from './constants'

const initialState = {
    fetchedBookShows: [],
    fetchedBookShowsLoading: false,
    fetchedBookShowsSuccess: false,
    fetchedBookShowsError: false,
    displayTextModal: false,
    displayImageModal: false,
    displayVideoModal: false
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
            break
        case FETCH_BOOK_POSTS_REJECTED: 
            return {
                ...state, 
                fetchedBookShowsLoading: false,
                fetchedBookShowsSuccess: false,
                fetchedBookShowsError: true
            }
        case DISPLAY_TEXT_MODAL: 
            return {
                ...state,
                displayTextModal: true
            }
            break
        case HIDE_TEXT_MODAL: 
            return {
                ...state, 
                displayTextModal: false

            }
            break
        case DISPLAY_IMAGE_MODAL: 
            return {
                ...state,
                displayImageModal: true
            }
            break
        case HIDE_IMAGE_MODAL: 
            return {
                ...state, 
                displayImageModal: false
            }
            break
        case DISPLAY_VIDEO_MODAL: 
            return {
                ...state,
                displayVideoModal: true
            }
            break
        case HIDE_VIDEO_MODAL: 
            return {
                ...state, 
                displayVideoModal: false
            }
            break
        default: 
            return state
    }
}
import { 
    FETCH_BOOK_POSTS,
    DISPLAY_TEXT_MODAL,
    HIDE_TEXT_MODAL
} from './constants'

import { BookFeedServices } from './../../../../services/BookFeedServices'

export const fetchBookPosts = () => {
    return {
        type: FETCH_BOOK_POSTS,
        payload: BookFeedServices.fetchBookPosts()
    }
}

export const displayTextModal = () => {
    return {
        type: DISPLAY_TEXT_MODAL,
        payload: true
    }
}

export const hideTextModal = () => {
    return {
        type: HIDE_TEXT_MODAL,
        payload: false
    }
}
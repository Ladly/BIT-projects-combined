import { 
    FETCH_BOOK_TEXT_POST,
    FETCH_BOOK_IMAGE_POST,
    FETCH_BOOK_VIDEO_POST,
    FETCH_CURRENT_USER,
    DELETE_POST
} from './constants'

import { BookPostDetailsService } from './../../../../services/BookPostDetailsService'
import { BookProfileService } from './../../../../services/BookProfileService'
import { BookFeedServices } from './../../../../services/BookFeedServices'

export const fetchBookTextPost = (id) => {
    return {
        type: FETCH_BOOK_TEXT_POST,
        payload: BookPostDetailsService.fetchSingleTextPost(id)
    }
}

export const fetchBookImagePost = (id) => {
    return {
        type: FETCH_BOOK_IMAGE_POST,
        payload: BookPostDetailsService.fetchSingleImagePost(id)
    }
}

export const fetchBookVideoPost = (id) => {
    return {
        type: FETCH_BOOK_VIDEO_POST,
        payload: BookPostDetailsService.fetchSingleVideoPost(id)
    }
}

export const fetchCurrentUser = () => {
    return {
        type: FETCH_CURRENT_USER,
        payload: BookProfileService.fetchBookProfile()
    }
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: BookFeedServices.deleteBookPost(id)
    }
}


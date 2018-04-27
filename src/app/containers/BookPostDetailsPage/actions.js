import { 
    FETCH_BOOK_TEXT_POST,
    FETCH_BOOK_IMAGE_POST,
    FETCH_BOOK_VIDEO_POST
} from './constants'

import { BookPostDetailsService } from './../../../../services/BookPostDetailsService'

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


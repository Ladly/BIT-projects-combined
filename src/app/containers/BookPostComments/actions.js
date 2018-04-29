import {
    FETCH_COMMENTS,
} from  './constants'

import { BookPostDetailsService } from './../../../../services/BookPostDetailsService'

export const fetchComments = (id) => {
    return {
        type: FETCH_COMMENTS,
        payload: BookPostDetailsService.fetchCommentsOnBookPost(id)
    }
}
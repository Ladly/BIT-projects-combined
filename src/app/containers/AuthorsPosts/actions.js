import {
    FETCH_AUTHORS_POSTS,
    FETCH_AUTHOR
} from './constants'

import { BlogPostService } from './../../../../services/BlogPostService'

export const fetchAuthorsPosts = (id) => {
    return {
        type: FETCH_AUTHORS_POSTS,
        payload: BlogPostService.fetchAuthorsPosts(id)
    }
}

export const fetchAuthor = (id) => {
    return {
        type: FETCH_AUTHOR,
        payload: BlogPostService.fetchAuthor(id)
    }
}
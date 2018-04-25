import { FETCH_BOOK_POSTS } from './constants'

import { BookPostServices } from './../../../../services/BookPostServices'

export const fetchBookPosts = () => {
    return {
        type: FETCH_BOOK_POSTS,
        payload: BookPostServices.fetchBookPosts()
    }
}
import { 
    BOOK_POST_TEXT_URL,
    BOOK_POST_IMAGE_URL,
    BOOK_POST_VIDEO_URL
} from './../utils/constants'

import { GETOPTIONS } from './../utils/restOptions'
import { 
    createBookTextPost,
    createBookImagePost,
    createBookVideoPost,
 } from './../utils/helpers'


class BookPostDetailsService {
    static fetchSingleTextPost = (id) => {
        return fetch(`${BOOK_POST_TEXT_URL}/${id}`, GETOPTIONS)
            .then(post => post.json())
            .then(post => createBookTextPost(post))
    }

    static fetchSingleImagePost = (id) => {
        return fetch(`${BOOK_POST_IMAGE_URL}/${id}`, GETOPTIONS)
            .then(post => post.json())
            .then(post => createBookImagePost(post))
    }

    static fetchSingleVideoPost = (id) => {
        return fetch(`${BOOK_POST_VIDEO_URL}/${id}`, GETOPTIONS)
            .then(post => post.json())
            .then(post => createBookVideoPost(post))
    }
}

export { BookPostDetailsService }
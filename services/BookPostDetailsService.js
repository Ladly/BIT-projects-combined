import { 
    BOOK_POST_TEXT_URL,
    BOOK_POST_IMAGE_URL,
    BOOK_POST_VIDEO_URL,
    BOOK_POST_POST_COMMENT_URL
} from './../utils/constants'

import { 
    GETOPTIONS,
    CREATEPOSTOPTIONS 
} from './../utils/restOptions'
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

    static postCommentOnBookPost = (data, id) => {
        console.log(data)
        return fetch(BOOK_POST_POST_COMMENT_URL, CREATEPOSTOPTIONS({
            body: data, 
            postId: id
        })) 
            .then(response => response.json())
    }
}

export { BookPostDetailsService }
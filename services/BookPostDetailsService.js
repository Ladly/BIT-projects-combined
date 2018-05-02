import { 
    BOOK_POST_TEXT_URL,
    BOOK_POST_IMAGE_URL,
    BOOK_POST_VIDEO_URL,
    BOOK_POST_COMMENTS_URL
} from './../utils/constants'

import { 
    GETOPTIONS,
    CREATEPOSTOPTIONS 
} from './../utils/restOptions'

import { 
    createBookTextPost,
    createBookImagePost,
    createBookVideoPost,
    createBookPostComments
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
        return fetch(BOOK_POST_COMMENTS_URL, CREATEPOSTOPTIONS({
            body: data, 
            postId: id
        })) 
            .then(response => response.json())
    }

    static fetchCommentsOnBookPost = (id) => {
        return fetch(`${BOOK_POST_COMMENTS_URL}?postId=${id}`, GETOPTIONS) 
            .then(comments => comments.json())            
            .then(comments => createBookPostComments(comments)) 
            .then(comments => comments.reverse())                     
    }
}

export { BookPostDetailsService }
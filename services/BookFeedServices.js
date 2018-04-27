import { 
    BOOK_GET_POSTS_URL,
    BOOK_POST_TEXT_URL,
    BOOK_POST_IMAGE_URL,
    BOOK_POST_VIDEO_URL
} from './../utils/constants'

import { GETOPTIONS } from './../utils/restOptions'
import { CREATEOPTIONS } from './../utils/restOptions'

import {
    createBookPosts,
    createBookTextPost,
    createBookImagePost,
    createBookVideoPost
} from './../utils/helpers'

class BookFeedServices {
    static fetchBookPosts = () => {
        return fetch(BOOK_GET_POSTS_URL, GETOPTIONS)
            .then(posts => posts.json())
            .then(posts => createBookPosts(posts, createBookTextPost, createBookImagePost,createBookVideoPost))
    }

    static postTextData = (data) => {
        return fetch(BOOK_POST_TEXT_URL, CREATEOPTIONS({text: data}))
            .then(response => response.json())
    }

    static postImageData = (data) => {
        return fetch(BOOK_POST_IMAGE_URL, CREATEOPTIONS({imageUrl: data}))
            .then(response => response.json())
    }

    static postVideoData = (data) => {
        return fetch(BOOK_POST_VIDEO_URL, CREATEOPTIONS({videoUrl: data}))
            .then(response => response.json())
    }
}


export { BookFeedServices }
import { 
    FETCH_BOOK_POSTS,
    DISPLAY_TEXT_MODAL,
    HIDE_TEXT_MODAL,
    DISPLAY_IMAGE_MODAL,
    HIDE_IMAGE_MODAL,
    DISPLAY_VIDEO_MODAL,
    HIDE_VIDEO_MODAL,
    
    DISPLAY_ALL_POSTS,
    DISPLAY_TEXT_POSTS,
    DISPLAY_IMAGE_POSTS,
    DISPLAY_VIDEO_POSTS
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

export const displayImageModal = () => {
    return {
        type: DISPLAY_IMAGE_MODAL,
        payload: true
    }
}

export const hideImageModal = () => {
    return {
        type: HIDE_IMAGE_MODAL,
        payload: false
    }
}

export const displayVideoModal = () => {
    return {
        type: DISPLAY_VIDEO_MODAL,
        payload: true
    }
}

export const hideVideoModal = () => {
    return {
        type: HIDE_VIDEO_MODAL,
        payload: false
    }
}

export const displayAllPosts = () => {
    return {
        type: DISPLAY_ALL_POSTS,
        payload: "displayAllPosts"
    }
}
export const displayTextPosts = () => {
    return {
        type: DISPLAY_TEXT_POSTS,
        payload: "displayTextPosts"
    }
}
export const displayImagePosts = () => {
    return {
        type: DISPLAY_IMAGE_POSTS,
        payload: "displayImagePosts"
    }
}
export const displayVideoPosts = () => {
    return {
        type: DISPLAY_VIDEO_POSTS,
        payload: "displayVideoPosts"
    }
}
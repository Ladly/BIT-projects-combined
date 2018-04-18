import {
    FETCH_BLOG_POSTS_PENDING,
    FETCH_BLOG_POSTS_FULFILLED,
    FETCH_BLOG_POSTS_REJECTED
} from './constants'

const initialState = {
    fetchedBlogPosts: [],
    fetchedBlogPostsLoading: false,
    fetchedBlogPostsSuccess: false,
    fetchedBlogPostsError: false
}

export const blogPageReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_BLOG_POSTS_PENDING:
            return {
                ...state,
                fetchedBlogPostsLoading: true
            }
            break
        case FETCH_BLOG_POSTS_FULFILLED:
            return {
                ...state,
                fetchedBlogPostsLoading: false,
                fetchedBlogPostsSuccess: true,
                fetchedBlogPosts: action.payload
            }
            break
        case FETCH_BLOG_POSTS_REJECTED:
            return {
                ...state,
                fetchedBlogPostsLoading: false,
                fetchedBlogPostsSuccess: false,
                fetchedBlogPostsError: true
            }
            break
        default:
            return state
    }
}

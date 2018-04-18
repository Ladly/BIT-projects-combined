import {
    FETCH_BLOG_POST_PENDING,
    FETCH_BLOG_POST_FULFILLED,
    FETCH_BLOG_POST_REJECTED
} from './constants'

const initialState = {
    fetchedBlogPost: null,
    fetchedBlogPostLoading: false,
    fetchedBlogPostSuccess: false,
    fetchedBlogPostError: false
}

export const blogPostDetailsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_BLOG_POST_PENDING:
            return {
                ...state,
                fetchedBlogPostLoading: true
            }
            break
        case FETCH_BLOG_POST_FULFILLED:
            return {
                ...state,
                fetchedBlogPostLoading: false,
                fetchedBlogPostSuccess: true,
                fetchedBlogPost: action.payload
            }
            break
        case FETCH_BLOG_POST_REJECTED:
            return {
                ...state,
                fetchedBlogPostLoading: false,
                fetchedBlogPostSuccess: false,
                fetchedBlogPostError: true
            }
            break
        default:
            return state
    }
}

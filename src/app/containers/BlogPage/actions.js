import {
    FETCH_BLOG_POSTS
} from './constants'

import { BlogPostService } from './../../../../services/BlogPostService'

export const fetchBlogPosts = () => {
    return {
        type: FETCH_BLOG_POSTS,
        payload: BlogPostService.fetchBlogPosts()
    }
}
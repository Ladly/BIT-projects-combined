import { FETCH_BLOG_POST } from './constants'

import { BlogPostService } from './../../../../services/BlogPostService'

export const fetchBlogPost = (id) => {
    return {
        type: FETCH_BLOG_POST,
        payload: BlogPostService.fetchBlogPost(id)
    }
}
import { BLOG_POSTS } from './../utils/constants'
import { 
    createBlogPosts,
    getRandomPosts
 } from './../utils/helpers'

class BlogPostService {
    static fetchBlogPosts = () => {
        return fetch(BLOG_POSTS)
            .then(blogPosts => blogPosts.json())            
            .then(blogPosts => getRandomPosts(blogPosts))
            .then(blogPosts => createBlogPosts(blogPosts))
    }
}

export { BlogPostService }
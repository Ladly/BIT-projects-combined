import { BLOG_POSTS } from './../utils/constants'
import { 
    createBlogPosts,
    createBlogPost,
    getRandomPosts
 } from './../utils/helpers'

class BlogPostService {
    static fetchBlogPosts = () => {
        return fetch(BLOG_POSTS)
            .then(blogPosts => blogPosts.json())            
            .then(blogPosts => getRandomPosts(blogPosts))
            .then(blogPosts => createBlogPosts(blogPosts))
    }

    static fetchBlogPost = (id) => {
        return fetch(`${BLOG_POSTS}/${id}`)
            .then(blogPost => blogPost.json())
            .then(blogPost => createBlogPost(blogPost))
    }
}

export { BlogPostService }
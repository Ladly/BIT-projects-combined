import { 
	BLOG_POSTS, 
	BLOG_POST_AUTHOR 
} from './../utils/constants'

import { 
	createBlogPosts,
	createBlogPost,
	getRandomPosts,
	createBlogPostAuthor,
	createBlogPostAuthors	
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

	static fetchAuthorsPosts = (id) => {
		return fetch(`${BLOG_POSTS}?userId=${id}`)
			.then(posts => posts.json())
			.then(posts => posts.slice(0, 3))
	}

	static fetchAuthor = (id) => {
		return fetch(`${BLOG_POST_AUTHOR}/${id}`)
			.then(author => author.json())
			.then(author => createBlogPostAuthor(author))
	}

	static fetchAuthors = () => {
		return fetch(BLOG_POST_AUTHOR)
			.then(authors => authors.json())
			.then(authors => createBlogPostAuthors(authors))
	}
}

export { BlogPostService }
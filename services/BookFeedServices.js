import { 
	BOOK_GET_POSTS_URL,
	BOOK_POST_TEXT_URL,
	BOOK_POST_IMAGE_URL,
	BOOK_POST_VIDEO_URL,
	BOOK_DELETE_POSTS_URL
} from './../utils/constants'

import { 
	GETOPTIONS,
	CREATEPOSTOPTIONS, 
	DELETEOPTIONS 
} from './../utils/restOptions'


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
		return fetch(BOOK_POST_TEXT_URL, CREATEPOSTOPTIONS({text: data}))
			.then(response => response.json())
	}

	static postImageData = (data) => {
		return fetch(BOOK_POST_IMAGE_URL, CREATEPOSTOPTIONS({imageUrl: data}))
			.then(response => response.json())
	}

	static postVideoData = (data) => {
		return fetch(BOOK_POST_VIDEO_URL, CREATEPOSTOPTIONS({videoUrl: data}))
			.then(response => response.json())
	}

	static deleteBookPost = (id) => {
		return fetch(`${BOOK_DELETE_POSTS_URL}/${id}`, DELETEOPTIONS)
			.then(res => console.log(res))
	}
}

export { BookFeedServices }
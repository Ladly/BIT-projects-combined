import { FETCH_AUTHORS } from './constants'

import { BlogPostService } from './../../../../services/BlogPostService'

export const fetchAuthors = () => {
	return {
		type: FETCH_AUTHORS,
		payload: BlogPostService.fetchAuthors()
	}
}
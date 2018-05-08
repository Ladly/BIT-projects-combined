import {
	FETCH_AUTHOR
} from './constants'

import { BlogPostService } from './../../../../services/BlogPostService'

export const fetchAuthor = (id) => {
	return {
		type: FETCH_AUTHOR,
		payload: BlogPostService.fetchAuthor(id)
	}
}
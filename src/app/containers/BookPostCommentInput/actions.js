import { POST_DATA } from './constants'

import { BookPostDetailsService } from './../../../../services/BookPostDetailsService'

export const postData = (data, id) => {
	return {
		type: POST_DATA,
		payload: BookPostDetailsService.postCommentOnBookPost(data, id)
	}
}
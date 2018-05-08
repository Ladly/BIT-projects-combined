import { POST_IMAGE_DATA } from './constants'

import { BookFeedServices } from './../../../../services/BookFeedServices'

export const postImageData = data => {
	return {
		type: POST_IMAGE_DATA,
		payload: BookFeedServices.postImageData(data)
	}
}
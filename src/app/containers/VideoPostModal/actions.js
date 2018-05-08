import { POST_VIDEO_DATA } from './constants'

import { BookFeedServices } from './../../../../services/BookFeedServices'

export const postVideoData = data => {
	return {
		type: POST_VIDEO_DATA,
		payload: BookFeedServices.postVideoData(data)
	}
}
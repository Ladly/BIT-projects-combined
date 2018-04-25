import { POST_TEXT_DATA } from './constants'

import { BookFeedServices } from './../../../../services/BookFeedServices'

export const postTextData = data => {
    return {
        type: POST_TEXT_DATA,
        payload: BookFeedServices.postTextData(data)
    }
}
import {
    FETCH_PROFILE,
} from  './constants'

import { BookProfileService } from './../../../../services/BookProfileService'

export const fetchProfile = () => {
    return {
        type: FETCH_PROFILE,
        payload: BookProfileService.fetchBookProfile()
    }
}
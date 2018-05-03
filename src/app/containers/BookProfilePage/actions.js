import {
    FETCH_PROFILE,
    DISPLAY_UPDATE_PROFILE_MODAL,
    HIDE_UPDATE_PROFILE_MODAL
} from  './constants'

import { BookProfileService } from './../../../../services/BookProfileService'

export const fetchProfile = () => {
    return {
        type: FETCH_PROFILE,
        payload: BookProfileService.fetchBookProfile()
    }
}

export const displayUpdateProfileModal = () => {
    return {
        type: DISPLAY_UPDATE_PROFILE_MODAL,
        payload: true
    }
}

export const hideUpdateProfileModal = () => {
    return {
        type: HIDE_UPDATE_PROFILE_MODAL,
        payload: false
    }
}
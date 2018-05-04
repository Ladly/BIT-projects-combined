import { FETCH_SINGLE_USER_PROFILE } from './constants'

import { BookUsersService } from './../../../../services/BookUsersService'

export const fetchUserProfile = (id) => {
    return {
        type: FETCH_SINGLE_USER_PROFILE,
        payload: BookUsersService.fetchBookSingleProfile(id)
    }
}
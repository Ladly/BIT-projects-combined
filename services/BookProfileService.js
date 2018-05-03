import { 
    BOOK_PROFILE_URL,
    UPDATE_BOOK_PROFILE_URL
} from './../utils/constants'

import { 
    createBookProfile
 } from './../utils/helpers'

import { 
    GETOPTIONS,
    CREATEPUTOPTIONS
} from './../utils/restOptions'

class BookProfileService {
    static fetchBookProfile = () => {
        return fetch(BOOK_PROFILE_URL, GETOPTIONS)
            .then(profile => profile.json())
            .then(profile => createBookProfile(profile))
    }

    static updateProfile = (data) => {
        return fetch(UPDATE_BOOK_PROFILE_URL, CREATEPUTOPTIONS(data))
    }
}

export { BookProfileService } 
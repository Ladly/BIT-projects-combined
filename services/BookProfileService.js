import { BOOK_PROFILE_URL } from './../utils/constants'

import { 
    createBookProfile
 } from './../utils/helpers'

import { 
    GETOPTIONS,
} from './../utils/restOptions'

class BookProfileService {
    static fetchBookProfile = () => {
        return fetch(BOOK_PROFILE_URL, GETOPTIONS)
            .then(profile => profile.json())
            .then(profile => createBookProfile(profile))
    }
}

export { BookProfileService } 
import { 
    BOOK_USERS_URL
} from './../utils/constants'

import { GETOPTIONS } from './../utils/restOptions'

import {
    createBookUsers,
} from './../utils/helpers'

class BookUsersService {
    static getBookUsers = () => {
        return fetch(BOOK_USERS_URL, GETOPTIONS)
            .then(users => users.json())
            .then(users => createBookUsers(users))
    }
}

export { BookUsersService }


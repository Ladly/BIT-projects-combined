import { 
	BOOK_USERS_URL
} from './../utils/constants'

import { GETOPTIONS } from './../utils/restOptions'

import {
	createBookUsers,
	createBookSingleUserProfile
} from './../utils/helpers'

class BookUsersService {
	static getBookUsers = () => {
		return fetch(BOOK_USERS_URL, GETOPTIONS)
			.then(users => users.json())
			.then(users => createBookUsers(users))
	}

	static fetchBookSingleProfile = (id) => {
		return fetch(`${BOOK_USERS_URL}/${id}`, GETOPTIONS)
			.then(profile => profile.json())
			.then(profile => createBookSingleUserProfile(profile))
	}
}

export { BookUsersService }


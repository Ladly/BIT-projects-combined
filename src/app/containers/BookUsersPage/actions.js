import { FETCH_BOOK_USERS } from './constants'

import { BookUsersService } from './../../../../services/BookUsersService'

export const fetchUsers = () => {
	return {
		type: FETCH_BOOK_USERS,
		payload: BookUsersService.getBookUsers()
	}
}
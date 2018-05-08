import { SHOW_USERS_URL } from './../utils/constants'

import {
	createShowUser,
	formatDate,
	hideEmail,
} from './../utils/helpers'

class ShowUsersService {
	static fetchShowUsers = () => {
		return fetch(SHOW_USERS_URL)
			.then(users => users.json())
			.then(users => {
				const { results } = users
				return createShowUser(results)
			})
	}
}

export { ShowUsersService }
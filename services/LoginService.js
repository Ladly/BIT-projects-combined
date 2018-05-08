import { 
	USER_REGISTRATION_URL,
	USER_LOGIN_URL
} from './../utils/constants'

import { 
	createUser,
	loginUser 
} from './../utils/restOptions'


class LoginService {

	static registerNewUser = (data) => {
		return fetch(USER_REGISTRATION_URL, createUser(data))
			.then(response => response.json())
	}

	static userLogin = (data) => {
		return fetch(USER_LOGIN_URL, loginUser(data))
			.then(response => response.json())
	}
}

export { LoginService }
import {
	DISPLAY_LOGIN,
	DISPLAY_REGISTER,

	REGISTER_USER_PENDING,
	REGISTER_USER_FULFILLED,
	REGISTER_USER_REJECTED,

	USER_LOGIN_PENDING,
	USER_LOGIN_FULFILLED,
	USER_LOGIN_REJECTED
} from './constants'

const initialState = {
	displayLogin: true,
	displayRegister: false,

	registeredUser: null,
	registeredUserLoading: false,
	registeredUserSuccess: false,
	registeredUserError: false,

	userLoggedIn: null,
	userLoggedInLoading: false,
	userLoggedInSuccess: false,
	userLoggedInError: false,
} 

export const loginPageReducer = (state = initialState, action) => {
	switch(action.type) {
	case DISPLAY_LOGIN:
		return {
			...state, 
			displayLogin: true,
			displayRegister: false
		}
		break
	case DISPLAY_REGISTER:
		return {
			...state, 
			displayLogin: false,
			displayRegister: true,
		}
		break

	case REGISTER_USER_PENDING:
		return {
			...state, 
			registeredUserLoading: true
		}
		break
	case REGISTER_USER_FULFILLED:
		return {
			...state, 
			registeredUserLoading: false,
			registeredUserSuccess: true,
			registeredUser: action.payload
		}
		break
	case REGISTER_USER_REJECTED:
		return {
			...state, 
			registeredUserLoading: false,
			registeredUserSuccess: false,
			registeredUserError: true,
		}
		break

	case USER_LOGIN_PENDING:
		return {
			...state, 
			userLoggedInLoading: true
		}
		break
	case USER_LOGIN_FULFILLED:
		return {
			...state, 
			userLoggedInLoading: false,
			userLoggedInSuccess: true,
			userLoggedIn: action.payload
		}
		break
	case USER_LOGIN_REJECTED:
		return {
			...state, 
			userLoggedInLoading: false,
			userLoggedInSuccess: false,
			userLoggedInError: true,
		}
		break
	default: 
		return state
	}
}
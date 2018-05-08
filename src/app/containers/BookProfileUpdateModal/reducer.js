import { 
	UPDATE_PROFILE_PENDING,
	UPDATE_PROFILE_FULFILLED,
	UPDATE_PROFILE_REJECTED,
} from './constants'

const initialState = {
	updateProfile: null,
	updateProfileLoading: false,
	updateProfileSuccess: false,
	updateProfileError: false,
}

export const bookProfileUpdateModalReducer = (state = initialState, action) => {
	switch(action.type) {
	case UPDATE_PROFILE_PENDING:
		return {
			...state,
			updateProfileLoading: true
		}
		break
	case UPDATE_PROFILE_FULFILLED:
		return {
			...state,
			updateProfileLoading:false,
			updateProfileSuccess: true,
			updateProfile: action.payload
		}            
		break
	case UPDATE_PROFILE_REJECTED:
		return {
			...state,
			updateProfileLoading: false,
			updateProfileSuccess: false,
			updateProfileError: true
		}
		break
	default:
		return state
	}
}
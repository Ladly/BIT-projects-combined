import { 
    FETCH_PROFILE_PENDING,
    FETCH_PROFILE_FULFILLED,
    FETCH_PROFILE_REJECTED
} from './constants'

const initialState = {
    fetchedProfile: null,
    fetchedProfileLoading: false,
    fetchedProfileSuccess: false,
    fetchedProfileError: false
}

export const bookProfilePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROFILE_PENDING:
            return {
                ...state,
                fetchedProfileLoading: true
            }
            break
        case FETCH_PROFILE_FULFILLED:
            return {
                ...state,
                fetchedProfileLoading:false,
                fetchedProfileSuccess: true,
                fetchedProfile: action.payload
            }            
            break
        case FETCH_PROFILE_REJECTED:
            return {
                ...state,
                fetchedProfileLoading: false,
                fetchedProfileSuccess: false,
                fetchedProfileError: true
            }
            break
        default:
            return state
    }
}
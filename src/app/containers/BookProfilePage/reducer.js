import { 
    FETCH_PROFILE_PENDING,
    FETCH_PROFILE_FULFILLED,
    FETCH_PROFILE_REJECTED,

    DISPLAY_UPDATE_PROFILE_MODAL,
    HIDE_UPDATE_PROFILE_MODAL
} from './constants'

const initialState = {
    fetchedProfile: null,
    fetchedProfileLoading: false,
    fetchedProfileSuccess: false,
    fetchedProfileError: false,

    displayUpdateProfileModal: false,
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
            
        case DISPLAY_UPDATE_PROFILE_MODAL:
            return {
                ...state,
                displayUpdateProfileModal: action.payload
            }
            break
        case HIDE_UPDATE_PROFILE_MODAL:
            return {
                ...state,
                displayUpdateProfileModal: action.payload
            }
            break
        default:
            return state
    }
}
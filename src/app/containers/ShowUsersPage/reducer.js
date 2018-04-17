import {
    FETCH_SHOW_USERS_PENDING,
    FETCH_SHOW_USERS_FULFILLED,
    FETCH_SHOW_USERS_REJECTED,
    SWITCH_VIEW
} from './constants'

const initialState = {
    fetchedShowUsers: [],
    fetchedShowUsersLoading: false,
    fetchedShowUsersSuccess: false,
    fetchedShowUsersError: false,
    displayCardView: false
}

export const showUsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SHOW_USERS_PENDING:
            return {
                ...state, 
                fetchedShowUsersLoading: true
            }
        case FETCH_SHOW_USERS_FULFILLED:
            return {
                ...state,
                fetchedShowUsersLoading: false,
                fetchedShowUsersSuccess: true,
                fetchedShowUsers: action.payload
            }
        case FETCH_SHOW_USERS_REJECTED:
            return {
                fetchedShowUsersLoading: false,
                fetchedShowUsersSuccess: false,
                fetchedShowUsersError: true
            }

            case SWITCH_VIEW:
            return {
                ...state,
                displayCardView: action.payload
            }
        default:
            return state
    }
}
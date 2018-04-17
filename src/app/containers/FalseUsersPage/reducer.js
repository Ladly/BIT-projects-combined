import {
    FETCH_FALSE_USERS_PENDING,
    FETCH_FALSE_USERS_FULFILLED,
    FETCH_FALSE_USERS_REJECTED,
    SWITCH_VIEW
} from './constants'

const initialState = {
    fetchedFalseUsers: [],
    fetchedFalseUsersLoading: false,
    fetchedFalseUsersSuccess: false,
    fetchedFalseUsersError: false,
    displayCardView: false
}

export const falseUsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FALSE_USERS_PENDING:
            return {
                ...state, 
                fetchedFalseUsersLoading: true
            }
        case FETCH_FALSE_USERS_FULFILLED:
            return {
                ...state,
                fetchedFalseUsersLoading: false,
                fetchedFalseUsersSuccess: true,
                fetchedFalseUsers: action.payload
            }
        case FETCH_FALSE_USERS_REJECTED:
            return {
                fetchedFalseUsersLoading: false,
                fetchedFalseUsersSuccess: false,
                fetchedFalseUsersError: true
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
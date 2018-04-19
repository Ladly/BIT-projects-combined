import {
    FETCH_AUTHOR_PENDING,
    FETCH_AUTHOR_FULFILLED,
    FETCH_AUTHOR_REJECTED
} from './constants'

const initialState = {  
    fetchedAuthor: null,
    fetchedAuthorLoading: false,
    fetchedAuthorSuccess: false,
    fetchedAuthorError: false
}

export const blogPostAuthorDetailReducer = (state = initialState, action) => {
    switch(action.type){
            case FETCH_AUTHOR_PENDING:
            return {
                ...state,
                fetchedAuthorLoading: true
            }
            break
        case FETCH_AUTHOR_FULFILLED:
            return {
                ...state,
                fetchedAuthorLoading: false,
                fetchedAuthorSuccess: true,
                fetchedAuthor: action.payload
            }
            break
        case FETCH_AUTHOR_REJECTED:
            return {
                ...state,
                fetchedAuthorLoading: false,
                fetchedAuthorSuccess: false,
                fetchedAuthorError: true
            }
            break
        default:
            return state
    }
}

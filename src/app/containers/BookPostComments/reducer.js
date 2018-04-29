import { 
    FETCH_COMMENTS_PENDING,
    FETCH_COMMENTS_FULFILLED,
    FETCH_COMMENTS_REJECTED
} from './constants'

const initialState = {
    fetchedComments: [],
    fetchedCommentsLoading: false,
    fetchedCommentsSuccess: false,
    fetchedCommentsError: false
}

export const bookPostCommentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COMMENTS_PENDING:
            return {
                ...state,
                fetchedCommentsLoading: true
            }
            break;
        case FETCH_COMMENTS_FULFILLED:
            return {
                ...state,
                fetchedCommentsLoading:false,
                fetchedCommentsSuccess: true,
                fetchedComments: action.payload
            }            
            break;
        case FETCH_COMMENTS_REJECTED:
            return {
                ...state,
                fetchedCommentsLoading: false,
                fetchedCommentsSuccess: false,
                fetchedCommentsError: true
            }
            break;
        default:
            return state
    }
}
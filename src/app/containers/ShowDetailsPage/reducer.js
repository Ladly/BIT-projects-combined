import { 
    FETCH_SHOW_DETAILS_AND_CAST_PENDING,
    FETCH_SHOW_DETAILS_AND_CAST_FULFILLED,
    FETCH_SHOW_DETAILS_AND_CAST_REJECTED
} from './constants'

const initialState = {
    showDetailsAndCast: null,
    fetchedShowDetailsLoading: false,
    fetchedShowDetailsSuccess: false,
    fetchedShowDetailsError: false
}

export const showDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SHOW_DETAILS_AND_CAST_PENDING:
            return {
                ...state,
                fetchedShowDetailsLoading: true
            }
            break;
        case FETCH_SHOW_DETAILS_AND_CAST_FULFILLED:
            return {
                ...state,
                fetchedShowDetailsLoading:false,
                fetchedShowDetailsSuccess: true,
                showDetailsAndCast: action.payload
            }            
            break;
        case FETCH_SHOW_DETAILS_AND_CAST_REJECTED:
            return {
                ...state,
                fetchedShowDetailsLoading: false,
                fetchedShowDetailsSuccess: false,
                fetchedShowDetailsError: true
            }
            break;
        default:
            return state
    }
}
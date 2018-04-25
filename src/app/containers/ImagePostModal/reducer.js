import {
    POST_IMAGE_DATA_PENDING,
    POST_IMAGE_DATA_FULFILLED,
    POST_IMAGE_DATA_REJECTED
} from './constants'

const initialState = {
    postImageLoading: false,
    postImageSuccess: false,
    postImageError: false
}

export const imagePostModalReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_IMAGE_DATA_PENDING:
            return {
                ...state, 
                postImageLoading: true
            }
        case POST_IMAGE_DATA_FULFILLED:
            return {
                ...state,
                postImageLoading: false,
                postImageSuccess: true,
            }
        case POST_IMAGE_DATA_REJECTED:
            return {
                postImageLoading: false,
                postImageSuccess: false,
                postImageError: true
            }
        default:
            return state
    }
}
import {
    DISPLAY_LOGIN,
    DISPLAY_REGISTER,

    REGISTER_USER_PENDING,
    REGISTER_USER_FULFILLED,
    REGISTER_USER_REJECTED
} from './constants'

const initialState = {
    displayLogin: true,
    displayRegister: false,

    registeredUser: null,
    registeredUserLoading: false,
    registeredUserSuccess: false,
    registeredUserError: false,
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
        default: 
            return state
    }
}
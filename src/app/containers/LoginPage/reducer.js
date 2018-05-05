import {
    DISPLAY_LOGIN,
    DISPLAY_REGISTER,
} from './constants'

const initialState = {
    displayLogin: true,
    displayRegister: false
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
        default: 
            return state
    }
}
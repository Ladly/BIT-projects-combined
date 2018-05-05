import {
    DISPLAY_LOGIN,
    DISPLAY_REGISTER
} from './constants'

export const displayLogin = () => {
    return {
        type: DISPLAY_LOGIN,
    }
}

export const displayRegister = () => {
    return {
        type: DISPLAY_REGISTER,
    }
}
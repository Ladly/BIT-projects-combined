import {
    DISPLAY_LOGIN,
    DISPLAY_REGISTER,
    REGISTER_USER
} from './constants'

import { LoginService } from './../../../../services/LoginService'

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

export const registerNewUser = data => {
    return {
        type: REGISTER_USER,
        payload: LoginService.registerNewUser(data)
    }
}
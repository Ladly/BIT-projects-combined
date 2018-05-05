import { 
    USER_REGISTRATION_URL,
    USER_LOGIN_URL
} from './../utils/constants'

export const createUser = (body) => {
    return {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
            'Key': '64C82EE',
        },
        body: JSON.stringify(body)
    }
}

export const loginUser = (body) => {
    return {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
            'Key': '64C82EE',
        },
        body: JSON.stringify(body)
    }
}

class LoginService {

    static registerNewUser = (data) => {
        return fetch(USER_REGISTRATION_URL, createUser(data))
            .then(response => response.json())
    }

    static userLogin = (data) => {
        console.log(data)
        return fetch(USER_LOGIN_URL, loginUser(data))
            .then(response => response.json())
    }
}

export { LoginService }
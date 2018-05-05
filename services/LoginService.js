import { 
    USER_REGISTRATION_URL
} from './../utils/constants'

// import { 
//     CREATEPOSTOPTIONS, 
// } from './../utils/restOptions'

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

class LoginService {
    static registerNewUser = (data) => {
        console.log(data)
        fetch(USER_REGISTRATION_URL, createUser(data))
            .then(response => response.json())
    }
}


const headers = {
    'Content-Type': 'application/json',
    'Key': '64C82EE',
    'SessionId': 'a84dc34e-59d8-4e9c-a890-2550dd57191d'
}

export { LoginService }
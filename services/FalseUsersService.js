import { FALSE_USERS_URL } from './../utils/constants'

import { createFalseUser } from './../utils/helpers'

class FalseUsersService {
    static fetchFalseUsers = () => {
        return fetch(FALSE_USERS_URL)
            .then(users => users.json())
            .then(users => {
                const { results } = users
                return createFalseUser(results)
            })
    }
}

export { FalseUsersService }
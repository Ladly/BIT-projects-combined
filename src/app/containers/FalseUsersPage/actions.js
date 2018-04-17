import { FETCH_FALSE_USERS } from './constants'

import { FalseUsersService } from './../../../../services/FalseUsersService'

export const fetchFalseUsers = () => {
    return {
        type: FETCH_FALSE_USERS,
        payload: FalseUsersService.fetchFalseUsers()
    }
}
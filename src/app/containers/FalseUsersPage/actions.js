import { 
    FETCH_FALSE_USERS,
    SWITCH_VIEW
} from './constants'

import { FalseUsersService } from './../../../../services/FalseUsersService'

export const fetchFalseUsers = () => {
    return {
        type: FETCH_FALSE_USERS,
        payload: FalseUsersService.fetchFalseUsers()
    }
}

export const  switchView = currentView => {
    return {    
        type: SWITCH_VIEW,
        payload: !currentView
    }
}
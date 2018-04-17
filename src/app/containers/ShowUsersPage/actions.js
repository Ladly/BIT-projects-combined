import { 
    FETCH_SHOW_USERS,
    SWITCH_VIEW
} from './constants'

import { ShowUsersService } from './../../../../services/ShowUsersService'

export const fetchShowUsers = () => {
    return {
        type: FETCH_SHOW_USERS,
        payload: ShowUsersService.fetchShowUsers()
    }
}

export const  switchView = currentView => {
    return {    
        type: SWITCH_VIEW,
        payload: !currentView
    }
}
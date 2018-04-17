import { 
    FETCH_SHOW_USERS,
    SWITCH_VIEW,
    GET_USERS_FROM_LOCAL_STORAGE
} from './constants'

import { ShowUsersService } from './../../../../services/ShowUsersService'
import { LocalStorageService } from './../../../../services/LocalStorageService'


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

export const getUsersFromLocalStorage = (key) => {
    return {
        type: GET_USERS_FROM_LOCAL_STORAGE,
        payload: LocalStorageService.getItemFromLocalStorage(key)
    }
}
import {
    FETCH_SHOWS,
} from  './constants'

import { ShowsService } from './../../../../services/ShowsService'

export const fetchShows = () => {
    return {
        type: FETCH_SHOWS,
        payload: ShowsService.fetchShows()
    }
}
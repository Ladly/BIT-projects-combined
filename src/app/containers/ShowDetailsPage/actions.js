import {
    FETCH_SHOW_DETAILS_AND_CAST,
    FETCH_SHOWS_CREW
} from  './constants'

import { ShowsService } from './../../../../services/ShowsService'

export const fetchShowDetailsAndCast = (id) => {
    return {
        type: FETCH_SHOW_DETAILS_AND_CAST,
        payload: ShowsService.fetchShowDetailsAndCast(id)
    }
}

export const fetchShowsCrew = (id) => {
    return {
        type: FETCH_SHOWS_CREW,
        payload: ShowsService.fetchShowsCrew(id)
    }
}
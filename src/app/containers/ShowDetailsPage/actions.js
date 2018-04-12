import {
    FETCH_SHOW_DETAILS_AND_CAST,
} from  './constants'

import { ShowsService } from './../../../../services/ShowsService'

export const fetchShowDetailsAndCast = (id) => {
    return {
        type: FETCH_SHOW_DETAILS_AND_CAST,
        payload: ShowsService.fetchShowDetailsAndCast(id)
    }
}
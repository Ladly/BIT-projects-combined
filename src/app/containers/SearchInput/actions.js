import { SEARCH_SHOWS } from './constants'

import { ShowsService } from './../../../../services/ShowsService'

export const searchShows = (query) => {
    return {
        type: SEARCH_SHOWS,
        payload: ShowsService.searchShows(query)
    }
}
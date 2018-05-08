import { FETCH_TOP_THREE_SHOWS } from './constants'

import { ShowsService } from './../../../../services/ShowsService'

export const fetchTopThreeShows = () => {
	return {
		type: FETCH_TOP_THREE_SHOWS,
		payload: ShowsService.fetchTopThreeShows()
	}
}
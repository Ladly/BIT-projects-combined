import { FETCH_SINGLE_SHOW } from './constants'

import { ShowsService } from './../../../../services/ShowsService'

export const fetchSingleShow = (id) => {
	return {
		type: FETCH_SINGLE_SHOW,
		payload: ShowsService.fetchShowDetailsAndCast(id)
	}
}
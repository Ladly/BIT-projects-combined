import {
	FETCH_SHOW_DETAILS_AND_CAST,
	FETCH_SHOWS_CREW,
	CLEAR_EPISODES_AND_CREW,
	FETCH_EPISODES_BY_SEASON
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

export const clearEpisodesAndCrew = () => { // todo
	return {
		type: CLEAR_EPISODES_AND_CREW,
		payload: []
	}
}

export const fetchEpisodesBySeason = (id, seasonNumber) => {
	return {
		type: FETCH_EPISODES_BY_SEASON,
		payload: ShowsService.fetchEpisodesBySeason(id, seasonNumber)
	}
}
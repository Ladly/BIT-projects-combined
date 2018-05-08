import { SHOWS_URL } from './../utils/constants'

import {
	createShow,
	createShowDetails,
	createAkas,
	createCast,
	createSeasons,
	createCrew,
	createEpisodes,
	selectThreeTopShows,
	getSeasonEpisodes
} from './../utils/helpers'

class ShowsService {
	static fetchShows = () => {
		return fetch(SHOWS_URL)
			.then(shows => shows.json())
			.then(shows => shows.slice(0, 50))
			.then(shows => createShow(shows))
	}

	static fetchShowDetailsAndCast = (id) => {
		return fetch(`${SHOWS_URL}/${id}?embed[]=cast&embed[]=akas&embed[]=seasons`)
			.then(showDetails => showDetails.json())
			.then(showDetails => {
				const { akas } = showDetails._embedded
				const { cast } = showDetails._embedded
				const { seasons } = showDetails._embedded
				const akasInstances = createAkas(akas)
				const castInstances = createCast(cast)
				const seasonsInstances = createSeasons(seasons)
				delete showDetails._embedded
				showDetails = {
					...showDetails,
					akasInstances,
					castInstances,
					seasonsInstances
				}                    
					
				return showDetails                
			})
			.then(showDetails => createShowDetails(showDetails))
	}

	static searchShows = (query) => {
		return fetch(`${SHOWS_URL}?q=${query}`)
			.then(shows => shows.json())
			.then(shows => createShow(shows))
	}

	static fetchShowsCrew = (id) => {
		return fetch(`${SHOWS_URL}/${id}/crew`)
			.then(showsCrew => showsCrew.json())
			.then(showsCrew => createCrew(showsCrew))
	}

	static fetchTopThreeShows = () => {
		return fetch (SHOWS_URL)
			.then(shows => shows.json())
			.then(shows => selectThreeTopShows(shows))
			.then(shows => shows.slice(0,3))
			.then(shows => createShow(shows))
	}

	static fetchEpisodesBySeason = (id, seasonNumber) =>{
		return fetch(`${SHOWS_URL}/${id}/episodes`)
			.then(episodes => episodes.json())
			.then(episodes => getSeasonEpisodes(episodes, seasonNumber))
			.then(episodes => createEpisodes(episodes))
	}
}

export { ShowsService }
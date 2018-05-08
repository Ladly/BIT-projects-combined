import {
	FETCH_SHOW_DETAILS_AND_CAST_PENDING,
	FETCH_SHOW_DETAILS_AND_CAST_FULFILLED,
	FETCH_SHOW_DETAILS_AND_CAST_REJECTED,

	FETCH_SHOWS_CREW_PENDING,
	FETCH_SHOWS_CREW_FULFILLED,
	FETCH_SHOWS_CREW_REJECTED,

	FETCH_SHOWS_EPISODES_PENDING, //to be removed
	FETCH_SHOWS_EPISODES_FULFILLED,
	FETCH_SHOWS_EPISODES_REJECTED,

	FETCH_EPISODES_BY_SEASON_PENDING, //to be removed
	FETCH_EPISODES_BY_SEASON_FULFILLED,
	FETCH_EPISODES_BY_SEASON_REJECTED,


} from './constants'

const initialState = {
	showDetailsAndCast: null,
	fetchedShowDetailsLoading: false,
	fetchedShowDetailsSuccess: false,
	fetchedShowDetailsError: false,

	showsCrew: [],
	fetchedShowsCrewLoading: false,
	fetchedShowsCrewSuccess: false,
	fetchedShowsCrewError: false,

	seasonEpisodes: [],
	fetchedSeasonEpisodesLoading: false,
	fetchedSeasonEpisodesSuccess: false,
	fetchedSeasonEpisodesError: false
}

export const showDetailsReducer = (state = initialState, action) => {
	switch(action.type) {
	case FETCH_SHOW_DETAILS_AND_CAST_PENDING:
		return {
			...state,
			fetchedShowDetailsLoading: true
		}
		break
	case FETCH_SHOW_DETAILS_AND_CAST_FULFILLED:
		return {
			...state,
			fetchedShowDetailsLoading:false,
			fetchedShowDetailsSuccess: true,
			showDetailsAndCast: action.payload
		}
		break
	case FETCH_SHOW_DETAILS_AND_CAST_REJECTED:
		return {
			...state,
			fetchedShowDetailsLoading: false,
			fetchedShowDetailsSuccess: false,
			fetchedShowDetailsError: true
		}
		break


	case FETCH_SHOWS_CREW_PENDING:
		return {
			...state,
			fetchedShowsCrewLoading: true
		}
		break
	case FETCH_SHOWS_CREW_FULFILLED:
		return {
			...state,
			fetchedShowsCrewLoading:false,
			fetchedShowsCrewSuccess: true,
			showsCrew: action.payload
		}
		break
	case FETCH_SHOWS_CREW_REJECTED:
		return {
			...state,
			fetchedShowsCrewLoading: false,
			fetchedShowsCrewSuccess: false,
			fetchedShowsCrewError: true
		}
		break


	case FETCH_EPISODES_BY_SEASON_PENDING:
		return {
			...state,
			fetchedSeasonEpisodesLoading: true
		}
		break
	case FETCH_EPISODES_BY_SEASON_FULFILLED:
		return {
			...state,
			fetchedSeasonEpisodesLoading: false,
			fetchedSeasonEpisodesSuccess: true,
			seasonEpisodes: action.payload
		}
		break
	case FETCH_EPISODES_BY_SEASON_REJECTED:
		return {
			...state,
			fetchedSeasonEpisodesLoading: false,
			fetchedSeasonEpisodesSuccess: false,
			fetchedSeasonEpisodesError: true
		}
		break

	default:
		return state
	}
}
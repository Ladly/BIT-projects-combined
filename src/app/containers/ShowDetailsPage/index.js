import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { 
	fetchShowDetailsAndCast,
	fetchShowsCrew ,
	clearEpisodesAndCrew,
	fetchEpisodesBySeason
} from './actions'

import './style.scss'

import { SingleShowCard } from './../../components/SingleShowCard'
import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

class ShowDetailsPage extends Component {

	componentDidMount() {
		this.props.detailsAndCast(this.props.match.params.id)
		this.props.seasonsEpisodes(this.props.match.params.id, 1)
	}

	displayDetails = () => {
		if(this.props.showDetailsLoading) {
			return <Loading />
		} else if(this.props.showDetailsSuccess) {
			return <SingleShowCard showDetails={this.props.showDetails} fetchEpisodesBySeason={this.props.seasonsEpisodes} showsCrew={this.props.showsCrew} displayCrew={this.displayCrew}/>
		} else if (this.props.showDetailsError) {
			return <Error />
		}
	}

	displayCrew = () => {
		if(this.props.showCrewLoading){
			return <Loading />
		} else if(this.props.showCrewSuccess) {
			return this.props.showCrew.map((member, i) => {
				if(i > 7) {
					return false
				}
				return <li key={i} className="list-group-item"><b>{member.type}</b>: {member.name} </li>
			})
		} else if (this.props.showCrewError) {
			return <Error />
		}
	}

	displayEpisodes = () => {
		if(this.props.seasonEpisodesLoading){
			return <Loading />
		} else if(this.props.seasonEpisodesSuccess) {
			return this.props.seasonEpisodes.map(episode => {
				return (
					<li key={episode.id} className="list-group-item">
						<h4><span>{episode.name} (S{episode.number}E{episode.season})</span></h4>
						<hr />
						<p> <b>Plot:</b> {episode.summary}</p> 
					</li>
				)
			})
		} else if (this.props.seasonEpisodesError) {
			return <Error />
		}
	}

	render() {  
		return (
			<div className="container">
				{this.displayDetails()} 
				{/* <Link className="btn btn-primary" to={`/comments/${this.props.match.params.id}`}>Comment</Link> */}
				<div className="episodes-holder"> 
					<h3>Episodes</h3>
					<ul className="list-group-flush"> 
						{this.displayEpisodes()}
					</ul> 
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const showDetails = state.showDetailsReducer
	return {
		showDetailsLoading: showDetails.fetchedShowDetailsLoading,
		showDetailsSuccess: showDetails.fetchedShowDetailsSuccess,
		showDetailsError: showDetails.fetchedShowDetailsError,
		showDetails: showDetails.showDetailsAndCast,

		showCrewLoading: showDetails.fetchedShowsCrewLoading,
		showCrewSuccess: showDetails.fetchedShowsCrewSuccess,
		showCrewError: showDetails.fetchedShowsCrewError,
		showCrew: showDetails.showsCrew,

		seasonEpisodes: showDetails.seasonEpisodes,
		seasonEpisodesLoading: showDetails.fetchedSeasonEpisodesLoading,
		seasonEpisodesSuccess: showDetails.fetchedSeasonEpisodesSuccess,
		seasonEpisodesError: showDetails.fetchedSeasonEpisodesError
	}
}

const mapDispatchToProps = dispatch => {
	return {
		detailsAndCast: query => dispatch(fetchShowDetailsAndCast(query)),
		showsCrew: id => dispatch(fetchShowsCrew(id)),
		seasonsEpisodes: (id, seasonNumber) => dispatch(fetchEpisodesBySeason(id, seasonNumber)),
		clearEpisodesAndCrew: () => dispatch(clearEpisodesAndCrew())
	}
}

ShowDetailsPage.propTypes = {
	detailsAndCast: PropTypes.func,
	seasonsEpisodes: PropTypes.func,
	match: PropTypes.object,
	showDetailsLoading: PropTypes.bool,
	showDetailsSuccess: PropTypes.bool,
	showDetails: PropTypes.object,
	showDetailsError: PropTypes.bool,
	showCrewLoading: PropTypes.bool,
	showCrewSuccess: PropTypes.bool,
	showCrew: PropTypes.array,
	showCrewError: PropTypes.bool,
	seasonEpisodesLoading: PropTypes.bool,
	seasonEpisodesSuccess: PropTypes.bool,
	seasonEpisodes: PropTypes.array,
	seasonEpisodesError: PropTypes.bool,
	showsCrew: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailsPage)
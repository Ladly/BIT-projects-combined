import React, { Component } from 'react'
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
                if(i > 3) {
                    return false
                }
                return <li key={i} className="crew-list-item"><b>{member.type}</b>: {member.name} </li>
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
                <li key={episode.id} className="episode-list-item">
                <h4 className="text-center">Name: {episode.name}, Episode number {episode.number}, Season: {episode.season}</h4>
                <hr />
                <p> Plot:
                {episode.summary}</p> 
                </li>
                )
            })
        } else if (this.props.seasonEpisodesError) {
            return <Error />
        }
    }

    render() {  
        return (
            <div className="container details-page-container">
                {this.displayDetails()} 
                <Link className="btn btn-primary" to={`/comments/${this.props.match.params.id}`}>Comment</Link>
                <div>  
                    {this.displayEpisodes()}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailsPage)
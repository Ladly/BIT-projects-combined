import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    fetchShowDetailsAndCast,
    fetchShowsCrew ,
    fetchShowsEpisodes,
    clearEpisodesAndCrew
} from './actions'

import './style.scss'

import { SingleShowCard } from './../../components/SingleShowCard'
import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

class ShowDetailsPage extends Component {

    componentDidMount() {
        this.props.detailsAndCast(this.props.match.params.id)
    }

    displayDetails = () => {
        if(this.props.showDetailsLoading) {
            return <Loading />
        } else if(this.props.showDetailsSuccess) {
            return <SingleShowCard showDetails={this.props.showDetails}/>
        } else if (this.props.showDetailsError) {
            return <Error />
        }
    }

    displayCrew = () => {
        if(this.props.showCrewLoading){
            return <Loading />
        } else if(this.props.showCrewSuccess) {
            return this.props.showCrew.map((member, i) => {
                return <li key={i} className="crew-list-item"><b>{member.type}</b>: {member.name} </li>
            })
        } else if (this.props.showCrewError) {
            return <Error />
        }
    }

    displayEpisodes = () => {
        if(this.props.showsEpisodesLoading){
            return <Loading />
        } else if(this.props.showsEpisodesSuccess) {
            console.log(this.props.episodes)
            return this.props.episodes.map(episode => {
                return (
                <li key={episode.id} className="episode-list-item">
                Name: {episode.name}
                Season: {episode.season}
                <p> Plot:
                {episode.summary}</p> 
                </li>
                )
            })
        } else if (this.props.showsEpisodesError) {
            return <Error />
        }
    }

    render() {    

        return (
            <div className="container">
                {this.displayDetails()}
                <div className="row">
                    <div className="col-6">
                        <button 
                            className="btn btn-primary" 
                            onClick={() => this.props.showsCrew(this.props.match.params.id)}
                            >Crew
                        </button>
                        <ul className="crew-list">
                            {this.displayCrew()}
                        </ul>
                    </div> 
                    <div className="col-6">  
                    <button 
                        className="btn btn-primary" 
                        onClick={() => this.props.showsEpisodes(this.props.match.params.id)}
                        >Episodes
                    </button>
                    {this.displayEpisodes()}
                    </div>
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
       
        showsEpisodesLoading: showDetails.fetchedShowsEpisodesLoading,
        showsEpisodesSuccess: showDetails.fetchedShowsEpisodesSuccess,
        showsEpisodesError: showDetails.fetchedShowsEpisodesError,
        episodes: showDetails.showsEpisodes
    }
}

const mapDispatchToProps = dispatch => {
return {
        detailsAndCast: query => dispatch(fetchShowDetailsAndCast(query)),
        showsCrew: id => dispatch(fetchShowsCrew(id)),
        showsEpisodes: id => dispatch(fetchShowsEpisodes(id)),
        clearEpisodesAndCrew: () => dispatch(clearEpisodesAndCrew())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailsPage)
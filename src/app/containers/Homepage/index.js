import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.scss'

import { fetchShows } from './actions'

import { ShowCard } from './../../components/ShowCard'

class Homepage extends Component {

    componentDidMount() {
        this.props.fetchShows()
    }

    displayShows = () => {
        if(this.props.fetchedShowsLoading) {
            return <h2>Loading</h2>
        } else if (this.props.fetchShowsSuccess) {
            return this.props.shows.map(show => {
                return <ShowCard show={show} key={show.id}/>
            })
        } else if (this.props.fetchedShowsError) {
           return <h2>Error</h2>
        }      

    }

    render() {
        return (
            <div className="container main">
                <h1 className="page-title text-center">Popular Shows</h1>
                <div className="row">
                    {this.displayShows()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
        const showsState = state.homepageReducer
    return {
        fetchedShowsLoading: showsState.fetchShowsLoading,
        fetchedShowsError: showsState.fetchShowsError,
        fetchShowsSuccess: showsState.fetchShowsSuccess,
        shows: showsState.fetchedShows
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShows: () => dispatch(fetchShows()),	
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

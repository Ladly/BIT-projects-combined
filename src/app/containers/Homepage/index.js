import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './style.scss'

import { fetchShows } from './actions'

import { ShowCard } from './../../components/ShowCard'
import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

import Header from './../Header'

class Homepage extends Component {

	componentDidMount() {
		this.props.fetchShows()
	}

	displayShows = () => {
		if(this.props.fetchedShowsLoading) {
			return <Loading />
		} else if (this.props.fetchShowsSuccess) {
			return this.props.shows.map(show => {
				return <ShowCard show={show} key={show.id}/>
			})
		} else if (this.props.fetchedShowsError) {
		   return <Error />
		}      

	}

	render() {
		return (
			<div className="container main">
				<Header />
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

Homepage.propTypes = {
	fetchShows: PropTypes.func,
	fetchedShowsLoading: PropTypes.bool,
	fetchShowsSuccess: PropTypes.bool,
	shows: PropTypes.array,
	fetchedShowsError: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

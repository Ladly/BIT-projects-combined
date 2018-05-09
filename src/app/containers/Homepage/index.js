import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './style.scss'

import { fetchShows } from './actions'

import { ShowCard } from './../../components/ShowCard'
import { AsideNavigation } from './../../components/AsideNavigation'
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
				return <ShowCard 
					show={show} 
					key={show.id} 
				/>
			})
		} else if (this.props.fetchedShowsError) {
		   return <Error />
		}      

	}

	render() {
		return (
			<div className="container show-page">
				<Header />
				<div className="main">
					<h2 className="section-title">Popular Shows</h2>
					<section className="row">
						<AsideNavigation />						
						<article className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
							<div className="row">
								{this.displayShows()}
							</div>
						</article>
					</section>
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

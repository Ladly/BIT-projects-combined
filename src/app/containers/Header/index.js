import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchTopThreeShows } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

import './style.scss'

class Header extends Component {

	componentDidMount() {
		this.props.fetchTopThreeShows()
	}

	displayTopThreeShows = () => {
		if(this.props.topThreeShowsLoading) {
			return <Loading />
		} else if (this.props.topThreeShowsSuccess) {
			return this.props.topThreeShows.map(show => {
				return (
					<div className="col-xs-12 col-sm-3 col-md-4 top-shows" key={show.id}>
						<img src={show.image} alt=""/>
						<p>{show.name}</p>
						<p><b>Rating</b>: {show.rating}</p>
					</div>
				)
			}) 			
		} else {
			return <Error />
		}
	}

	render() {
		return (
			<div className="jumbotron">
				<h1 className="display-4 text-center">Bit Show</h1>
				<h4>Top rating</h4>
				<div className="row top-shows-holder">
					{this.displayTopThreeShows()}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		topThreeShows: state.headerReducer.topThreeShows,
		topThreeShowsLoading: state.headerReducer.topThreeShowsLoading,
		topThreeShowsSuccess: state.headerReducer.topThreeShowsSuccess,
		topThreeShowsError: state.headerReducer.topThreeShowsError
	}
}

const mapDispatchToProps = dispatch => {
	return {
		   fetchTopThreeShows: () => dispatch(fetchTopThreeShows()) 
	}
}

Header.propTypes = {
	fetchTopThreeShows: PropTypes.func,
	topThreeShowsLoading: PropTypes.bool,
	topThreeShowsSuccess: PropTypes.bool,
	topThreeShows: PropTypes.array,
	topThreeShowsError: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
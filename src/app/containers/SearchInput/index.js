import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { searchShows } from './actions'

import { SearchList } from './../../components/SearchList'

import './style.scss'

class SearchInput extends Component {
	constructor() {
		super()
		this.state={
			value: '',
			allShows:[],
			matchedShows: []
		}
	}

	handleChange = (e) => {
		this.setState({value: e.target.value},() => {
			this.props.searchShows(this.state.value)
				.then(() =>  this.setState({allShows: this.props.shows}, () => this.filterShows() ))               
		})
	}

	filterShows = () => {
		const matchedShows = this.state.allShows.filter(show => {
			return show.name.toLowerCase().includes(this.state.value.toLowerCase())
		})
		this.setState({
			matchedShows
		})
	}

	displaySearchList = () => {
		if(this.state.matchedShows.length > 0){
			const firstTen = this.state.matchedShows.slice(0,10)
			return <SearchList shows={firstTen} value={this.state.value}/>
		} 
	}

	render() {
		return (
			<Fragment>
				<input type="text" placeholder="Search show" onChange={this.handleChange} value={this.state.value}/>
				{this.displaySearchList()}
			</Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		shows: state.searchInputReducer.searchShows
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		searchShows: (query) => dispatch(searchShows(query))
	}
}

SearchInput.propTypes = {
	searchShows: PropTypes.func,
	shows: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
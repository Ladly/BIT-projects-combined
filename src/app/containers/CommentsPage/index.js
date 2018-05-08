import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchSingleShow } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { ShowCard } from './../../components/ShowCard'

import './style.scss'

class CommentsPage extends Component {

	componentDidMount() {
		this.props.fetchShowToComment(this.props.match.params.id)
	}

	displayShow = () => {
		if(this.props.singleShowLoading) {
			return <Loading />
		} else if (this.props.singleShowSuccess) {
			return (
				<div className="jumbotron">
					<h1 className="display-4 text-center">{this.props.singleShow.name}</h1>
					<div className="row">
						<div className="col-sm-3">
							<img src={this.props.singleShow.image} alt=""/>
						</div>
						<div className="col-sm-9">
							<p>{this.props.singleShow.summary}</p>
						</div>
					</div>                    
				</div>
			)
		} else if (this.props.singleShowError) {
			return <Error />
		}
	}

	render() {
		
		return (
			<div className="container">
				{this.displayShow()}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		singleShow: state.commentsReducer.singleShow,
		singleShowLoading: state.commentsReducer.singleShowLoading,
		singleShowSuccess: state.commentsReducer.singleShowSuccess,
		singleShowError: state.commentsReducer.singleShowError  
	}
}

const mapDispatchToProps = dispatch => {
	return {
		 fetchShowToComment: id => dispatch(fetchSingleShow(id))  
	}
}

CommentsPage.propTypes = {
	fetchShowToComment: PropTypes.func,
	match: PropTypes.object,
	singleShowLoading: PropTypes.bool,
	singleShowSuccess: PropTypes.bool,
	singleShow: PropTypes.object,
	singleShowError: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage)
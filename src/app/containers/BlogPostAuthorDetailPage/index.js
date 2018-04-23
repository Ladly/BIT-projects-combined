import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { 
	fetchAuthor
} from './actions'

import { formatText } from './../../../../utils/helpers'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { AuthorsDetails } from './../../components/AuthorsDetails'
import { AuthorsAddress } from './../../components/AuthorsAddress'
import { AuthorsCompany } from './../../components/AuthorsCompany'
import { GoogleMap } from './../../components/GoogleMap'

import './style.scss'



class BlogPostAuthorDetailsPage extends Component {

	componentDidMount() {
		this.props.getAuthor(this.props.match.params.id)         
	}

	displayAuthorDetails = () => {
		if(this.props.authorLoadingDetails) {

			return <Loading />
		} else if (this.props.authorSuccessDetails) {

			return (
				<Fragment>
					<h1 className="text-center author-details-header">Single author details</h1>
					<AuthorsDetails author={this.props.authorDetails}/>
					<hr />
					<div className="adress-holder">
						<AuthorsAddress author={this.props.authorDetails} />
						<GoogleMap author={this.props.authorDetails}/>
					</div>
					<hr />
					<AuthorsCompany author={this.props.authorDetails}/>
				</Fragment>    
			)
		}
	}

	render() {
		return (
			<div className="container">
				{this.displayAuthorDetails()}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
			authorDetails: state.blogPostAuthorDetailReducer.fetchedAuthor,
			authorLoadingDetails: state.blogPostAuthorDetailReducer.fetchedAuthorLoading,
			authorSuccessDetails: state.blogPostAuthorDetailReducer.fetchedAuthorSuccess,
			authorErrorDetails: state.blogPostAuthorDetailReducer.fetchedAuthorError 
		}
}

const mapDispatchToProps = dispatch => {
	return {
		getAuthor: (id) => dispatch(fetchAuthor(id)),
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostAuthorDetailsPage)
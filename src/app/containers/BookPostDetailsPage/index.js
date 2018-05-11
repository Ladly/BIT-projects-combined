import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { 
	fetchBookTextPost,
	fetchBookImagePost,
	fetchBookVideoPost,
	fetchCurrentUser,
	deletePost
} from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { TextPostDetails } from './../../components/TextPostDetails'
import { ImagePostDetails } from './../../components/ImagePostDetails'
import { VideoPostDetails } from './../../components/VideoPostDetails'
import BookPostCommentInput from './../BookPostCommentInput'
import BookPostComments from './../BookPostComments'

import './style.scss'

class BookPostDetails extends Component {

	componentDidMount() {
		this.testTypeForFetch(this.props.match.params.type, this.props.match.params.id)
		this.props.getCurrentUser()
	}

	testTypeForFetch = (type, id) => {
		if(type === 'text') {
			this.props.getBookTextPosts(id)
		} else if (type === 'image') {
			this.props.getBookImagePost(id)
		} else if (type === 'video') {
			this.props.getBookVideoPost(id)
		}
	}     

	testDeleteResults = () => {
		if(this.props.deletedPostLoading) {
			return <Loading />
		} else if(this.props.deletedPostError){
			return <Error />
		}
	}

	deletePost = (id) => {
		this.props.deletePost(id)
			.then(() => this.props.history.push('/bookfeed'))
	}

	pickDisplayCard = () => {
		if(this.props.textPostLoading || this.props.imagePostLoading || this.props.videoPostLoading || this.props.currentUserLoading) {
			return <Loading />
		} else if (this.props.textPostSuccess && this.props.currentUserSuccess) {
			return (
				<Fragment>
					<TextPostDetails 
						post={this.props.textPost} 
						currentUserId={this.props.currentUser.userId} 
						deletePost={this.deletePost}
					/>
					{this.testDeleteResults()}
				</Fragment>
			)
		} else if (this.props.imagePostSuccess && this.props.currentUserSuccess) {
			return (
				<Fragment>
					<ImagePostDetails 
						post={this.props.imagePost} 
						currentUserId={this.props.currentUser.userId} 
						deletePost={this.deletePost}
					/>
					 {this.testDeleteResults()}
				</Fragment>
			) 
		} else if (this.props.videoPostSuccess && this.props.currentUserSuccess) {
			return (
				<Fragment>
					<VideoPostDetails 
						post={this.props.videoPost} 
						currentUserId={this.props.currentUser.userId} 
						deletePost={this.deletePost}
					/>
					 {this.testDeleteResults()}
				</Fragment>
			) 
		} else {
			return <Error />
		}
	}

	render() {
		return (
			<div className="container book-post-details-container">
				{this.pickDisplayCard()}
				<BookPostCommentInput postId={this.props.match.params.id} />
				<BookPostComments postId={this.props.match.params.id}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		textPost: state.bookPostDetailsReducer.fetchedBookTextPost,
		textPostLoading: state.bookPostDetailsReducer.fetchedBookTextPostLoading,
		textPostSuccess: state.bookPostDetailsReducer.fetchedBookTextPostSuccess,
		textPostError: state.bookPostDetailsReducer.fetchedBookTextPostError,

		imagePost: state.bookPostDetailsReducer.fetchedBookImagePost,
		imagePostLoading: state.bookPostDetailsReducer.fetchedBookImagePostLoading,
		imagePostSuccess: state.bookPostDetailsReducer.fetchedBookImagePostSuccess,
		imagePostError: state.bookPostDetailsReducer.fetchedBookImagePostError,

		videoPost: state.bookPostDetailsReducer.fetchedBookVideoPost,
		videoPostLoading: state.bookPostDetailsReducer.fetchedBookVideoPostLoading,
		videoPostSuccess: state.bookPostDetailsReducer.fetchedBookVideoPostSuccess,
		videoPostError: state.bookPostDetailsReducer.fetchedBookVideoPostError,
		
		currentUser: state.bookPostDetailsReducer.fetchedCurrentUser,
		currentUserLoading: state.bookPostDetailsReducer.fetchedCurrentUserLoading,
		currentUserSuccess: state.bookPostDetailsReducer.fetchedCurrentUserSuccess,
		currentUserError: state.bookPostDetailsReducer.fetchedCurrentUserError,
		
		deletedPost: state.bookPostDetailsReducer.deletedPost,
		deletedPostLoading: state.bookPostDetailsReducer.deletedPostLoading,
		deletedPostSuccess: state.bookPostDetailsReducer.deletedPostSuccess,
		deletedPostError: state.bookPostDetailsReducer.deletedPostError,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getBookTextPosts: id => dispatch(fetchBookTextPost(id)),
		getBookImagePost: id => dispatch(fetchBookImagePost(id)),
		getBookVideoPost: id => dispatch(fetchBookVideoPost(id)),
		getCurrentUser: () => dispatch(fetchCurrentUser()),
		deletePost: id => dispatch(deletePost(id)),
	}
}

BookPostDetails.propTypes = {
	match: PropTypes.object,
	getCurrentUser: PropTypes.func,
	getBookTextPosts: PropTypes.func,
	getBookImagePost: PropTypes.func,
	getBookVideoPost: PropTypes.func,
	deletedPostLoading: PropTypes.bool,
	deletedPostError: PropTypes.bool,
	deletePost: PropTypes.func,
	history: PropTypes.object,
	textPostLoading: PropTypes.bool,
	imagePostLoading: PropTypes.bool,
	videoPostLoading: PropTypes.bool,
	currentUserLoading: PropTypes.bool,
	textPostSuccess: PropTypes.bool,
	currentUserSuccess: PropTypes.bool,
	textPost: PropTypes.object,
	currentUser: PropTypes.object,
	imagePostSuccess: PropTypes.bool,
	videoPostSuccess: PropTypes.bool,
	videoPost: PropTypes.object,
	imagePost: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPostDetails)
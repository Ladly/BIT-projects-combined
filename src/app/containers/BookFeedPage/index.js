import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { 
	fetchBookPosts,

	displayTextModal,
	hideTextModal,
	displayImageModal,
	hideImageModal,
	displayVideoModal,
	hideVideoModal,

	displayAllPosts,
	displayTextPosts,
	displayImagePosts,
	displayVideoPosts
} from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { TextPostCard } from './../../components/TextPostCard'
import { ImagePostCard } from './../../components/ImagePostCard'
import { VideoPostCard } from './../../components/VideoPostCard'
import TextPostModal  from './../TextPostModal'
import ImagePostModal  from './../ImagePostModal'
import VideoPostModal  from './../VideoPostModal'

import './style.scss'

class BookFeedPage extends Component {

	componentDidMount() {
		this.props.getBookPosts()
	}

	selectCard = (posts) => {
		if (this.props.displayPostsOfType === 'displayAllPosts') {
			return posts.map(post => {
				if(post.type === 'text'){
					return <TextPostCard key={post.id} post={post} />
				} else if(post.type === 'image') {
					return <ImagePostCard key={post.id} post={post} />
				} else {
					return <VideoPostCard key={post.id} post={post} />
				}
			})
		} else if (this.props.displayPostsOfType === 'displayTextPosts') {
			return this.filterPostsByType(posts, 'text').map(post => <TextPostCard key={post.id} post={post} />)
		}  else if (this.props.displayPostsOfType === 'displayImagePosts') {
			return this.filterPostsByType(posts, 'image').map(post => <ImagePostCard key={post.id} post={post} />)
		}  else if (this.props.displayPostsOfType === 'displayVideoPosts') {
			return this.filterPostsByType(posts, 'video').map(post => <VideoPostCard key={post.id} post={post} />)
		}
	}

	displayPosts = () => {
		if(this.props.postsLoading) {
			return <Loading />
		} else if (this.props.postsSuccess) {
			return this.selectCard(this.props.posts)
		} else {
			return <Error />
		}
	}

	handleTypeChange = e => {
		if(e.target.value === 'Text') {
			this.props.displayTextPosts()
		} else if (e.target.value === 'Image') {
			this.props.displayImagePosts()
		} else if (e.target.value === 'Video') {
			this.props.displayVideoPosts()
		} else if (e.target.value === 'All') {
			this.props.displayAllPosts()
		}
	}

	filterPostsByType(posts, type = 'All') {
		return posts.filter(post => {
			return post.type === type.toLowerCase()
		})
	}
	
	displayTxtModal = () => {
		return this.props.textModal ? this.props.hideTextModal() : this.props.displayTextModal()
	}

	displayImgModal = () => {
		return this.props.imageModal ? this.props.hideImageModal() : this.props.displayImageModal()
	}

	displayVidModal = () => {
		return this.props.videoModal ? this.props.hideVideoModal() : this.props.displayVideoModal()
	}

	render() {
		return (
			<div className="container">
				<div className="row feed-controls">
					<button onClick={this.displayTxtModal} className="btn btn-primary col-sm-3">Add text post</button>
					<button onClick={this.displayImgModal} className="btn btn-primary col-sm-3">Add image post</button>
					<button onClick={this.displayVidModal} className="btn btn-primary col-sm-3">Add video post</button>
					<select className="form-control col-sm-3" onChange={this.handleTypeChange}>
						<option>All</option>
						<option>Text</option>
						<option>Image</option>
						<option>Video</option>
					</select>
				</div>
				<TextPostModal display={this.props.textModal} hideModal={this.props.hideTextModal} getBookPosts={this.props.getBookPosts}/>
				<ImagePostModal display={this.props.imageModal} hideModal={this.props.hideImageModal} getBookPosts={this.props.getBookPosts}/>
				<VideoPostModal display={this.props.videoModal} hideModal={this.props.hideVideoModal} getBookPosts={this.props.getBookPosts}/>
				{this.displayPosts()}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		posts: state.bookFeedReducer.fetchedBookPosts,
		postsLoading: state.bookFeedReducer.fetchedBookPostsLoading,
		postsSuccess: state.bookFeedReducer.fetchedBookPostsSuccess,
		postsError: state.bookFeedReducer.fetchedBookPostsError,

		textModal: state.bookFeedReducer.displayTextModal,
		imageModal: state.bookFeedReducer.displayImageModal,
		videoModal: state.bookFeedReducer.displayVideoModal,
		
		displayPostsOfType: state.bookFeedReducer.displayPostsOfType,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getBookPosts: () => dispatch(fetchBookPosts()),

		displayTextModal: () => dispatch(displayTextModal()),
		hideTextModal: () => dispatch(hideTextModal()),
		displayImageModal: () => dispatch(displayImageModal()),
		hideImageModal: () => dispatch(hideImageModal()),
		displayVideoModal: () => dispatch(displayVideoModal()),
		hideVideoModal: () => dispatch(hideVideoModal()),

		displayAllPosts: () => dispatch(displayAllPosts()),
		displayTextPosts: () => dispatch(displayTextPosts()),
		displayImagePosts: () => dispatch(displayImagePosts()),
		displayVideoPosts: () => dispatch(displayVideoPosts())
	}
}

BookFeedPage.propTypes = {
	getBookPosts: PropTypes.func,
	displayPostsOfType: PropTypes.string,
	postsLoading: PropTypes.bool,
	postsSuccess: PropTypes.bool,
	posts: PropTypes.array,
	displayTextPosts: PropTypes.func,
	displayImagePosts: PropTypes.func,
	displayVideoPosts: PropTypes.func,
	displayAllPosts: PropTypes.func,
	textModal: PropTypes.bool,
	imageModal: PropTypes.bool,
	videoModal: PropTypes.bool,
	hideTextModal: PropTypes.func,
	hideImageModal: PropTypes.func,
	hideVideoModal: PropTypes.func,
	displayTextModal: PropTypes.func,
	displayImageModal: PropTypes.func,
	displayVideoModal: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookFeedPage)
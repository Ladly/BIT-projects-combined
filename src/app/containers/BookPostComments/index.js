import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { 
	fetchComments
} from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { BookPostComment } from './../../components/BookPostComment'

import './style.scss'

class BookPostComments extends Component {

	componentDidMount() {
		this.props.getComments(this.props.postId)
	}

	displayComments = () => {
		if(this.props.commentsLoading) {
			return <Loading />
		} else if(this.props.commentsSuccess) {
			return this.props.comments.map(comment => {
				return <BookPostComment key={comment.id} comment={comment}/>
			})
		} else {
			return <Error />
		}
	}

	render() {
		return (
			<div className="container">
				{this.displayComments()}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		comments: state.bookPostCommentsReducer.fetchedComments,
		commentsLoading: state.bookPostCommentsReducer.fetchedCommentsLoading,
		commentsSuccess: state.bookPostCommentsReducer.fetchedCommentsSuccess,
		commentsError: state.bookPostCommentsReducer.fetchedCommentsError,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getComments: (id) => dispatch(fetchComments(id)),
   
	}
}

BookPostComments.propTypes = {
	getComments: PropTypes.func,
	postId: PropTypes.string,
	commentsLoading: PropTypes.bool,
	commentsSuccess: PropTypes.bool,
	comments: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPostComments)
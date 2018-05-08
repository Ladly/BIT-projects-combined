import React from 'react'
import PropTypes from 'prop-types'

export const BookPostComment = ({comment}) => {
	return (
		<div className="card">
			<div className="card-header">{comment.authorName}<span className="float-right">{comment.created}</span></div>
			<div className="card-body">
				<p className="card-text">{comment.comment}</p>
			</div>
		</div>
	)
}

BookPostComment.propTypes = {
	comment: PropTypes.object
}
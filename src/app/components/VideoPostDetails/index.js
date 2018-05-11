import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { formatDate } from './../../../../utils/helpers'

import './style.scss'

export const VideoPostDetails = ({post, currentUserId, deletePost}) => {
	const displayDeleteButton = () => {
		if(post.userId === currentUserId) {
			return <span onClick={() => deletePost(post.id)} className="badge badge-warning">Delete post</span>
		}
	}

	const formattedDate = formatDate(post.dateCreated)

	return (
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
				<div className="card border-dark mb-3 details-card">
					<div className="card-header details-card-header">
						<span>{post.user}</span>
						{displayDeleteButton()}
						<span>{formattedDate}</span>
					</div>
					<div className="card-body text-dark">
						<iframe className="book-post-iframe" src={post.videoUrl} allow="autoplay" frameBorder="0" allowFullScreen encrypted-media="true"></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

VideoPostDetails.propTypes = {
	post: PropTypes.object,
	currentUserId: PropTypes.number,
	deletePost: PropTypes.func,
}

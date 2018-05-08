import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { formatDate } from './../../../../utils/helpers'

import './style.scss'

export const ImagePostDetails = ({post, currentUserId, deletePost}) => {

	const displayDeleteButton = () => {
		if(post.userId === currentUserId) {
			return <span onClick={() => deletePost(post.id)} className="badge badge-warning col-sm-4">Delete post</span>
		}
	}

	const formattedDate = formatDate(post.dateCreated)

	return (
		<div className="card border-dark mb-3">
			<div className="card-header text-center">
				<span className="col-sm-4">{post.user}</span>
				{displayDeleteButton()}
				<span className="col-sm-4">{formattedDate}</span>
			</div>
			<div className="card-body text-dark">
				<img className="card-img-top book-post-image" src={post.imageUrl} alt="Image post" />
			</div>           
		</div>
	)
}

ImagePostDetails.propTypes = {
	post: PropTypes.object,
	currentUserId: PropTypes.number,
	deletePost: PropTypes.func,
}
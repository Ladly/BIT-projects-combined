import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { formatDate } from './../../../../utils/helpers'

import './style.scss'

export const TextPostDetails = ({post, currentUserId, deletePost}) => {
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
				<h5 className="card-title text-center">{post.text}</h5>
			</div>
		</div>
	)
}

TextPostDetails.propTypes = {
	post: PropTypes.object,
	currentUserId: PropTypes.number,
	deletePost: PropTypes.func,
}
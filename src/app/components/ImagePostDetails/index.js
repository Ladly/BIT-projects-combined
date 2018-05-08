import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './style.scss'

export const ImagePostDetails = ({post, currentUserId, deletePost}) => {

	const displayDeleteButton = () => {
		if(post.userId === currentUserId) {
			return <button className="btn btn-primary btn-sm" onClick={() => deletePost(post.id)} >Delete post</button>
		}
	}

	return (
		<div className="card border-dark mb-3">
			<div className="card-header">
				<span className="float-left">{post.user}</span>
				<span className="align-center">{post.dateCreated}</span>
				<span className="float-right">{displayDeleteButton()}</span>
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
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './style.scss'

export const TextPostDetails = ({post, currentUserId, deletePost}) => {
	const displayDeleteButton = () => {
		if(post.userId === currentUserId) {
			return <button className="btn btn-primary btn-sm" onClick={() => deletePost(post.id)} >Delete post</button>
		}
	}
	
	return (
		<div className="card border-dark mb-3">
			<div className="card-header text-center">
				<span className="float-left">{post.user}</span> 
				<span className="align-center">{post.dateCreated}</span>
				<span className="float-right">{displayDeleteButton()}</span>
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
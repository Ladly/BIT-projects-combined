import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './style.scss'

export const ImagePostCard = ({post}) => {
	return (
		<Link to={`/bookpostdetails/${post.type}/${post.id}`}>
			<div className="card border-dark mb-3">
				<div className="card-header">{post.user}</div>
				<div className="card-body text-dark">
					<img className="book-post-image" src={post.imageUrl} alt="Card image cap" />
					<hr />
					<p className="card-text">
						<span>{post.type}</span>
						<span className="float-right">{post.commentsNum}</span>
					</p>             
				</div>
			</div>
		</Link>
	)
}

ImagePostCard.propTypes = {
	post: PropTypes.object
}
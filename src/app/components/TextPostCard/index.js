import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './style.scss'

export const TextPostCard = ({post}) => {
	return (
		<Link to={`/bookpostdetails/${post.type}/${post.id}`}>
			<div className="card border-dark mb-3">
				<div className="card-header text-center">{post.user}</div>
				<div className="card-body text-dark">
					<h5 className="card-title text-center">{post.text}</h5>
					<hr />
					<p className="card-text"><span>{post.type}</span><span className="float-right">{post.commentsNum}</span></p>
				</div>
			</div>
		</Link>
	)
}

TextPostCard.propTypes = {
	post: PropTypes.object
}
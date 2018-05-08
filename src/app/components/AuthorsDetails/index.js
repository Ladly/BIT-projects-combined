import React from 'react'
import PropTypes from 'prop-types'

export const AuthorsDetails = ({author}) => {

	return (
		<div className="authors-details-component">
			<img src="http://via.placeholder.com/150x150" />
			<div>
				<h3>{author.name}</h3>
				<p>Username: <span className="authors-details-accented">{author.username}</span></p>
				<p>Email: <span className="authors-details-accented">{author.email}</span></p>
				<p>Phone: <span className="authors-details-accented">{author.phone}</span></p>
			</div>    
		</div>
	)
}

AuthorsDetails.propTypes = {
	author: PropTypes.object
}
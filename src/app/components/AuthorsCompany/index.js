import React from 'react'
import PropTypes from 'prop-types'

export const AuthorsCompany = ({author}) => {

	return (
		<div className="authors-company">
			<p>Company: <span className="authors-details-accented">{author.company}</span></p>
			<p>Slogan: <span className="authors-details-accented">{author.slogan}</span></p>
		</div>
	)
} 

AuthorsCompany.propTypes = {
	author: PropTypes.object
}
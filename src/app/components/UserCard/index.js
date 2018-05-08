import React from 'react'
import PropTypes from 'prop-types'

export const UserCard = (props) => {
	const { showUser } = props

	const pickGender = () => {
		return (showUser.gender === 'female') ? 'card col-sm-3 girls-are-pink' : 'card col-sm-3'
	}

	return (
		<div className={pickGender()}>
			<img className="card-img-top" src={showUser.picture} alt="avatar" />
			<div className="card-body">
				<h5 className="card-text">{showUser.name} {showUser.last}</h5>
				<p>{showUser.email}</p>
				<p>{showUser.dob}</p>
			</div>
		</div>
	)
}

UserCard.propTypes = {
	showUser: PropTypes.object
}
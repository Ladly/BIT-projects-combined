import React from 'react'
import PropTypes from 'prop-types'

export const UserCard = (props) => {
	const { showUser } = props

	const pickGender = () => {
		return (showUser.gender === 'female') ? 'card girls-are-pink' : 'card'
	}

	return (	
		<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 ">	
			<div className={pickGender()}>
				<img className="card-img-top" src={showUser.picture} alt="avatar" />
				<div className="card-body">
					<h5><b>Name:</b> {showUser.name} {showUser.last}</h5>
					<p><b>Email:</b> {showUser.email}</p>
					<p><b>Date of birth:</b> {showUser.dob}</p>
				</div>
			</div>
		</div>
	)
}

UserCard.propTypes = {
	showUser: PropTypes.object
}
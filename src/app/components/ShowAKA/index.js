import React from 'react'
import PropTypes from 'prop-types'

export const ShowAKA = (props) => {
	const {akas} = props
	
	const displayAKA = () => {
		const AKANames = akas.map(aka => {
			return (aka.name)
		})
		return AKANames.join(', ')
	}

	return (
		<h5>Aka: {displayAKA()}</h5>
	)
}

ShowAKA.propTypes = {
	akas: PropTypes.array
}
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom' 

import './style.scss'

export const ShowCard = (props) => {
	const { show } = props
	return (
		<div className="show-card col-xs-12 col-sm-6 col-md-4 col-lg-4">
			<Link to={`/details/${show.id}`} >
				<img src={show.image} alt="show poster"/>
				<div>
					<p className="card-text text-center">{show.name}</p>
				</div>
			</Link>
		</div>
	)

}

ShowCard.propTypes = {
	show: PropTypes.object
}
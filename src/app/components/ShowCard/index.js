import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom' 

export const ShowCard = (props) => {
	const { show } = props
	return (
		<div className="card col-sm-3">
			<Link to={`/details/${show.id}`} >
				<img className="card-img-top" src={show.image} alt="show poster"/>
				<div className="card-body">
					<p className="card-text text-center">{show.name}</p>
				</div>
			</Link>
		</div>
	)

}

ShowCard.propTypes = {
	show: PropTypes.object
}
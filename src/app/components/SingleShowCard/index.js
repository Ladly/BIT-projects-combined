import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { ShowAKA } from './../ShowAKA'

import './style.scss'

export const SingleShowCard = (props) => {
	const { showDetails } = props
	const { akasInstances } = showDetails
	const { castInstances } = showDetails
	const { seasonsInstances } = showDetails

	const displaySeasons = () => {
		return seasonsInstances.map((season, i) => {
			return <li onClick={() => props.fetchEpisodesBySeason(showDetails.id, season.number)} key={i}>Season {season.number}: premiere: {season.premiereDate} ends: {season.endDate}</li>
		})
	}

	const displayCast = () => {
		return castInstances.map((cast,i) => {
			if(i > 3) {
				return false
			}
			return <li key={i} className="cast-list-item"><b>{cast.name}</b> as {cast.character}</li>
		})
	}

	return (
		<Fragment>
			<h1 className="text-center page-title">{showDetails.name}</h1>
			<ShowAKA akas={akasInstances}/>
			<div className="show-details-content">
				<p>{showDetails.summary}</p>
				<div className="row">
					<div className="image-holder col-sm-3">
						<img className="show-poster" src={showDetails.image} alt="poster"/>
					</div>
					<div className="col-sm-5">
						<h5>Cast:</h5>
						<ul className="cast-list">
							{displayCast()}
						</ul> 
						<button className="btn btn-primary">Show all</button>               
					</div>
					<div className="col-sm-4">
						<button onClick={() => props.showsCrew(showDetails.id)} className="btn btn-primary">Crew</button>
						<ul className="crew-list">
							{props.displayCrew()}
						</ul>
					</div>
				</div> 
				<div className="row">
					<div className="col-sm-6">
						<h3>Seasons:</h3>
						<ul>
							{displaySeasons()}
						</ul>
					</div> 
				</div>
			</div> 
		</Fragment>
	)
}

SingleShowCard.propTypes = {
	showDetails: PropTypes.object,
	showsCrew: PropTypes.func,
	displayCrew: PropTypes.func,
}
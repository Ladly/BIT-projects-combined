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
			return (
				<li onClick={() => props.fetchEpisodesBySeason(showDetails.id, season.number)} key={i} className="list-group-item">
					<p>Season {season.number}</p> 
					<p>premiere {season.premiereDate}</p>
					<p>ends {season.endDate}</p>
				</li>
			)
		})
	}

	const displayCast = () => {
		return castInstances.map((cast,i) => {
			if(i > 5) {
				return false
			}
			return <li key={i} className="list-group-item cast-list-item"><b>{cast.name}</b> as {cast.character}</li>
		})
	}

	return (
		<div className='single-show'>
			<div className="jumbotron single-show-jumbotron">
				<h1 className="">{showDetails.name}</h1>
				<ShowAKA akas={akasInstances}/>
			</div>
			<div className="show-details-content">
				<p>{showDetails.summary}</p>
				<div className="row image-and-cast">
					<div className="image-holder col-xs-12 col-sm-12 col-md-6 col-lg-5">
						<img className="show-poster" src={showDetails.image} alt="poster"/>
					</div>
					<div className="cast-holder col-xs-12 col-sm-12 col-md-6 col-lg-5 offset-lg-2">
						<h5>Cast</h5>
						<ul className="list-group-flush">
							{displayCast()}
						</ul> 
						{/* <button className="btn btn-primary">Show all</button> */}
					</div>
				</div> 
				<div className="row seasons-and-crew">
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
						<h3>Seasons</h3>
						<ul className="list-group-flush">
							{displaySeasons()}
						</ul>
					</div> 
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 offset-lg-2">
						<button onClick={() => props.showsCrew(showDetails.id)} className="btn btn-primary">Crew</button>
						<ul className="crew-list list-group-flush">
							{props.displayCrew()}
						</ul>
					</div>
				</div>
			</div> 
		</div>
	)
}

SingleShowCard.propTypes = {
	showDetails: PropTypes.object,
	showsCrew: PropTypes.func,
	displayCrew: PropTypes.func,
}
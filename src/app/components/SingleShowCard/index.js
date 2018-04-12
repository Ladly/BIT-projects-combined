import React, { Fragment } from 'react'

import { ShowAKA } from './../ShowAKA'

import './style.scss'

export const SingleShowCard = (props) => {
    const { showDetails } = props
    const { akasInstances } = showDetails
    const { castInstances } = showDetails
    const { seasonsInstances } = showDetails

    const displaySeasons = () => {
        return seasonsInstances.map((season, i) => {
            return <li key={i}>Season {season.number}: premiere: {season.premiereDate} ends: {season.endDate}</li>
        })
    }

    const displayCast = () => {
        return castInstances.map((cast,i) => {
            return <li key={i}><b>{cast.name}</b> as {cast.character}</li>
        })
    }

    return (
        <Fragment>
            <h1 className="text-center page-title">{showDetails.name}</h1>
            <ShowAKA akas={akasInstances}/>
            <p>{showDetails.summary}</p>
            <div className="row">
                <div className="image-holder col-sm-6">
                    <img className="show-poster" src={showDetails.image} alt="poster"/>
                </div>
                <div>
                    <h3>Seasons:</h3>
                    <ul>
                        {displaySeasons()}
                    </ul>
                    <h3>Cast:</h3>
                    <ul>
                        {displayCast()}
                    </ul>
                </div>
            </div> 
        </Fragment>
    )
}
import React from 'react'

import { Link } from 'react-router-dom'

import './style.scss'

export const SearchList = ({shows, value}) => {


    const displayListItem = () => {
        if(value === "") {
            shows = []
        }
        return shows.map(show => {
            return <Link key={show.id} to={`/details/${show.id}`}><li className="search-list-item">{show.name}</li></Link>
        })
    }

    return (
        <ul className="search-list">
           {displayListItem()}
        </ul>
    )
}
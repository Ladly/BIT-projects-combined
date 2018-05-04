import React from 'react'
import { Link } from "react-router-dom"

import './style.scss'

export const BookUserCard = ({bookUser}) => {
    return (
        <div className="book-user-card-holder">
            <Link to={`bookuserdetails/${bookUser.id}`}>
                <img src={bookUser.avatarUrl} alt="avatar image"/>
            </Link>
            <div className="book-user-card-first">
                <div className="book-user-card-details">
                    <h3>{bookUser.name}</h3>
                    <p>{bookUser.aboutShort}</p>
                </div>
                <div className="book-user-card-date">
                    <p>Last post:</p>
                    <h5>{bookUser.lastPost}</h5>
                </div>
            </div>
        </div>
    )
}
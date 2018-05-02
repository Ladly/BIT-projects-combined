import React from 'react'

import './style.scss'

export const BookUserCard = ({bookUser}) => {
    return (
        <div className="book-user-card-holder">
            <img src={bookUser.avatarUrl} alt="avatar image"/>
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
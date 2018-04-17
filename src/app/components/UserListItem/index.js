import React from 'react'

import './style.scss'

export const UserListItem = ({showUser}) => {

    const pickGender = () => {
        return (showUser.gender === 'female') ? 'list-group-item girls-are-pink' : 'list-group-item'
    }

    return (
             <li className={pickGender()}>
                <img className="show-user-img" src={showUser.picture} alt="avatar" />
                <h4 className="show-user-text">{showUser.name} {showUser.last}</h4>
                <p className="show-user-text">email: {showUser.email} {showUser.dob}</p>             
             </li>
    )
} 
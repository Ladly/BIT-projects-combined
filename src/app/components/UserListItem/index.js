import React from 'react'

import './style.scss'

export const UserListItem = ({falseUser}) => {

    const pickGender = () => {
        return (falseUser.gender === 'female') ? 'list-group-item girls-are-pink' : 'list-group-item'
    }

    return (
             <li className={pickGender()}>
                <img className="false-user-img" src={falseUser.picture} alt="avatar" />
                <h4 className="false-user-text">{falseUser.name} {falseUser.last}</h4>
                <p className="false-user-text">email: {falseUser.email} {falseUser.dob}</p>             
             </li>
    )
} 
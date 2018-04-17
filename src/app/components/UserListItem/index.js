import React from 'react'

import './style.scss'

export const UserListItem = ({falseUser}) => {

    return (
             <li className="list-group-item">
                <img className="false-user-img" src={falseUser.picture} alt="avatar" />
                <h4 className="false-user-text">{falseUser.name} {falseUser.last}</h4>
                <p className="false-user-text">email: {falseUser.email} {falseUser.dob}</p>             
             </li>
    )
} 
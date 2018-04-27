import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export const TextPostDetails = ({post}) => {
    return (
        <div className="card border-dark mb-3">
            <div className="card-header text-center"><span className="float-left">{post.user}</span> <span className="float-right">{post.dateCreated}</span></div>
            <div className="card-body text-dark">
                <h5 className="card-title text-center">{post.text}</h5>
            </div>
        </div>
    )
}
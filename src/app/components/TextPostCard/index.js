import React from 'react'

import './style.scss'

export const TextPostCard = ({post}) => {
    return (
        <div className="card border-dark mb-3">
            <div className="card-header text-center">{post.user}</div>
            <div className="card-body text-dark">
                <h5 className="card-title text-center">{post.text}</h5>
                <hr />
                <p className="card-text"><span>{post.type}</span><span className="float-right">{post.commentsNum}</span></p>
            </div>
        </div>

    )
}
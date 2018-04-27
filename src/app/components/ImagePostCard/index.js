import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export const ImagePostCard = ({post}) => {
    return (
        <Link to={`/bookpostdetails/${post.type}/${post.id}`}>
            <div className="card border-dark mb-3">
                <div className="card-header">{post.user}</div>
                <div className="card-body text-dark">
                <img className="card-img-top book-post-image" src={post.imageUrl} alt="Card image cap" />
                    <hr />
                    <p className="card-text"><span>{post.type}</span><span className="float-right">{post.commentsNum}</span></p>             
                </div>
            </div>
        </Link>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export const VideoPostCard = ({post}) => {
    return (
            <Link to={`/bookpostdetails/${post.type}/${post.id}`}>
                <div className="card border-dark mb-3">
                    <div className="card-header">{post.user}</div>
                    <div className="card-body text-dark">
                    <iframe className="book-post-iframe" src={post.videoUrl} allow="autoplay" frameBorder="0" allowFullScreen encrypted-media="true"></iframe>
                        <hr />
                        <p className="card-text"><span>{post.type}</span><span className="float-right">{post.commentsNum}</span></p>
                    </div>
                </div>
            </Link>
    )
}

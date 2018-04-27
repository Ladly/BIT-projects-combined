import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export const VideoPostDetails = ({post}) => {
    return (
            <div className="card border-dark mb-3">
                <div className="card-header">{post.user}<span className="float-right">{post.dateCreated}</span></div>
                <div className="card-body text-dark">
                    <iframe className="book-post-iframe" src={post.videoUrl} allow="autoplay" frameBorder="0" allowFullScreen encrypted-media="true"></iframe>
                </div>
            </div>
    )
}

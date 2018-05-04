import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export const VideoPostDetails = ({post, currentUserId, deletePost}) => {
    const displayDeleteButton = () => {
        if(post.userId === currentUserId) {
            return <button className="btn btn-primary btn-sm" onClick={() => deletePost(post.id)} >Delete post</button>
        }
    }

    return (
            <div className="card border-dark mb-3">
                <div className="card-header">
                    <span className="float-left">{post.user}</span>
                    <span className="align-center">{post.dateCreated}</span>
                    <span className="float-right">{displayDeleteButton()}</span>
                </div>
                <div className="card-body text-dark">
                    <iframe className="book-post-iframe" src={post.videoUrl} allow="autoplay" frameBorder="0" allowFullScreen encrypted-media="true"></iframe>
                </div>
            </div>
    )
}

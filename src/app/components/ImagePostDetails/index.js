import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export const ImagePostDetails = ({post}) => {
    console.log(post)
    return (
            <div className="card border-dark mb-3">
                <div className="card-header">{post.user}<span className="float-right">{post.dateCreated}</span></div>
                <div className="card-body text-dark">
                    <img className="card-img-top book-post-image" src={post.imageUrl} alt="Image post" />
                </div>           
            </div>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'

import { formatText } from './../../../../utils/helpers'

export const BlogPostListItem = ({blogPost}) => {
    return (
        <div  className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <Link to="somecoolplace"><h5 className="mb-1">{blogPost.title}</h5></Link>
            </div>
            <p className="mb-1">{formatText(blogPost.body, 0, 110)}</p>
        </div>
    )
}
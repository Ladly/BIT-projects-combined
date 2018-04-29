import React from 'react'

export const BookPostComment = ({comment}) => {
    return (
        <div className="card">
            <div className="card-header">{comment.authorName}<span className="float-right">{comment.created}</span></div>
            <div className="card-body">
                <p className="card-text">{comment.comment}</p>
            </div>
        </div>
    )
}
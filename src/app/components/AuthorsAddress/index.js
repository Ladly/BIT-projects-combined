import React from 'react'

export const AuthorsAddress = ({author}) => {

    return (
        <div className="author-address">
            <p>Address: <span className="authors-details-accented">{author.address}</span></p>
            <p>City: <span className="authors-details-accented">{author.city}</span></p>
            <p>ZipCode: <span className="authors-details-accented">{author.zipcode}</span></p>
        </div>
    )
} 
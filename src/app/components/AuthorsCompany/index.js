import React from 'react'

export const AuthorsCompany = ({author}) => {

    return (
        <div className="authors-company">
            <p>Company: <span className="authors-details-accented">"{author.company}"</span></p>
            <p>Slogan: <span className="authors-details-accented">"{author.slogan}"</span></p>
        </div>
    )
} 
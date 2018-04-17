import React from 'react'

export const UserCard = (props) => {
    const { falseUser } = props
    return (
        // <div className="col-sm-3">
            <div className="card col-sm-4">
                <img className="card-img-top" src={falseUser.picture} alt="avatar" />
                <div className="card-body">
                    <h5 className="card-text">{falseUser.name} {falseUser.last}</h5>
                    <p>{falseUser.email}</p>
                    <p>{falseUser.dob}</p>
                </div>
            </div>
        // </div>
    )
}
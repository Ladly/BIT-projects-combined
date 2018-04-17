import React from 'react'

export const UserCard = (props) => {
    const { falseUser } = props

    const pickGender = () => {
        return (falseUser.gender === 'female') ? 'card col-sm-3 girls-are-pink' : 'card col-sm-3'
    }

    return (
        <div className={pickGender()}>
            <img className="card-img-top" src={falseUser.picture} alt="avatar" />
            <div className="card-body">
                <h5 className="card-text">{falseUser.name} {falseUser.last}</h5>
                <p>{falseUser.email}</p>
                <p>{falseUser.dob}</p>
            </div>
        </div>
    )
}
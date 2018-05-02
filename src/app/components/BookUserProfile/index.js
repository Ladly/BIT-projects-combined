import React from 'react'

import './style.scss'

export const BookUserProfile = ({profile}) => {
    return (
        <div className="col-sm-11 offset-sm-1 profile-holder">
            <img className="profile-avatar" src={profile.avatarUrl} alt="profile avatar" />
            <div className="profile-details text-center">
                <h2 className="text-center">{profile.name}</h2>
                <p>{profile.aboutShort}</p>
            </div>
            <div className="profile-holder-footer">
                <div className="pc">
                     <div className="pc-circle">P</div> <span className="naming-wtf">{profile.postsCount}</span>
                </div>
                <div className="pc">
                    <div className="pc-circle">C</div> <span className="naming-wtf">{profile.commentsCount}</span>
                </div>
            </div>
        </div>
    )
}
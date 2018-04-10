import React from 'react'

export const ShowCard = (props) => {
        const { show } = props
        return (
            <div className="card col-sm-3">
                <img className="card-img-top" src={show.image} alt="show poster"/>
                <div className="card-body">
                    <p className="card-text text-center">{show.name}</p>
                </div>
            </div>
        )

}
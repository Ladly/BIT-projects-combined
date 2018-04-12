import React from 'react'

export const ShowAKA = (props) => {
    const {akas} = props
    
    const displayAKA = () => {
        const AKANames = akas.map(aka => {
            return (aka.name)
        })
        return AKANames.join(', ')
    }

    return (
        <h5 className="text-center">Aka: {displayAKA()}</h5>
    )
}
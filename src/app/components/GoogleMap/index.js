import React from 'react'
import PropTypes from 'prop-types'

export const GoogleMap = ({author}) => {
	return <iframe src={`https://www.google.com/maps/embed/v1/view?zoom=10&center=${44.824252}%2C${20.373495}&key=AIzaSyCc5ZxReNKVj8lacH6mwrdV_vwG2U6TfhI`}></iframe> 
}

GoogleMap.propTypes = {
	author: PropTypes.object
}

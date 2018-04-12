import React, { Component, Fragment } from 'react' 
import { Route, Switch, Link } from "react-router-dom";

import { Navigation } from './components/Navigation'
import Homepage from './containers/Homepage'
import ShowDetailsPage from './containers/ShowDetailsPage'


export const App = () => {
    
    return (
        <Fragment>
            <Navigation />
            <ShowDetailsPage />
        </Fragment>
    )
}


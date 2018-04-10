import React, { Component, Fragment } from 'react' 
import { Route, Switch, Link } from "react-router-dom";

import { Navigation } from './components/Navigation'


export const App = () => {
    
    return (
        <Fragment>
            <Navigation />
            <h1>Bit show</h1>
        </Fragment>
    )
}


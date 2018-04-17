import React, { Component, Fragment } from 'react' 
import { Route, Switch, Link } from "react-router-dom";

import { Navigation } from './components/Navigation'
import Homepage from './containers/Homepage'
import ShowDetailsPage from './containers/ShowDetailsPage'
import CommentsPage from './containers/CommentsPage'
import FalseUsersPage from './containers/FalseUsersPage'
import { Footer } from './components/Footer'


export const App = () => {
    
    return (
        <Fragment>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/details/:id" component={ShowDetailsPage}/>
                <Route exact path="/comments/:id" component={CommentsPage}/>
                <Route exact path="/falseusers" component={FalseUsersPage}/>
            </Switch>
            <Footer />
        </Fragment>
    )
}


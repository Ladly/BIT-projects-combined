import React, { Component, Fragment } from 'react' 
import { Route, Switch, Link } from 'react-router-dom'

import Navigation from './components/Navigation'
import Homepage from './containers/Homepage'
import ShowDetailsPage from './containers/ShowDetailsPage'
import CommentsPage from './containers/CommentsPage'
import ShowUsersPage from './containers/ShowUsersPage'
import BlogPage from './containers/BlogPage'
import BlogPostDetailsPage from './containers/BlogPostDetailsPage'
import BlogPostAuthorDetailPage from './containers/BlogPostAuthorDetailPage'
import BlogAuthorsPage from './containers/BlogAuthorsPage'
import BookFeedPage from './containers/BookFeedPage'
import BookPostDetailsPage from './containers/BookPostDetailsPage'
import BookProfilePage from './containers/BookProfilePage'
import BookUsersPage from './containers/BookUsersPage'
import BookUsersDetailsPage from './containers/BookUsersDetailsPage'
import LoginPage from './containers/LoginPage'
import { Footer } from './components/Footer'

import { ExtendedLogin } from './HOC/ExtendedLogin'


export const App = () => {
	
	return (
		<Fragment>
			<Navigation />
			<Switch>
				<Route exact path="/" component={ExtendedLogin(Homepage)}/>
				<Route exact path="/homepage" component={Homepage}/>
				<Route exact path="/details/:id" component={ShowDetailsPage}/>
				<Route exact path="/comments/:id" component={CommentsPage}/>
				<Route exact path="/showusers" component={ShowUsersPage}/>
				<Route exact path="/blog" component={BlogPage}/>
				<Route exact path="/blogpostdetails/:id" component={BlogPostDetailsPage}/>
				<Route exact path="/blogpostauthordetails/:id" component={BlogPostAuthorDetailPage}/>
				<Route exact path="/blogauthors" component={BlogAuthorsPage}/>
				<Route exact path="/bookfeed" component={BookFeedPage}/>
				<Route exact path="/bookpostdetails/:type/:id" component={BookPostDetailsPage}/>
				<Route exact path="/bookprofile" component={BookProfilePage}/>
				<Route exact path="/bookusers" component={BookUsersPage}/>
				<Route exact path="/bookuserdetails/:id" component={BookUsersDetailsPage}/>
				<Route exact path="/login" component={LoginPage}/>
			</Switch>
			<Footer />
		</Fragment>
	)
}


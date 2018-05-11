import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { 
	fetchShowUsers,
	switchView,
	getUsersFromLocalStorage,
	getViewFromLocalStorage
} from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { UserCard } from './../../components/UserCard'
import { UserListItem } from './../../components/UserListItem'

import { LocalStorageService } from './../../../../services/LocalStorageService'

import './style.scss'

class ShowUsersPage extends Component {

	componentDidMount() {
		if(localStorage.getItem('users') === null) {
			this.props.fetchShowUsers()
				.then(users => {
					const { value } = users
					LocalStorageService.addItemLocalStorage('users', value)
				})
		} else {
			this.props.getUsersFromLocalStorage('users')
		}

		this.props.getViewFromLocalStorage('view')
	}

	displayUsersCard = () => {
		if(this.props.showUsersLoading) {
			return <Loading />
		} else if (this.props.showUsersSuccess) {
			return this.props.showUsers.map((showUser, i) => {
				return <UserCard key={i} showUser={showUser}/> 
			})
		} else if (this.props.showUsersError) {
			return <Error />
		}
	}

	displayUsersList = () => {        
		if(this.props.showUsersLoading) {
			return <Loading />
		} else if (this.props.showUsersSuccess) {
			const listItems = this.props.showUsers.map((showUser, i) => {
				return (
					<UserListItem key={i} showUser={showUser}/>
				)
			})           

			return (
				<ul className="list-group list-group-flush">
					{listItems}
				</ul>
			)

		} else if (this.props.showUsersError) {
			return <Error />
		}
	}

	pickView = () => {
		return !this.props.currentView ? this.displayUsersList() : this.displayUsersCard()
	}

	pickButtonDisplay = () => {
		return !this.props.currentView ? 'Grid view' : 'List view'
	}

	getAndStoreUsers = () => {
		this.props.fetchShowUsers() 
			.then(users => {
				const { value } = users
				LocalStorageService.addItemLocalStorage('users', value)
			})
	}

	saveAndChangeView = () => {        
		this.props.switchView(this.props.currentView)
		LocalStorageService.addItemLocalStorage('view', !this.props.currentView)
	}

	render() {
		return (
			<div className="container show-users-container">
				<div className="row">
					<div className="show-users-controls col-xs-12 col-sm-12 col-md-2">
						<button onClick={this.saveAndChangeView} className="btn btn-primary">{this.pickButtonDisplay()}</button>
						<button onClick={this.getAndStoreUsers} className="btn btn-primary">Refresh users</button>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-10">
						<div className="row">
							{this.pickView()}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		showUsers: state.showUsersReducer.fetchedShowUsers,
		showUsersLoading: state.showUsersReducer.fetchedShowUsersLoading,
		showUsersSuccess: state.showUsersReducer.fetchedShowUsersSuccess,
		showUsersError: state.showUsersReducer.fetchedShowUsersError,
		currentView: state.showUsersReducer.displayCardView,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchShowUsers: () => dispatch(fetchShowUsers()),
		switchView: (currentView) => dispatch(switchView(currentView)),
		getUsersFromLocalStorage: (key) => dispatch(getUsersFromLocalStorage(key)),
		getViewFromLocalStorage: (key) => dispatch(getViewFromLocalStorage(key)),
	}
}

ShowUsersPage.propTypes = {
	fetchShowUsers: PropTypes.func,
	switchView: PropTypes.func,
	currentView: PropTypes.bool,
	showUsersError: PropTypes.bool,
	showUsers: PropTypes.array,
	showUsersSuccess: PropTypes.bool,
	showUsersLoading: PropTypes.bool,
	getViewFromLocalStorage: PropTypes.func,
	getUsersFromLocalStorage: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUsersPage)
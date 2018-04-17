import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    fetchShowUsers,
    switchView 
} from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { UserCard } from './../../components/UserCard'
import { UserListItem } from './../../components/UserListItem'


import './style.scss'

class ShowUsersPage extends Component {

    componentDidMount() {
        this.props.fetchShowUsers()
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
        return !this.props.displayCardView ? this.displayUsersList() : this.displayUsersCard()
    }

    pickButtonDisplay = () => {
        return !this.props.displayCardView ? "Grid view" : "List view"
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <button onClick={() => this.props.switchView(this.props.displayCardView)} className="btn btn-primary">{this.pickButtonDisplay()}</button>
                    </div>
                    <div className="col-sm-6">
                        <button onClick={() => this.props.fetchShowUsers()} className="btn btn-primary">Refresh users</button>
                    </div>
                </div>
                <div className="row">
                    {this.pickView()}
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
        displayCardView: state.showUsersReducer.displayCardView,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchShowUsers: () => dispatch(fetchShowUsers()),
        switchView: (currentView) => dispatch(switchView(currentView))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUsersPage)
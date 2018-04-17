import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    fetchFalseUsers,
    switchView 
} from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { UserCard } from './../../components/UserCard'
import { UserListItem } from './../../components/UserListItem'


import './style.scss'

class FalseUsersPage extends Component {

    componentDidMount() {
        this.props.fetchFalseUsers()
    }

    displayUsersCard = () => {
        if(this.props.falseUsersLoading) {
            return <Loading />
        } else if (this.props.falseUsersSuccess) {
            return this.props.falseUsers.map((falseUser, i) => {
                return <UserCard key={i} falseUser={falseUser}/> 
            })
        } else if (this.props.falseUsersError) {
            return <Error />
        }
    }

    displayUsersList = () => {
        if(this.props.falseUsersLoading) {
            return <Loading />
        } else if (this.props.falseUsersSuccess) {
            const listItems = this.props.falseUsers.map((falseUser, i) => {
                return (
                    <UserListItem key={i} falseUser={falseUser}/>
                )
            })

            return (
                <ul className="list-group list-group-flush">
                    {listItems}
                </ul>
            )

        } else if (this.props.falseUsersError) {
            return <Error />
        }
    }


    pickView = () => {
        return !this.props.displayCardView ? this.displayUsersList() : this.displayUsersCard()
    }



    render() {
        return (
            <div className="container">
            <button onClick={() => this.props.switchView(this.props.displayCardView)} className="btn btn-primary">Switch View</button>
                <div className="row">
                    {this.pickView()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        falseUsers: state.falseUsersReducer.fetchedFalseUsers,
        falseUsersLoading: state.falseUsersReducer.fetchedFalseUsersLoading,
        falseUsersSuccess: state.falseUsersReducer.fetchedFalseUsersSuccess,
        falseUsersError: state.falseUsersReducer.fetchedFalseUsersError,
        displayCardView: state.falseUsersReducer.displayCardView,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFalseUsers: () => dispatch(fetchFalseUsers()),
        switchView: (currentView) => dispatch(switchView(currentView))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(FalseUsersPage)
import React, { Component } from 'react'
import { connect } from 'react-redux'


import { fetchUsers } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { BookUserCard } from './../../components/BookUserCard'

import './style.scss'

class BookUsersPage extends Component {

    componentDidMount() {
        this.props.getUsers()
    }

    displayUsers = () => {
        if(this.props.bookUsersLoading) {
            return <Loading />
        } else if (this.props.bookUsersSuccess) {
            return this.props.bookUsers.map(bookUser => {
                return <BookUserCard key={bookUser.id} bookUser={bookUser}/>
            })
        } else {
            <Error />
        }
    }

    render() {
        return (
            <div className="container">
                {this.displayUsers()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bookUsers: state.bookUsersPageReducer.fetchedBookUsers,
        bookUsersLoading: state.bookUsersPageReducer.fetchedBookUsersLoading,
        bookUsersSuccess: state.bookUsersPageReducer.fetchedBookUsersSuccess,
        bookUsersError: state.bookUsersPageReducer.fetchedBookUserssError
        }
}

const mapDispatchToProps = dispatch => {
    return {
           getUsers: () => dispatch(fetchUsers()) 
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookUsersPage)
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchBookPosts } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

import './style.scss'

class BookFeedPage extends Component {

    componentDidMount() {
        this.props.getBookPosts()
    }

    displayPosts = () => {
        if(this.props.postsLoading) {
            return <Loading />
        } else if (this.props.postsSuccess) {
            return 'success'
        } else {
            return <Error />
        }
    } 

    render() {
        return (
            <div className="container">
                {this.displayPosts()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.bookFeedReducer.fetchedBookShows,
        postsLoading: state.bookFeedReducer.fetchedBookShowsLoading,
        postsSuccess: state.bookFeedReducer.fetchedBookShowsSuccess,
        postsError: state.bookFeedReducer.fetchedBookShowsError
        }
}

const mapDispatchToProps = dispatch => {
    return {
        getBookPosts: () => dispatch(fetchBookPosts()) 
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookFeedPage)
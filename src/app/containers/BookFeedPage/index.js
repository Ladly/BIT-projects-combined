import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    fetchBookPosts,
    displayTextModal,
    hideTextModal
 } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import TextPostModal  from './../TextPostModal'

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
    
    displayTxtModal = () => {
        return this.props.textModal ? this.props.hideTextModal() : this.props.displayTextModal()
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.displayTxtModal} className="btn btn-primary btn-block">Add text post</button>
                <TextPostModal display={this.props.textModal} hideModal={this.props.hideTextModal}/>
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
        postsError: state.bookFeedReducer.fetchedBookShowsError,
        textModal: state.bookFeedReducer.displayTextModal
        }
}

const mapDispatchToProps = dispatch => {
    return {
        getBookPosts: () => dispatch(fetchBookPosts()),
        displayTextModal: () => dispatch(displayTextModal()),
        hideTextModal: () => dispatch(hideTextModal())
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookFeedPage)
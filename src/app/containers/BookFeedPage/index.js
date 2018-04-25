import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    fetchBookPosts,
    displayTextModal,
    hideTextModal,
    displayImageModal,
    hideImageModal
 } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import TextPostModal  from './../TextPostModal'
import ImagePostModal  from './../ImagePostModal'

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

    displayImgModal = () => {
        return this.props.imageModal ? this.props.hideImageModal() : this.props.displayImageModal()
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.displayTxtModal} className="btn btn-primary btn-block">Add text post</button>
                <button onClick={this.displayImgModal} className="btn btn-primary btn-block">Add image post</button>
                <TextPostModal display={this.props.textModal} hideModal={this.props.hideTextModal}/>
                <ImagePostModal display={this.props.imageModal} hideModal={this.props.hideImageModal}/>
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
        textModal: state.bookFeedReducer.displayTextModal,
        imageModal: state.bookFeedReducer.displayImageModal
        }
}

const mapDispatchToProps = dispatch => {
    return {
        getBookPosts: () => dispatch(fetchBookPosts()),
        displayTextModal: () => dispatch(displayTextModal()),
        hideTextModal: () => dispatch(hideTextModal()),
        displayImageModal: () => dispatch(displayImageModal()),
        hideImageModal: () => dispatch(hideImageModal())
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookFeedPage)
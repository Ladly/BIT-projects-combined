import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchBlogPosts } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

import './style.scss'

class BlogPage extends Component {

    componentDidMount() {
        this.props.getBlogPosts()
    }



   

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4 text-center">Blog Posts</h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        blogPosts: state.blogPageReducer.fetchedBlogPosts,
        blogPostsLoading: state.blogPageReducer.fetchedBlogPostsLoading,
        blogPostsSuccess: state.blogPageReducer.fetchedBlogPostsSuccess,
        blogPostsError: state.blogPageReducer.fetchedBlogPostsError  
        }
}

const mapDispatchToProps = dispatch => {
    return {
        getBlogPosts: () => dispatch(fetchBlogPosts())
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)
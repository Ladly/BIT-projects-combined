import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { fetchBlogPost } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

import { BONUS_BLOG_TEXT } from './../../../../utils/bonusBlogText'

class BlogPostDetailsPage extends Component {

    componentDidMount() {
        this.props.getBlogPost(this.props.match.params.id)
    }

    displayBlogPost = () => {
        if(this.props.blogPostLoading) {
            return <Loading />
        } else if(this.props.blogPostSuccess) {            
            return (
                
                <Fragment>
                     <div className="jumbotron">
                        <h1 className="display-4 text-center">{this.props.blogPost.title}</h1>
                    </div>                 
                    <div>
                        <p className="text-center">{`${this.props.blogPost.body} ${BONUS_BLOG_TEXT}`}</p>
                    </div>
                    <hr />
                </Fragment>
            )
        } else {
            return <Error />
        }
    }

    render() {
        return (
            <div className="container">
           
                {this.displayBlogPost()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        blogPost: state.blogPostDetailsReducer.fetchedBlogPost,
        blogPostLoading: state.blogPostDetailsReducer.fetchedBlogPostLoading,
        blogPostSuccess: state.blogPostDetailsReducer.fetchedBlogPostSuccess,
        blogPostError: state.blogPostDetailsReducer.fetchedBlogPostError 
        }
}

const mapDispatchToProps = dispatch => {
    return {
        getBlogPost: (id) => dispatch(fetchBlogPost(id))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostDetailsPage)
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { 
    fetchAuthorsPosts,
    fetchAuthor
} from './actions'

import './style.scss'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { formatText } from './../../../../utils/helpers'


class AuthorsPosts extends Component {

    componentDidMount() {
        this.props.getAuthorsPosts(this.props.userId)
        this.props.getAuthor(this.props.userId)
         
    }

    displayAuthor = () => {
        if(this.props.authorLoading) {
            return <Loading />
        } else if(this.props.authorSuccess) {
            return <h2>{this.props.author.name}</h2>
   
        } else {
            return <Error />
        }
    }

    displayAuthorsPosts = () => {
        if(this.props.authorsPostsLoading) {
            return <Loading />
        } else if(this.props.authorsPostsSuccess) {
            return this.props.authorsPosts.map(authorsPost => {
                return (
                    <Link key={authorsPost.id} to={`/blogpostauthordetails/${this.props.userId}`}>
                        <li className="list-group-item"><b>{formatText(authorsPost.title, 0, 60)}</b> - {formatText(authorsPost.body, 0, 60)}</li>
                    </Link>
                )                     
            })
   
        } else {
            return <Error />
        }
    }

    render() {
        return (
            <Fragment>
                {this.displayAuthor()}
                <hr />
                <h3>Three more posts from same author</h3>
                <ul className="list-group authors-list">
                    {this.displayAuthorsPosts()}
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
            authorsPosts: state.authorsPostsReducer.fetchedAuthorsPosts,
            authorsPostsLoading: state.authorsPostsReducer.fetchedAuthorsPostsLoading,
            authorsPostsSuccess: state.authorsPostsReducer.fetchedAuthorsPostsSuccess,
            authorsPostsError: state.authorsPostsReducer.fetchedAuthorsPostsError,

            author: state.authorsPostsReducer.fetchedAuthor,
            authorLoading: state.authorsPostsReducer.fetchedAuthorLoading,
            authorSuccess: state.authorsPostsReducer.fetchedAuthorSuccess,
            authorError: state.authorsPostsReducer.fetchedAuthorError 
        }
}

const mapDispatchToProps = dispatch => {
    return {
        getAuthorsPosts: (id) => dispatch(fetchAuthorsPosts(id)),
        getAuthor: (id) => dispatch(fetchAuthor(id)),
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPosts)
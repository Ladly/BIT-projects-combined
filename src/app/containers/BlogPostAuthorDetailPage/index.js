import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    fetchAuthor
} from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'
import { formatText } from './../../../../utils/helpers'


class BlogPostAuthorDetailsPage extends Component {

    componentDidMount() {
        this.props.getAuthor(this.props.match.params.id)         
    }

    render() {
        return (
            <div className="container">
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
            author: state.authorsPostsReducer.fetchedAuthor,
            authorLoading: state.authorsPostsReducer.fetchedAuthorLoading,
            authorSuccess: state.authorsPostsReducer.fetchedAuthorSuccess,
            authorError: state.authorsPostsReducer.fetchedAuthorError 
        }
}

const mapDispatchToProps = dispatch => {
    return {
        getAuthor: (id) => dispatch(fetchAuthor(id)),
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostAuthorDetailsPage)
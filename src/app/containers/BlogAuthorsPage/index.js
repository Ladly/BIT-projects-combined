import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 

import { fetchAuthors } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

import './style.scss'

class BlogAuthorsPage extends Component {

    componentDidMount() {
        this.props.getAuthors()
    }

    displayAuthors = () => {
        if(this.props.authorsLoading) {
            return <Loading />
        } else if(this.props.authorsSuccess) {
            return this.props.authors.map(author => {
                return (
                    <Link key={author.id} to={`/blogpostauthordetails/${author.id}`}>
                        <li className="list-group-item">{author.name}</li>
                    </Link>
                )
            })    
        } else {
            return <Error />
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center authors-title">Blog Authors</h1>

                <ul className="list-group list-group-flush authors-list">  
                    {this.displayAuthors()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authors: state.authorsPageReducer.fetchedAuthors,
        authorsLoading: state.authorsPageReducer.fetchedAuthorsLoading,
        authorsSuccess: state.authorsPageReducer.fetchedAuthorsSuccess,
        authorsError: state.authorsPageReducer.fetchedAuthorsError,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAuthors: () => dispatch(fetchAuthors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogAuthorsPage)

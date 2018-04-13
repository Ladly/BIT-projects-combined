import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchShowDetailsAndCast } from './actions'

import { SingleShowCard } from './../../components/SingleShowCard'
import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

class ShowDetailsPage extends Component {

    componentDidMount() {
        this.props.detailsAndCast(this.props.match.params.id)
    }

    displayDetails = () => {
        if(this.props.showDetailsLoading) {
            return <Loading />
        } else if(this.props.showDetailsSuccess) {
            return <SingleShowCard showDetails={this.props.showDetails}/>
        } else if (this.props.showDetailsError) {
            return <Error />
        }
    }

    render() {        
        return (
            <div className="container">
                {this.displayDetails()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const showDetails = state.showDetailsReducer
return {
    showDetailsLoading: showDetails.fetchedShowDetailsLoading,
    showDetailsSuccess: showDetails.fetchedShowDetailsSuccess,
    showDetailsError: showDetails.fetchedShowDetailsError,
    showDetails: showDetails.showDetailsAndCast
    }
}

const mapDispatchToProps = dispatch => {
return {
        detailsAndCast: query => dispatch(fetchShowDetailsAndCast(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailsPage)
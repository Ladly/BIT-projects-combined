import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    fetchShowDetailsAndCast,
    fetchShowsCrew 
} from './actions'

import './style.scss'

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

    displayCrew = () => {
        if(this.props.showCrewLoading){
            return <Loading />
        } else if(this.props.showCrewSuccess) {
            return this.props.showCrew.map((member, i) => {
                return <li key={i} className="crew-list-item">{member.type}: {member.name} </li>
            })
        } else if (this.props.showCrewError) {
            return <Error />
        }
    }

    render() {        
        return (
            <div className="container">
                {this.displayDetails()}
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-primary" onClick={() => this.props.showsCrew(this.props.match.params.id)}>Crew</button>
                        <ul className="crew-list">
                            {this.displayCrew()}
                        </ul>
                    </div> 
                    <div className="col-6">  
                        <ul>
                            <li>placeholder for episodes</li> 
                            <li>will be added in next task</li> 

                        </ul>
                    </div>
                </div>
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
        showDetails: showDetails.showDetailsAndCast,

        showCrewLoading: showDetails.fetchedShowsCrewLoading,
        showCrewSuccess: showDetails.fetchedShowsCrewSuccess,
        showCrewError: showDetails.fetchedShowsCrewError,
        showCrew: showDetails.showsCrew
    }
}

const mapDispatchToProps = dispatch => {
return {
        detailsAndCast: query => dispatch(fetchShowDetailsAndCast(query)),
        showsCrew: id => dispatch(fetchShowsCrew(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailsPage)
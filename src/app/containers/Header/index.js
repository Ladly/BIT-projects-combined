import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchTopThreeShows } from './actions'

import { Loading } from './../../components/Loading'
import { Error } from './../../components/Error'

import './style.scss'

class Header extends Component {

    componentDidMount() {
        this.props.fetchTopThreeShows()
    }

    displayTopThreeShows = () => {
        if(this.props.topThreeShowsLoading) {
            return <Loading />
        } else if (this.props.topThreeShowsSuccess) {
            return this.props.topThreeShows.map(show => {
                return (
                    <div className="col-sm-3" key={show.id}>
                        <img src={show.image} alt=""/>
                        <p>{show.name}</p>
                        <p><b>Rating</b>: {show.rating}</p>
                    </div>
                )
            }) 
            
        } else (this.props.topThreeShowsError)
        return <Error />
    }

    render() {
        console.log('index', this.props.topThreeShows)
        return (
            <div className="jumbotron">
                <h1 className="display-4 text-center">Bit Show</h1>
                <div className="row">
                    {this.displayTopThreeShows()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        topThreeShows: state.headerReducer.topThreeShows,
        topThreeShowsLoading: state.headerReducer.topThreeShowsLoading,
        topThreeShowsSuccess: state.headerReducer.topThreeShowsSuccess,
        topThreeShowsError: state.headerReducer.topThreeShowsError
        }
}

const mapDispatchToProps = dispatch => {
    return {
           fetchTopThreeShows: () => dispatch(fetchTopThreeShows()) 
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
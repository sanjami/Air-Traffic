import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Error from './Error';
import { dataServices } from '../../../servece/dataService'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showErrorComponent: false
        }
    }

    handleError = () => {
        this.setState({
            showErrorComponent: true
        })
    }

    showErrorComponent = () => {
        if (this.state.showErrorComponent === true) {
            return <Error/>
        }
    }

    render () {
        return (
            <div>
                <h1>Airtraffic app</h1>
                <p>If you want to see all the airplanes that are flying over your current location you must agree to share your location with us</p>
                <Link to='/flights'>I agree</Link>
                <button onClick={this.handleError}>I don't agree</button>
                {this.showErrorComponent()}
            </div>
        )
    }
}

export default Home;
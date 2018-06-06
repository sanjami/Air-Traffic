import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Jumbotron } from 'react-bootstrap';
import Error from './Error';

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
            <Jumbotron id="home">
                <h1>Airtraffic app</h1>
                <p>If you want to see all the airplanes that are flying over your current location you must agree to share your location with us</p>
                <p>
                <Link to='/flights' className="btn btn-primary homeBtn" role="button">I agree</Link>
                <Button bsStyle="primary" onClick={this.handleError} className="homeBtn">I don't agree</Button>
                </p>
                {this.showErrorComponent()}
            </Jumbotron>
        )
    }
}

export default Home;
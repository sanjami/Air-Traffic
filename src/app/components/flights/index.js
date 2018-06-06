import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert, Button, Image } from 'react-bootstrap';
import giphy1 from '../../../images/giphy1.gif'
import FlightsList from './FlightsList';
import {
    fetchAllFlights,
} from '../../actions/flightsActions';

class Flights extends Component {

    constructor(props) {
        super(props)
        this.state = {
            latitude: '',
            longitude: '',
        }
    }

    componentDidMount() {
        if (this.props.allFlights === false) {

            this.onSetLocation();
        }

        this.interval = setInterval(() => this.onSetLocation(), 60000);
    }

    onSetLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }, () => { this.props.onFetchFlights(this.state) })
        }
        );
    }

    handleFetchAgain = () => {
        const { latitude, longitude } = this.state;
        this.props.onFetchFlights({ latitude, longitude })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        let mainContent = null;

        const { allFlights, allFlightsLoading, allFlightsError } = this.props;

        if (allFlightsLoading !== false) {

            mainContent = (
                <div className="loading">
                    <Image src={giphy1} alt="loading" className="loadingImg" />
                    <p>Loading...</p>
                </div>
            );

        } else if (allFlightsError !== false) {

            mainContent = (
                <Alert bsStyle="danger" className="alert">
                    <h4>Oh snap! You got an error!</h4>
                    <p>
                        <Button bsStyle="danger" onClick={this.handleFetchAgain}>Try again</Button>
                    </p>
                </Alert>
            );
        } else if (allFlights !== undefined && allFlights !== false && allFlights !== {}) {

            let sortedFlights = allFlights.sort((a, b) => b.altitude - a.altitude);
            mainContent = (<FlightsList flights={sortedFlights} />);
        }

        return (
            <div>
                {mainContent}
            </div>
        )
    }
}

Flights.propTypes = {
    onFetchFlights: PropTypes.func,
    allFlights: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.bool,
    ]),
    allFlightsLoading: PropTypes.bool,
    allFlightsError: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),

};

const mapStateToProps = state => {
    return {
        allFlights: state.flightsReducer.allFlights,
        allFlightsLoading: state.flightsReducer.allFlightsLoading,
        allFlightsError: state.flightsReducer.allFlightsError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchFlights: (position) => dispatch(fetchAllFlights(position)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Flights);

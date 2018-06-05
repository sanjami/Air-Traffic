import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { dataServices } from '../../../servece/dataService';
import FlightsList from './FlightsList';
import {
    fetchAllFlights,
    fetchFlightsSucceeded,
    fetchFlightsFailed
} from '../../actions/flightsActions';

class Flights extends Component {

    componentDidMount() {
        this.props.onFetchFlights();
    }


    render() {
        const { allFlights, allFlightsLoading, allFlightsError } = this.props;

        let mainContent = null;

        if (allFlightsLoading === true) {
            mainContent = (<div>loadingg</div>);
        } else if (allFlightsError === true) {
            mainContent = (<div>error</div>);
        } else if (allFlights !== false) {
            mainContent = (<FlightsList flights={allFlights} />);
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
};

const mapStateToProps = state => {
    return {
        allFlights: state.flightsReducer.allFlights,
        allFlightsLoading: state.flightsReducer.allFlights,
        allFlightsError: state.flightsReducer.allFlights
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchFlights: () => dispatch(fetchAllFlights()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Flights);

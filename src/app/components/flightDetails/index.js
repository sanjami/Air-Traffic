import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import giphy1 from '../../../images/giphy1.gif'
import {
    fetchOneFlight
} from '../../actions/flightsActions'
import FlightInfo from './FlightInfo';

class FlightDetails extends Component {

    componentDidMount() {
        this.props.onFetchOneFlight(this.props.match.params.id.toString())
    }

    render() {
        let flightContent = null;

        const { oneFlight, oneFlightLoading, oneFlightError } = this.props;

        if (oneFlightLoading !== false) {
            flightContent = (
                <div className="loading">
                    <Image src={giphy1} alt="loading" className="loadingImg" />
                    <p>Loading...</p>
                </div>
            );

        } else if (oneFlightError !== false) {

            flightContent = (
                <Alert bsStyle="danger" className="alert">
                    <h4>Oh snap! You got an error!</h4>
                    <p>
                        <Link to='/flights' className="btn btn-primary" role="button" id="linkButton">Go back to flights list</Link>
                    </p>
                </Alert>
            )
        } else if (oneFlight !== undefined && oneFlight !== false && oneFlight !== {}) {

            flightContent = (
                <FlightInfo flight={oneFlight} />
            )
        }

        return (
            <div>
                {flightContent}
            </div>
        )
    }
}

FlightDetails.propTypes = {
    onFetchOneFlight: PropTypes.func,
    oneFlight: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
    oneFlightLoading: PropTypes.bool,
    oneFlightError: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
}

const mapStateToProps = state => {
    return {
        oneFlight: state.flightsReducer.oneFlight,
        oneFlightLoading: state.flightsReducer.oneFlightLoading,
        oneFlightError: state.flightsReducer.oneFlightError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOneFlight: (id) => dispatch(fetchOneFlight(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FlightDetails);
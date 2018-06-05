import {
    FETCH_ALL_FLIGHTS,
    FLIGHTS_FETCH_SUCCEEDED,
    FLIGHTS_FETCH_FAILED
} from './actionTypes';

export function fetchAllFlights() {
    return {
        type: FETCH_ALL_FLIGHTS
    }
}

export function fetchFlightsSucceeded(flights) {
    return {
        type: FLIGHTS_FETCH_SUCCEEDED,
        flights
    }
}

export function fetchFlightsFailed(error) {
    return {
        type: FLIGHTS_FETCH_FAILED,
        error
    }
}
import {
    FETCH_ALL_FLIGHTS,
    FLIGHTS_FETCH_SUCCEEDED,
    FLIGHTS_FETCH_FAILED,
    FETCH_ONE_FLIGHT,
    ONE_FLIGHT_FETCH_SUCCEEDED,
    ONE_FLIGHT_FETCH_FAILED
} from './actionTypes';

export function fetchAllFlights(position) {
    return {
        type: FETCH_ALL_FLIGHTS,
        position
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

export function fetchOneFlight(id) {
    return {
        type: FETCH_ONE_FLIGHT,
        id
    }
}

export function fetchOneFlightSucceeded(flight) {
    return {
        type: ONE_FLIGHT_FETCH_SUCCEEDED,
        flight
    }
}

export function fetchOneFlightFailed(error) {
    return {
        type: ONE_FLIGHT_FETCH_FAILED,
        error
    }
}
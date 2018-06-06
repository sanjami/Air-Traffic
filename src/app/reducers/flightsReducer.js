import {
    FETCH_ALL_FLIGHTS,
    FLIGHTS_FETCH_SUCCEEDED,
    FLIGHTS_FETCH_FAILED,
    FETCH_ONE_FLIGHT,
    ONE_FLIGHT_FETCH_SUCCEEDED,
    ONE_FLIGHT_FETCH_FAILED
} from '../actions/actionTypes';

const initialState = {
    allFlights: false,
    allFlightsLoading: false,
    allFlightsError: false,
    oneFlight: false,
    oneFlightLoading: false,
    oneFlightError: false
}

export default function flightsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_FLIGHTS:
            return {
                ...state,
                allFlightsLoading: true,
                allFlightsError: false
            }
        case FLIGHTS_FETCH_SUCCEEDED:
            return {
                ...state,
                allFlights: action.flights,
                allFlightsLoading: false,
                allFlightsError: false
            }
        case FLIGHTS_FETCH_FAILED:
            return {
                ...state,
                allFlightsLoading: false,
                allFlightsError: true
            }

        case FETCH_ONE_FLIGHT:
            return {
                ...state,
                oneFlightLoading: true,
                oneFlightError: false
            }
        case ONE_FLIGHT_FETCH_SUCCEEDED:
            return {
                ...state,
                oneFlight: action.flight,
                oneFlightLoading: false,
                oneFlightError: false
            }
        case ONE_FLIGHT_FETCH_FAILED:
            return {
                ...state,
                oneFlightLoading: false,
                oneFlightError: action.error
            }
        default:
            return state;
    }
}

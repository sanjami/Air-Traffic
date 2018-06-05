import {
    FETCH_ALL_FLIGHTS,
    FLIGHTS_FETCH_SUCCEEDED,
    FLIGHTS_FETCH_FAILED
} from '../actions/actionTypes';

const initialState = {
    allFlights: false,
    allFlightsLoading: false,
    allFlightsError: false
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
                allFlightsError: action.error
            }
        default:
            return state;
    }
}

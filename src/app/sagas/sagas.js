import { call, put, takeLatest } from 'redux-saga/effects';
import { dataServices } from '../../servece/dataService';

import {
    FETCH_ALL_FLIGHTS
} from '../actions/actionTypes';

import {
    fetchFlightsFailed,
    fetchFlightsSucceeded
} from '../actions/flightsActions';

function* fetchFlights() {    
   try {

      const flights = yield call(dataServices.getFlights);

      yield put(fetchFlightsSucceeded(flights));
   } catch (e) {
       console.log(e)
      yield put(fetchFlightsFailed(e));
   }
}

export default function* flightsSaga() {
  yield takeLatest(FETCH_ALL_FLIGHTS, fetchFlights);
}


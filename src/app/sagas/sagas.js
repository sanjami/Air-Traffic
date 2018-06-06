import { call, put, takeLatest, fork } from 'redux-saga/effects';
import { dataServices } from '../../servece/dataService';

import {
    FETCH_ALL_FLIGHTS,
    FETCH_ONE_FLIGHT
} from '../actions/actionTypes';

import {
    fetchFlightsFailed,
    fetchFlightsSucceeded,
    fetchOneFlightFailed,
    fetchOneFlightSucceeded,
} from '../actions/flightsActions';

function* fetchFlights(action) {    

   try {

      const flights = yield call(dataServices.getFlights, action.position);
      yield put(fetchFlightsSucceeded(flights));
   } catch (error) {
      yield put(fetchFlightsFailed(error));
   }
}

export function* flightsSaga() {
  yield takeLatest(FETCH_ALL_FLIGHTS, fetchFlights);
}

/***********************************************************/

function* fetchOneFlight(action) {    

    try {

       const flight = yield call(dataServices.getOneFlight, action.id);
       yield put(fetchOneFlightSucceeded(flight));
    } catch (error) {
       yield put(fetchOneFlightFailed(error));
    }
 }
 
 export function* oneflightSaga() {
   yield takeLatest(FETCH_ONE_FLIGHT, fetchOneFlight);
 }

 /***********************************************************/
 
 export default function* root() {
    yield [
        fork(flightsSaga),
        fork(oneflightSaga)
    ];
}
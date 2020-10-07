import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateAddress(action) {
  try {
      //action.payload is the AddressForm state --
      //firstName, lastName, email, st (street address), city, state, and zipcode
      yield put({ type: 'FETCH_REPS', payload: action.payload })
      yield put({type: 'UPDATE_ADDRESS', payload: action.payload})

  } catch (error) {
    console.log('hmmm', error);
  }
}

function* getStates(action) {
    try {
        let response = yield axios.get(`/api/states`);
        console.log(response.data);
        
        yield put({ type: 'UPDATE_STATES', payload: response.data })
    } catch (error) {
        console.log('error getting states', error);
    }
}

function* fetchStateInfo(action) {
  try {
      let response = yield axios.get(`/api/states/info/${action.payload}`);
      console.log(response.data);

      yield put({ type: 'UPDATE_STATE_INFO', payload: response.data })
  } catch (error) {
      console.log('error getting states info', error);
  }
}

function* fetchSSEOInfo(action) {
  try {
      let response = yield axios.get(`/api/states/sseo/${action.payload}`);
      console.log(response.data);

      yield put({ type: 'UPDATE_SSEO_INFO', payload: response.data })
  } catch (error) {
      console.log('error getting states info', error);
  }
}

function* statesSaga() {
  yield takeLatest('ADDRESS_INFO', updateAddress);
  yield takeLatest('GET_STATES', getStates);
  yield takeLatest('FETCH_STATE_INFO', fetchStateInfo);
  yield takeLatest('FETCH_SSEO_INFO', fetchSSEOInfo)
}

export default statesSaga;
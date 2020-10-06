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

function* addressSaga() {
  yield takeLatest('ADDRESS_INFO', updateAddress);
  yield takeLatest('GET_STATES', getStates);
}

export default addressSaga;
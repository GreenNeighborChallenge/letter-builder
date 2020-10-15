import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateAddress(action) {
  try {
    //action.payload is the AddressForm state --
    //firstName, lastName, email, st (street address), city, state, and zipcode
    yield put({ type: 'FETCH_REPS', payload: action.payload })
    yield put({ type: 'UPDATE_ADDRESS', payload: action.payload })
  } catch (error) {
    console.log('hmmm', error);
  }
}

function* getStates(action) {
  try {
    let response = yield axios.get(`/api/states`);
    yield put({ type: 'UPDATE_STATES', payload: response.data })
  } catch (error) {
    console.log('error getting states', error);
  }
}

function* fetchStateInfo(action) {
  try {
    console.log('got to fetchStateInfo');
    let response = yield axios.get(`/api/states/info/${action.payload}`);
    console.log('this is trying to update', response.data);
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
};

function* deleteState(action) {
  try {
    let response = yield axios.delete(`/api/states/${action.payload}`);
    console.log(response);
    yield put({ type: 'GET_STATES' });
    yield put({ type: 'FETCH_STATE_INFO', payload: 0 });
  } catch (error) {
    console.log('error deleting state info', error);
  }
};

function* updateSseo(action) {
  try {
    yield axios.put(`/api/states/updates/${action.payload.id}`, action.payload)
    yield put({ type: 'FETCH_SSEO_INFO', payload: action.payload.id })
  } catch (error) {
    console.log('error updating sseo', error)
  }
}

function* setNewStateSseo(action) {
  try {
    let response = yield axios.post('api/states', action.payload)
    console.log(response.data)
    yield put({ type: 'FETCH_SSEO_INFO', payload: action.payload.id })
  } catch (error) {
    console.log('error setting new sseo', error)
  }
}

function* deleteSseo(action) {
  try {
    let response = yield axios.delete(`api/states/sseo/${action.payload}`)
    console.log(response.data)
    yield put({ type: 'FETCH_SSEO_INFO', payload: action.payload })
  } catch (error) {
    console.log('error deleting sseo', error)
  }
}

function* statesSaga() {
  yield takeLatest('ADDRESS_INFO', updateAddress);
  yield takeLatest('GET_STATES', getStates);
  yield takeLatest('FETCH_STATE_INFO', fetchStateInfo);
  yield takeLatest('FETCH_SSEO_INFO', fetchSSEOInfo);
  yield takeLatest('DELETE_STATE', deleteState);
  yield takeLatest('UPDATE_SSEO', updateSseo);
  yield takeLatest('SET_NEW_STATE_SSEO', setNewStateSseo)
  yield takeLatest('DELETE_SSEO', deleteSseo)
}

export default statesSaga;
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchStatePolicies(action){
    try {
        console.log('fetchStatePolicies', action.payload)
        let response = yield axios.get(`/api/statePolicies/${action.payload.short_name}`);
        // console.log(response.data);
        yield put ({ type: 'SET_STATE_POLICIES', payload: response.data})
    } catch (error) {
        console.log('error setting policies', error)
    }
}



function* policySaga() {
  yield takeLatest('GET_STATE_POLICIES', fetchStatePolicies);
}

export default policySaga;
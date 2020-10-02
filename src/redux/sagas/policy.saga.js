import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPolicies(action){
    try {
        let response = yield axios.get(`/api/policy`);
        console.log(response.data);
        yield put ({ type: 'PUT_POLICIES', payload: response.data})
    } catch (error) {
        console.log('error setting policies', error)
    }
}


function* policySaga() {
  yield takeLatest('FETCH_POLICIES', fetchPolicies);
}

export default policySaga;
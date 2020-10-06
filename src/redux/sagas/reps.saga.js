import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchReps(action){
    try {
        const address = encodeURIComponent(action.payload)
        console.log(address);
        
        let response = yield axios.get(`/api/reps/${address}`);
        console.log(response.data);
        yield put ({ type: 'PUT_REPS', payload: response.data})
    } catch (error) {
        console.log('error setting reps', error)
    }
}


function* policySaga() {
  yield takeLatest('FETCH_REPS', fetchReps);
}

export default policySaga;
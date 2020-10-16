import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchOffices(action){
    try { 
        let response = yield axios.get(`/api/offices/${action.payload}`);
        yield put ({ type: 'PUT_OFFICES', payload: response.data})
    } catch (error) {
        console.log('error setting reps', error)
    }
}


function* policySaga() {
  yield takeLatest('FETCH_OFFICES', fetchOffices);
}

export default policySaga;
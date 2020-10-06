import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchOffices(action){
    try { 
        console.log(action.payload);
        let response = yield axios.get(`/api/offices/${action.payload}`);
        console.log(response.data);
        yield put ({ type: 'PUT_OFFICES', payload: response.data})
    } catch (error) {
        console.log('error setting reps', error)
    }
}


function* policySaga() {
  yield takeLatest('FETCH_OFFICES', fetchOffices);
}

export default policySaga;
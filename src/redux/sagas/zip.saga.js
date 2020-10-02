import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchGeo(action) {
    console.log('got to fetchGeo with', action.payload)
    try {
        let response = yield axios.get(`/api/zip/${action.payload}`)
        put({type: 'SET_ZIP_RESPONSE', payload: response.data})
    } catch (error) {
        console.log('error in fetchGEO', error)
    }
}

function* zipSaga() {
  yield takeLatest('SEND_ZIP', fetchGeo);
}

export default zipSaga

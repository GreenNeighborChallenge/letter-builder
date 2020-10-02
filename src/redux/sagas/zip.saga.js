import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchGeo(action) {
    console.log('got to fetchState with', action.payload)
    try {
        let response = yield axios.get(`/api/zip/${action.payload}`)
        put({type: 'ZIP_RESPONSE', payload: response.data})
    } catch (error) {
        console.log('error in fetchState', error)
    }
}

function* zipSaga() {
  yield takeLatest('SEND_ZIP', fetchGeo);
}

export default zipSaga

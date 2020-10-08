import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//sends zipcode to server, then Google Geocode API
function* fetchGeo(action) {
    console.log('got to fetchGeo with', action.payload)
    try {
        let response = yield axios.get(`/api/zip/${action.payload}`)
        yield put({type: 'SET_ZIP_RESPONSE', payload: response.data})
    } catch (error) {
        console.log('error in fetchGEO', error)
    }
}

//sends state abbreviation to server, then Google Geocode API
function* fetchGeoByState(action) {
    try {
        console.log(action.payload.selectedState)
        let response = yield axios.get(`/api/zip/state/${action.payload.selectedState}`)
        yield put({type: 'SET_ZIP_RESPONSE', payload: response.data})
    } catch (error) {
        console.log('error in fetchGEO', error)
    }
}

function* zipSaga() {
  yield takeLatest('SEND_ZIP', fetchGeo);
  yield takeLatest('SEND_STATE_ABBREV', fetchGeoByState )
}

export default zipSaga

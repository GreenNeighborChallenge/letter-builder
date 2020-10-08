import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* putContactInfo(action) {
    try {
        let response = yield axios.post(`/api/admin`, action.payload);
        console.log(response.data);
        yield put ({ type: 'GET_STATE_ID', payload: action.payload})
    } catch (error) {
        console.log('error setting contact info', error)
    }
}

function* getStateId(action) {
    try {
        console.log(action.payload)
        let response = yield axios.get(`api/admin/${action.payload.selectedState}`);
        console.log(response.data)
        yield put({ type: 'SET_STATE_ID', payload: response.data })
    } catch (error) {
        console.log('error getting state id', error)
    }
}

function* putPolicyInfo(action) {
    try {
        let response = yield axios.post(`/api/admin/policy`, action.payload);
        console.log(response.data)
    } catch (error) {
        console.log('error setting policy info', error)
    }
}

function* AdminFormSaga() {
    yield takeLatest('PUT_CONTACT_INFO', putContactInfo);
    yield takeLatest('PUT_POLICY_INFO', putPolicyInfo);
    yield takeLatest('GET_STATE_ID', getStateId)
}

export default AdminFormSaga;
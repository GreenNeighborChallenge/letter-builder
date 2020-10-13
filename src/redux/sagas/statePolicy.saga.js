import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchStatePolicies(action){
    try {
        console.log('fetchStatePolicies', action.payload.short_name)
        let response = yield axios.get(`/api/statePolicies/${action.payload.short_name}`);
        // console.log(response.data);
        yield put ({ type: 'SET_STATE_POLICIES', payload: response.data})
    } catch (error) {
        console.log('error setting policies', error)
    }
}

function* createSSEO(action){
    try {
        let response = yield axios.post(`/api/statePolicies/sseo/${action.payload.stateId}`, action.payload.state_info);
        console.log(response);
        yield put({type: 'FETCH_SSEO_INFO', payload: action.payload.stateId})
    } catch (error) {
        console.log('error setting new SSEO', error)
    }
}

function* updatePolicyInfo(action){
    try{
        let response = axios.put(`/api/statePolicies/${action.payload.id}`, action.payload);
        console.log(response.data)
        yield put ({ type: 'FETCH_STATE_INFO', payload: action.payload.id})
    } catch (error) {
        console.log('error updating state policy info', error)
    }
}

function* policySaga() {
  yield takeLatest('GET_STATE_POLICIES', fetchStatePolicies);
  yield takeLatest('NEW_SSEO', createSSEO);
  yield takeLatest('UPDATE_POLICY_INFO', updatePolicyInfo);
}

export default policySaga;
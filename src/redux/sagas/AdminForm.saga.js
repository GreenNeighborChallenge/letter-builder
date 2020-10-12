import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//saga for state contact info
function* putContactInfo(action) {
    try {
        let response = yield axios.post(`/api/admin`, action.payload);
        console.log(response.data);
        yield put ({ type: 'GET_STATE_ID', payload: action.payload})
    } catch (error) {
        console.log('error setting contact info', error)
    }
}

//this is to get the state id so we are able to 
//save the correct info in the database
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

//sagas for the policy info
function* putPolicyInfo(action) {
    try {
        let response = yield axios.post(`/api/admin/policy`, action.payload);
        console.log(response.data)
    } catch (error) {
        console.log('error setting policy info', error)
    }
}


//sagas for policy language tab
function* newPolicyLanguage(action){
    try {
        let response = yield axios.post(`/api/policy`, action.payload);
        console.log(response.data);
        yield put ({ type: 'SET_NEW_POLICY', payload: response.data})
    } catch (error) {
        console.log('error setting policy', error)
    }
}

function* updatePolicyLanguage(action){
    try{
        console.log(action.payload)
        let response = yield axios.put('/api/policy', action.payload)
        console.log(response.data);
        yield put ({ type: 'FETCH_POLICIES' })
    } catch (error) {
        console.log('error updating policy info', error)
    }
}

function* deletePolicy(action){
    try{
        let response = yield axios.delete(`/api/policy/${action.payload}`);
        console.log(response.data)
        yield put ({ type: 'FETCH_POLICIES' })
    } catch(error){
        console.log('error deleting policy', error)
    }
}

function* AdminFormSaga() {
    yield takeLatest('PUT_CONTACT_INFO', putContactInfo);
    yield takeLatest('PUT_POLICY_INFO', putPolicyInfo);
    yield takeLatest('GET_STATE_ID', getStateId);
    yield takeLatest('NEW_POLICY_LANGUAGE', newPolicyLanguage);
    yield takeLatest ('UPDATE_POLICY_LANGUAGE', updatePolicyLanguage);
    yield takeLatest ('DELETE_POLICY', deletePolicy);
}

export default AdminFormSaga;
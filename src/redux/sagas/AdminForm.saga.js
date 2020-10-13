import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// import { connect } from 'react-redux';
// import mapStoreToProps from '../mapStoreToProps.js'


//saga for state contact info
function* setContactInfo(action) {
    try {
        let response = yield axios.put(`/api/admin`, action.payload);
        console.log(response.data);
        yield put({ type: 'SET_NEW_SSEO', payload: action.payload})
    } catch (error) {
        console.log('error setting contact info', error)
    }
}

function* setNewSseo(action){
    try{
        let response = yield axios.post('api/admin', action.payload)
        console.log(response.data)
    } catch(error){
        console.log('error setting new sseo', error)
    }
}

//this is to get the state id so we are able to 
//save the correct info in the database
// function* getStateId(action) {
//     try {
//         console.log(action.payload)
//         let response = yield axios.get(`api/admin/${action.payload.state_name}`);
//         console.log(response.data)
//         yield put({ type: 'SET_STATE_ID', payload: response.data })
//     } catch (error) {
//         console.log('error getting state id', error)
//     }
// }

//set new policy info
function* setPolicyInfo(action) {
    try {
        //put id in URL so we can still use it after it's deleted from the object (done on server)
        let response = yield axios.post(`/api/admin/policy/${action.payload.id}`, action.payload);
        console.log(response.data)
    } catch (error) {
        console.log('error setting policy info', error)
    }
}

//add a new state
function* setNewState(action) {
    try {
        let response = yield axios.post(`/api/admin/state`, action.payload);
        console.log(response.data)
        yield put ({ type: 'SET_NEW_STATE_ID', payload: response.data})
    } catch (error) {
        console.log('error setting new state', error)
    }
}


//sagas for policy language tab
function* newPolicyLanguage(action) {
    try {
        let response = yield axios.post(`/api/policy`, action.payload);
        console.log(response.data);
        yield put({ type: 'SET_NEW_POLICY', payload: response.data })
    } catch (error) {
        console.log('error setting policy', error)
    }
}

function* updatePolicyLanguage(action) {
    try {
        console.log(action.payload)
        let response = yield axios.put('/api/policy', action.payload)
        console.log(response.data);
        yield put({ type: 'FETCH_POLICIES' })
    } catch (error) {
        console.log('error updating policy info', error)
    }
}

function* deletePolicy(action) {
    try {
        let response = yield axios.delete(`/api/policy/${action.payload}`);
        console.log(response.data)
        yield put({ type: 'FETCH_POLICIES' })
    } catch (error) {
        console.log('error deleting policy', error)
    }
}

function* AdminFormSaga() {
    yield takeLatest('SET_NEW_STATE', setNewState);
    yield takeLatest('SET_CONTACT_INFO', setContactInfo);
    yield takeLatest('SET_POLICY_INFO', setPolicyInfo);
    yield takeLatest('SET_NEW_SSEO', setNewSseo)
    // yield takeLatest('GET_STATE_ID', getStateId);
    yield takeLatest('NEW_POLICY_LANGUAGE', newPolicyLanguage);
    yield takeLatest('UPDATE_POLICY_LANGUAGE', updatePolicyLanguage);
    yield takeLatest('DELETE_POLICY', deletePolicy);
}

export default AdminFormSaga;
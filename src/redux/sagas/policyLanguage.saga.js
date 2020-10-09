import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//user side
function* fetchPolicies(action){
    try {
        let response = yield axios.get(`/api/policy`);
        console.log(response.data);
        yield put ({ type: 'PUT_POLICIES', payload: response.data})
    } catch (error) {
        console.log('error setting policies', error)
    }
}

//add a policy to the letter
function* addPolicy(action){
    try {
        let response = yield axios.get(`/api/policy/${action.payload}`);
        console.log(response.data);
        yield put ({ type: 'SET_POLICY', payload: response.data})
    } catch (error) {
        console.log('error setting policy', error)
    }
}

//admin side
function* newPolicy(action){
    try {
        let response = yield axios.post(`/api/policy, ${action.payload}`);
        console.log(response.data);
        yield put ({ type: 'SET_NEW_POLICY', payload: response.data})
    } catch (error) {
        console.log('error setting policy', error)
    }
}


function* policyLanguageSaga() {
  yield takeLatest('FETCH_POLICIES', fetchPolicies);
  yield takeLatest('POLICY_TO_LETTER', addPolicy);
  yield takeLatest('NEW_POLICY', newPolicy)
}

export default policyLanguageSaga;
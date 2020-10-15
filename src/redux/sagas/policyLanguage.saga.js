import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//user side
function* fetchPolicies(){
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
        const id = action.payload.id
        const state = action.payload.state
        let response = yield axios.get(`/api/policy/${id}`);

        const policy = response.data[0].petition_info
        const filteredPolicy = policy.replaceAll("[STATE]", state)
        
        yield put ({ type: 'SET_POLICY', payload: filteredPolicy})
    } catch (error) {
        console.log('error setting policy', error)
    }
}

function* policyLanguageSaga() {
  yield takeLatest('FETCH_POLICIES', fetchPolicies);
  yield takeLatest('POLICY_TO_LETTER', addPolicy);
}

export default policyLanguageSaga;
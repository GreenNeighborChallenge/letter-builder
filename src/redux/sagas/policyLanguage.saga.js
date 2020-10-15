import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//user side
function* fetchPolicies() {
    try {
        let response = yield axios.get(`/api/policy`);
        yield put({ type: 'PUT_POLICIES', payload: response.data })
    } catch (error) {
        console.log('error setting policies', error)
    }
}

//add a policy to the letter
function* addPolicy(action) {
    try {
        const policy_id = action.payload.id
        const state = action.payload.state
        const response = yield axios.get(`/api/policy/${policy_id}`);

        const policy = response.data[0].petition_info
        const filteredPolicy = policy.replaceAll("[STATE]", state)
        const policyWithId = { policy: filteredPolicy, id: policy_id }
        console.log(policyWithId);
        yield put({ type: 'SET_POLICY', payload: policyWithId })
    } catch (error) {
        console.log('error setting policy', error)
    }
}

function* getExistingPolicies(action) {
    yield put({ type: 'DELETE_BODY' })
    const state = action.payload.state
    for (const policyId of action.payload.bodyIds) {
        try {
            console.log(policyId);
            console.log(action.payload);

            const response = yield axios.get(`/api/policy/${policyId}`);
            const policy = response.data[0].petition_info
            const filteredPolicy = policy.replaceAll("[STATE]", state)
            const policyWithId = { policy: filteredPolicy, id: policyId }
            yield put({ type: 'SET_POLICY', payload: policyWithId })

            // yield put({ type: 'POLICY_TO_LETTER', payload: {id: policyId, state: stateId} })

        } catch (error) {
            console.log('error setting existing letter policy', error)
        }
    }
}



function* policyLanguageSaga() {
    yield takeLatest('FETCH_POLICIES', fetchPolicies);
    yield takeLatest('POLICY_TO_LETTER', addPolicy);
    yield takeLatest('FETCH_BODY', getExistingPolicies);
}

export default policyLanguageSaga;
import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* putContactInfo(action){
    try {
        let response = yield axios.post(`/api/admin`, action.payload);
        console.log(response.data);
    } catch (error) {
        console.log('error setting contact info', error)
    }
}

function* stateContactSaga() {
    yield takeLatest('PUT_CONTACT_INFO', putContactInfo);
  }
  
  export default stateContactSaga;
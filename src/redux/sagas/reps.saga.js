import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchReps(action){
    try {
        const {street, city, st, zip} = action.payload
        const address = (street +  city + st + zip )
        const URIaddress = encodeURIComponent(address)
        console.log(URIaddress);
        
        let response = yield axios.get(`/api/reps/${URIaddress}`);
        console.log(response.data);
        yield put ({ type: 'PUT_REPS', payload: response.data})
    } catch (error) {
        console.log('error setting reps', error)
    }
}


function* policySaga() {
  yield takeLatest('FETCH_REPS', fetchReps);
}

export default policySaga;
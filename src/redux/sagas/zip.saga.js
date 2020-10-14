import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//sends zipcode to server, then Google Geocode API
function* fetchGeo(action) {
    console.log('got to fetchGeo with', action.payload)
    try {
        let response = yield axios.get(`/api/zip/${action.payload}`)
        yield put({type: 'SET_ZIP_RESPONSE', payload: response.data})
        yield put({type: 'GET_STATE_POLICIES', payload: response.data[0] })
    } catch (error) {
        console.log('error in fetchGEO', error)
    }
}


//takes state acronym, finds state full name, and sends both to zip reducer
function* setZipReducerByState(action) {
    try {
        const stateList = { AZ: 'Arizona',
        AL: 'Alabama',
        AK: 'Alaska',
        AR: 'Arkansas',
        CA: 'California',
        CO: 'Colorado',
        CT: 'Connecticut',
        DC: 'District of Columbia',
        DE: 'Delaware',
        FL: 'Florida',
        GA: 'Georgia',
        HI: 'Hawaii',
        ID: 'Idaho',
        IL: 'Illinois',
        IN: 'Indiana',
        IA: 'Iowa',
        KS: 'Kansas',
        KY: 'Kentucky',
        LA: 'Louisiana',
        ME: 'Maine',
        MD: 'Maryland',
        MA: 'Massachusetts',
        MI: 'Michigan',
        MN: 'Minnesota',
        MS: 'Mississippi',
        MO: 'Missouri',
        MT: 'Montana',
        NE: 'Nebraska',
        NV: 'Nevada',
        NH: 'New Hampshire',
        NJ: 'New Jersey',
        NM: 'New Mexico',
        NY: 'New York',
        NC: 'North Carolina',
        ND: 'North Dakota',
        OH: 'Ohio',
        OK: 'Oklahoma',
        OR: 'Oregon',
        PA: 'Pennsylvania',
        RI: 'Rhode Island',
        SC: 'South Carolina',
        SD: 'South Dakota',
        TN: 'Tennessee',
        TX: 'Texas',
        UT: 'Utah',
        VT: 'Vermont',
        VA: 'Virginia',
        WA: 'Washington',
        WV: 'West Virginia',
        WI: 'Wisconsin',
        WY: 'Wyoming', }
    
        const getStateFullName = function (stateAbbr) {
            return stateList[stateAbbr];
          }
    
          let searchState = getStateFullName(action.payload.short_name)
          console.log(searchState)
          let objForZip = {
            long_name: searchState,
            short_name: action.payload.short_name
        }

          yield put({type: 'SET_STATE_RESPONSE', payload: objForZip })
    
    } catch (error) {
        console.log('error in fetchGEO', error)
    }
}

function* zipSaga() {
  yield takeLatest('SEND_ZIP', fetchGeo);
  yield takeLatest('SEND_STATE_ABBREV', setZipReducerByState )
}

export default zipSaga

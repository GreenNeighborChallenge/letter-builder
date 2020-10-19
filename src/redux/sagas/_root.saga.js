import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import zipSaga from './zip.saga';
import adminFormSaga from './AdminForm.saga';
import statesSaga from './states.saga';
import recsSaga from './recs.saga';
import policyLanguageSaga from './policyLanguage.saga';
import repsSaga from './reps.saga'
import statePolicySaga from './statePolicy.saga';
import officesSaga from './offices.saga'
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    zipSaga(),
    statesSaga(),
    policyLanguageSaga(),
    repsSaga(),
    adminFormSaga(),
    officesSaga(), 
    statePolicySaga(), 
    recsSaga(),
  ]);
}

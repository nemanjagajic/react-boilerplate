import { all, takeLatest } from 'redux-saga/effects'
import {LOG_IN, LOG_IN_WITH_GOOGLE, LOG_OUT, REGISTER} from '../authConstants'
import {logIn, logInWithGoogle, logOut, register} from './authSaga'

export default function* authSaga() {
  yield all([
    takeLatest(REGISTER, register),
    takeLatest(LOG_IN, logIn),
    takeLatest(LOG_IN_WITH_GOOGLE, logInWithGoogle),
    takeLatest(LOG_OUT, logOut)
  ])
}

import { all, takeLatest } from 'redux-saga/effects'
import {LOG_IN, LOG_OUT, REGISTER} from '../authConstants'
import {logIn, logOut, register} from './authSaga'

export default function* authSaga() {
  yield all([
    takeLatest(REGISTER, register),
    takeLatest(LOG_IN, logIn),
    takeLatest(LOG_OUT, logOut)
  ])
}

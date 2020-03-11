import { call, put } from 'redux-saga/effects'
import authService from '../../../services/api/authService'
import {clearAuthError, setAuthError, setUser} from '../authActions'
import request, { attachHeaders } from '../../../services/request'

export function* register({ payload }) {
  try {
    yield call(authService.register, payload.userData)
    yield call(logIn, { payload })
  } catch (e) {
    const errorMessage = e.response.data.message
    if (errorMessage) yield put(setAuthError(errorMessage))
  }
}

export function* logIn({ payload }) {
  try {
    const userData = payload.userData
    const { data } = yield call(authService.logIn, userData)
    yield call(saveUserToLocalStorage, data)
    yield put(clearAuthError())
    payload.navigateHome()
  } catch (e) {
    const errorMessage = e.response.data.message
    if (errorMessage) yield put(setAuthError(errorMessage))
  }
}

export function* logInWithGoogle({ payload }) {
  try {
    const accessToken = payload.accessToken
    const { data } = yield call(authService.logInWithGoogle, accessToken)
    yield call(saveUserToLocalStorage, data)
    yield put(clearAuthError())
    payload.navigateHome()
  } catch (e) {
    const errorMessage = e.response.data.message
    if (errorMessage) yield put(setAuthError(errorMessage))
  }
}

function* saveUserToLocalStorage(data) {
  localStorage.setItem('token', data.token)
  localStorage.setItem('email', data.email)
  yield put(setUser({ email: data.email, token: data.token }))
  attachHeaders(request, {
    authorization: data.token
  })
}

export function* logOut() {
  try {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    yield put(setUser({ email: null, token: null }))
  } catch (e) {
    console.log(e)
  }
}

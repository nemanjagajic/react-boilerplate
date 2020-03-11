import { call, put } from 'redux-saga/effects'
import authService from '../../../services/api/authService'
import { setUser } from '../authActions'
import request, { attachHeaders } from '../../../services/request'

export function* register({ payload }) {
  try {
    yield call(authService.register, payload.userData)
    yield call(logIn, { payload })
  } catch (e) {
    console.log(e)
  }
}

export function* logIn({ payload }) {
  try {
    const userData = payload.userData
    const { data } = yield call(authService.logIn, userData)
    yield call(saveUserToLocalStorage, data)
    payload.navigateHome()
  } catch (e) {
    console.log(e)
  }
}

export function* logInWithGoogle({ payload }) {
  try {
    const accessToken = payload.accessToken
    const { data } = yield call(authService.logInWithGoogle, accessToken)
    yield call(saveUserToLocalStorage, data)
    payload.navigateHome()
  } catch (e) {
    console.log(e)
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

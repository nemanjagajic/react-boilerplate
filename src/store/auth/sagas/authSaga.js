import { call, put } from 'redux-saga/effects'
import authService from '../../../services/api/authService'
import { setUser } from '../authActions'

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
    localStorage.setItem('token', data.token)
    localStorage.setItem('username', userData.username)
    yield put(setUser({ username: userData.username, token: data.token }))
    payload.navigateHome()
  } catch (e) {
    console.log(e)
  }
}

export function* logOut() {
  try {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    yield put(setUser({ username: null, token: null }))
  } catch (e) {
    console.log(e)
  }
}

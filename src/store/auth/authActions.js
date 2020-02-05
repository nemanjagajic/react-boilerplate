import { REGISTER, LOG_IN, SET_USER, LOG_OUT, REMOVE_USER } from './authConstants'

export const register = payload => ({
  type: REGISTER,
  payload
})

export const logIn = payload => ({
  type: LOG_IN,
  payload
})

export const logOut = payload => ({
  type: LOG_OUT,
  payload
})

export const setUser = payload => ({
  type: SET_USER,
  payload
})

export const removeUser = () => ({
  type: REMOVE_USER
})

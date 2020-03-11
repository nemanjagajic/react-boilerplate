import {CLEAR_AUTH_ERROR, SET_AUTH_ERROR, SET_USER} from './authConstants'

const initialState = {
  user: {
    email: localStorage.getItem('email'),
    token: localStorage.getItem('token'),
  },
  authError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.email,
          token: action.payload.token
        }
      }
    case SET_AUTH_ERROR:
      return {
        ...state,
        authError: action.payload
      }
    case CLEAR_AUTH_ERROR:
      return {
        ...state,
        authError: null
      }
    default:
      return state
  }
}

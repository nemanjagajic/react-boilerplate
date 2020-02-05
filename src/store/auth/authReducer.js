import {REMOVE_USER, SET_USER} from './authConstants'

const initialState = {
  user: {
    username: localStorage.getItem('username'),
    token: localStorage.getItem('token')
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
          token: action.payload.token
        }
      }
    case REMOVE_USER:
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}

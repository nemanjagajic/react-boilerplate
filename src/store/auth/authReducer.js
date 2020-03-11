import { SET_USER } from './authConstants'

const initialState = {
  user: {
    email: localStorage.getItem('email'),
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
          email: action.payload.email,
          token: action.payload.token
        }
      }
    default:
      return state
  }
}

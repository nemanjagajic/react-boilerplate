import request from '../request'

const API_ENDPOINTS = {
  REGISTER: '/api/auth/register',
  LOGIN: '/api/auth/login',
  GOOGLE_LOGIN: '/api/auth/loginWithGoogle'
}

class AuthService {
  register = ({ email, password }) => request.post(API_ENDPOINTS.REGISTER, { email, password })
  logIn = ({ email, password }) => request.post(API_ENDPOINTS.LOGIN, { email, password })
  logInWithGoogle = accessToken => request.post(API_ENDPOINTS.GOOGLE_LOGIN, { accessToken })
}
export default new AuthService()

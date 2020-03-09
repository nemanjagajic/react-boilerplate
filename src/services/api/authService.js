import request from '../request'

const API_ENDPOINTS = {
  REGISTER: '/api/auth/register',
  LOGIN: `/api/auth/login`
}

class AuthService {
  register = ({ username, password }) => request.post(API_ENDPOINTS.REGISTER, { username, password })
  logIn = ({ username, password }) => request.post(API_ENDPOINTS.LOGIN, { username, password })
}
export default new AuthService()

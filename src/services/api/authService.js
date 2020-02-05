import request from '../request'

const API_ENDPOINTS = {
  REGISTER: '/api/users/',
  LOGIN: `/api-token-auth/`
}

class AuthService {
  register = ({ username, password }) => request.post(API_ENDPOINTS.REGISTER, { username, password })
  logIn = ({ username, password }) => request.post(API_ENDPOINTS.LOGIN, { username, password })
}
export default new AuthService()

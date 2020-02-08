import axios from 'axios'
export const BASE_API_ENDPOINT = process.env.REACT_APP_API_BASE_URL

const defaultConfig = {
  baseURL: BASE_API_ENDPOINT,
  responseType: 'json'
}

export const attachHeaders = (instance, headers) => {
  Object.keys(headers).forEach((key) => {
    instance.defaults.headers[key] = headers[key]
  })
}

const request = (config = defaultConfig) => {
  const instance = axios.create(config)
  const token = localStorage.getItem('token')
  const headers = {
    accept: 'application/json',
  }
  if (token) headers.authorization = `Bearer ${token}`
  attachHeaders(instance, headers)
  return instance
}

export default request()

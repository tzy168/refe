import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
})
http.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
export default http
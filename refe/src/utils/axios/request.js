import axios from "axios";

const http = axios.create({
    baseURL: 'https://picui.cn/api/v1',
    timeout: 5000,
})
http.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer 580|qROZy7DDalP8faQo5eL0XRbhrtBCXGspw84hxavJ`
    config.headers.Accept = 'application/json'
    return config
}, error => {
    return Promise.reject(error)
})
export default http
import http from "../utils/axios/request";

//获取个人信息
export function getUserInfo() {
    return http.get('/profile')
}

//获取策略信息
export function getStrategy() {
    return http.get('/strategies')
}

//上传图片
export function uploadImg(data) {
    const headers = {
        'Content-Type': 'multipart/form-data'
    }
    return http.post('/upload', data, { headers })
}
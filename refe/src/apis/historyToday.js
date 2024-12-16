import http from '../utils/axios/request.js';

// 历史上的今天
export const getHistoryToday = ({ type }) => {
    return http({
        url: `/history/today?type=${type}&app_id=rgihdrm0kslojqvm&app_secret=WnhrK251TWlUUThqaVFWbG5OeGQwdz09`,
        method: 'get'
    })
}

//天气预报
export const getWeather = ({ city }) => {
    return http({
        url: `/weather/now?location=${city}&app_id=rgihdrm0kslojqvm&app_secret=WnhrK251TWlUUThqaVFWbG5OeGQwdz09`,
        method: 'get'
    })
}

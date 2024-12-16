import axios from "axios";

const apiUrl = "http://apis.juhe.cn/fapig/football/query"; // 接口请求URL
const apiKey = "809caf26c3d5edc6194b3133226e1d5f"; // 在个人中心->我的数据,接口名称上方查看

const dynamicHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Custom-Header": "CustomValue",
    'Access-Control-Allow-Origin': '*'

};

export async function getFootball() {
    const requestParams = {
        key: apiKey,
        type: "yingchao", // 请求参数
    };

    try {
        const response = await axios.get(apiUrl, { params: requestParams },
            {
                headers: dynamicHeaders,
            });

        // 检查响应状态
        if (response.status === 200) {
            console.log("请求成功:", response.data);
            return response.data; // 返回数据，方便调用者使用
        } else {
            console.error("请求失败，状态码:", response.status);
        }
    } catch (error) {
        console.error("网络请求失败:", error.message);

        // 根据需求加入重试机制
        // 可以设置重试次数限制
    }
}

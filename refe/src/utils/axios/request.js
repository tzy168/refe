import axios from "axios";

const http = axios.create({
    baseURL: 'https://www.mxnzp.com/api',
    timeout: 5000,
})
export default http
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api"
})
axiosInstance.interceptors.request.use(function (config){
    config.headers["Accept-Language"] = "ua"
    return config
})

export default axiosInstance

import axios from "axios";
import {AccessKey} from "../utils/auth";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api"
})
axiosInstance.interceptors.request.use(function (config){
    config.headers["Accept-Language"] = "ua"
    config.headers["Authorization"] = `Bearer ${AccessKey.get()}`

    return config
})

export default axiosInstance

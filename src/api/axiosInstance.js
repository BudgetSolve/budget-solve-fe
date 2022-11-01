import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:8080/api/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer OWR_TOKEN'}
})
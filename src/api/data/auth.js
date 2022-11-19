import axiosInstance from '../axiosInstance'
import {AccessKey} from "../../utils/auth";

// const API_URL = "http://localhost:8080/api"

export const getCheckForAuthorized = async () => {
    const result = await axiosInstance.post("/auth/check-auth", {}, {
        headers: {
            Authorization: `Bearer ${AccessKey.get()}`
        }
    })
    return result
}

export const signIn = async (email, password) => {
    const result = await axiosInstance.post("/auth/authorise", {
        email, password
    })

    if(result){
        AccessKey.set(result.data.token)
    }

    return result.data
}

export const signUp = async (firstName, lastName, email, password) => {
    const result = await axiosInstance.post("/auth/register", {
        firstName,
        lastName,
        email,
        password
    })

    return result.data;
}

export const remindPasword = async (email) => {
    const result = await axiosInstance.post("/auth/remind-password", {
        email
    })

    return result.data;
}

export const checkCode = async (email, code) => {
    const result = await axiosInstance.post("/auth/code-check", {
        email, code
    })

    return result.data;
}
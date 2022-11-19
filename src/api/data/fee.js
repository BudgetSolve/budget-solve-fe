import {axiosInstance} from "../axiosInstance";

export const getFee = async () => {
    // const result = await instance.get(`/fee/`)
    //
    // return result.data

    return [
        {
            name: "Something",
            value: 1000,
            type: 'PERCENTAGE'
        },
        {
            name: "Something",
            value: 200,
            type: 'MONETARY'
        },
        {
            name: "Something",
            value: 4343,
            type: 'MONETARY'
        },
        {
            name: "Something",
            value: 5544,
            type: 'PERCENTAGE'
        }
    ]
}
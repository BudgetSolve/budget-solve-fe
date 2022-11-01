import {instance} from "../axiosInstance";

export const getUsers = async () => {
    // const result = await instance.get(`/users/`)
    //
    // return result.data

    return [
        {
            id: 2213714,
            firstName: "Денис",
            lastName: "Старжевський",
            company: 323232,
            lastLogin: "2000-10-31T01:30:00.000-05:00",
            role: 4
        },
        {
            id: 434343,
            firstName: "Анастасія",
            lastName: "Герич",
            company: 323232,
            lastLogin: "2000-10-31T01:30:00.000-05:00",
            role: 4
        },
        {
            id: 6546564,
            firstName: "Кормила",
            lastName: "Андрій",
            company: 323232,
            lastLogin: "2000-10-31T01:30:00.000-05:00",
            role: 4
        },
        {
            id: 7657665,
            firstName: "Богдан",
            lastName: "Дмитруш",
            company: 323232,
            lastLogin: "2000-10-31T01:30:00.000-05:00",
            role: 4
        },
        {
            id: 98798879,
            firstName: "Яна",
            lastName: "Кірєєва",
            company: 323232,
            lastLogin: "2000-10-31T01:30:00.000-05:00",
            role: 4
        }
    ]
}
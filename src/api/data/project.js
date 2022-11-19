import {axiosInstance} from "../axiosInstance";

export const getProjects = async () => {
    // const result = await instance.get(`/projects/`)
    //
    // return result.data

    // return [
    //     {
    //         id: 4343243243,
    //         name: 'Project 1',
    //         budget: 43423432,
    //         currency: 'Dollar',
    //         type: 'Buildings',
    //         language: 'Ukrainian',
    //         client: 321321313,
    //         status: 'ACTIVE',
    //         created: "2000-10-31T01:30:00.000-05:00",
    //         createdBy: 32321313,
    //         updated: "2000-10-31T01:30:00.000-05:00",
    //         updatedBy: 43243243,
    //         startDate: "2000-10-31T01:30:00.000-05:00",
    //         endDate: "2000-10-31T01:30:00.000-05:00",
    //         profit: 775546546,
    //         value: 4343244,
    //         remaining: 43434
    //     },
    //     {
    //         id: 4343243243,
    //         name: 'Project 2',
    //         budget: 43423432,
    //         currency: 'Dollar',
    //         type: 'Buildings',
    //         language: 'Ukrainian',
    //         client: 321321313,
    //         status: 'FINISHED',
    //         created: "2000-10-31T01:30:00.000-05:00",
    //         createdBy: 32321313,
    //         updated: "2000-10-31T01:30:00.000-05:00",
    //         updatedBy: 43243243,
    //         startDate: "2000-10-31T01:30:00.000-05:00",
    //         endDate: "2000-10-31T01:30:00.000-05:00",
    //         profit: 775546546,
    //         value: 4343244,
    //         remaining: 43434
    //     },
    //     {
    //         id: 4343243243,
    //         name: 'Project 3',
    //         budget: 43423432,
    //         currency: 'Dollar',
    //         type: 'Buildings',
    //         language: 'Ukrainian',
    //         client: 321321313,
    //         status: 'ARCHIVED',
    //         created: "2000-10-31T01:30:00.000-05:00",
    //         createdBy: 32321313,
    //         updated: "2000-10-31T01:30:00.000-05:00",
    //         updatedBy: 43243243,
    //         startDate: "2000-10-31T01:30:00.000-05:00",
    //         endDate: "2000-10-31T01:30:00.000-05:00",
    //         profit: 775546546,
    //         value: 4343244,
    //         remaining: 43434
    //     },
    //     {
    //         id: 4343243243,
    //         name: 'Project 4',
    //         budget: 43423432,
    //         currency: 'Dollar',
    //         type: 'Buildings',
    //         language: 'Ukrainian',
    //         client: 321321313,
    //         status: 'ARCHIVED',
    //         created: "2000-10-31T01:30:00.000-05:00",
    //         createdBy: 32321313,
    //         updated: "2000-10-31T01:30:00.000-05:00",
    //         updatedBy: 43243243,
    //         startDate: "2000-10-31T01:30:00.000-05:00",
    //         endDate: "2000-10-31T01:30:00.000-05:00",
    //         profit: 775546546,
    //         value: 4343244,
    //         remaining: 43434
    //     },
    // ]

    return [
        {
            projectName: "Insurance",
            projectAuthor: "Andrew",
            createdAt: "13/10/2022",
            lastEdited: "18/10/2022",
            budget: "2500$",
            profit: "500$",
            value: "2750$",
        },
        {
            projectName: "Fish Restaurant",
            projectAuthor: "Andrew",
            createdAt: "20/11/2021",
            lastEdited: "12/10/2022",
            budget: "3500$",
            profit: "300$",
            value: "3050$",
        },
    ];
}

// export const getProject = async (projectId) => {
//     const result = await instance.get(`/projects/${projectId}`)
//
//     return result.data
// }

export const getComponents = async (projectId) => {
    // const result = await instance.get(`/project/${projectId}/components`)
    //
    // return result.data

    return [
        {
            id: 43243,
            name: 'Component 1',
            comment: "Comment 1",
            created: "2000-10-31T01:30:00.000-05:00",
            createdBy: 32321313,
            updated: "2000-10-31T01:30:00.000-05:00",
            updatedBy: 43243243,
            startDate: "2000-10-31T01:30:00.000-05:00",
            endDate: "2000-10-31T01:30:00.000-05:00",
            profit: 775546546,
            value: 4343244,
            budget: 43423432,
            fees: 34324324,
            items: [
                {
                    id: 9098769,
                    name: 'Item 1',
                    comment: "Comment 1",
                    created: "2000-10-31T01:30:00.000-05:00",
                    createdBy: 32321313,
                    updated: "2000-10-31T01:30:00.000-05:00",
                    updatedBy: 43243243,
                    quantity: 200,
                    price: 313213,
                    profit: 4324324,
                    value: 321323
                },
                {
                    id: 76547654,
                    name: 'Item 2',
                    comment: "Comment 2",
                    created: "2000-10-31T01:30:00.000-05:00",
                    createdBy: 32321313,
                    updated: "2000-10-31T01:30:00.000-05:00",
                    updatedBy: 43243243,
                    quantity: 200,
                    price: 313213,
                    profit: 4324324,
                    value: 321323
                },
                {
                    id: 6755477,
                    name: 'Item 3',
                    comment: "Comment 3",
                    created: "2000-10-31T01:30:00.000-05:00",
                    createdBy: 32321313,
                    updated: "2000-10-31T01:30:00.000-05:00",
                    updatedBy: 43243243,
                    quantity: 200,
                    price: 313213,
                    profit: 4324324,
                    value: 321323
                },
            ]
        },
        {
            id: 435435435,
            name: 'Component 2',
            comment: "Comment 2",
            created: "2000-10-31T01:30:00.000-05:00",
            createdBy: 32321313,
            updated: "2000-10-31T01:30:00.000-05:00",
            updatedBy: 43243243,
            startDate: "2000-10-31T01:30:00.000-05:00",
            endDate: "2000-10-31T01:30:00.000-05:00",
            profit: 775546546,
            value: 4343244,
            budget: 43423432,
            fees: 34324324,
            items: [
                {
                    id: 9098769,
                    name: 'Item 1',
                    comment: "Comment 1",
                    created: "2000-10-31T01:30:00.000-05:00",
                    createdBy: 32321313,
                    updated: "2000-10-31T01:30:00.000-05:00",
                    updatedBy: 43243243,
                    quantity: 200,
                    price: 313213,
                    profit: 4324324,
                    value: 321323
                },
                {
                    id: 76547654,
                    name: 'Item 2',
                    comment: "Comment 2",
                    created: "2000-10-31T01:30:00.000-05:00",
                    createdBy: 32321313,
                    updated: "2000-10-31T01:30:00.000-05:00",
                    updatedBy: 43243243,
                    quantity: 200,
                    price: 313213,
                    profit: 4324324,
                    value: 321323
                },
                {
                    id: 6755477,
                    name: 'Item 3',
                    comment: "Comment 3",
                    created: "2000-10-31T01:30:00.000-05:00",
                    createdBy: 32321313,
                    updated: "2000-10-31T01:30:00.000-05:00",
                    updatedBy: 43243243,
                    quantity: 200,
                    price: 313213,
                    profit: 4324324,
                    value: 321323
                },
            ]
        },
        {
            id: 4324325,
            name: 'Component 3',
            comment: "Comment 3",
            created: "2000-10-31T01:30:00.000-05:00",
            createdBy: 32321313,
            updated: "2000-10-31T01:30:00.000-05:00",
            updatedBy: 43243243,
            startDate: "2000-10-31T01:30:00.000-05:00",
            endDate: "2000-10-31T01:30:00.000-05:00",
            profit: 775546546,
            value: 4343244,
            budget: 43423432,
            fees: 34324324,
            items: [
                {
                    id: 9098769,
                    name: 'Item 1',
                    comment: "Comment 1",
                    created: "2000-10-31T01:30:00.000-05:00",
                    createdBy: 32321313,
                    updated: "2000-10-31T01:30:00.000-05:00",
                    updatedBy: 43243243,
                    quantity: 200,
                    price: 313213,
                    profit: 4324324,
                    value: 321323
                },
                {
                    id: 76547654,
                    name: 'Item 2',
                    comment: "Comment 2",
                    created: "2000-10-31T01:30:00.000-05:00",
                    createdBy: 32321313,
                    updated: "2000-10-31T01:30:00.000-05:00",
                    updatedBy: 43243243,
                    quantity: 200,
                    price: 313213,
                    profit: 4324324,
                    value: 321323
                },
                {
                    id: 6755477,
                    name: 'Item 3',
                    comment: "Comment 3",
                    created: "2000-10-31T01:30:00.000-05:00",
                    createdBy: 32321313,
                    updated: "2000-10-31T01:30:00.000-05:00",
                    updatedBy: 43243243,
                    quantity: 200,
                    price: 313213,
                    profit: 4324324,
                    value: 321323
                },
            ]
        },
        {
            id: 9098769,
            name: 'Component 4',
            comment: "Comment 4",
            created: "2000-10-31T01:30:00.000-05:00",
            createdBy: 32321313,
            updated: "2000-10-31T01:30:00.000-05:00",
            updatedBy: 43243243,
            startDate: "2000-10-31T01:30:00.000-05:00",
            endDate: "2000-10-31T01:30:00.000-05:00",
            profit: 775546546,
            value: 4343244,
            budget: 43423432,
            fees: 34324324,
            items: [
                {
                    id: 9098769,
                    name: 'Item 1',
                    comment: "Comment 1",
                    created: "2000-10-31T01:30:00.000-05:00",
                    createdBy: 32321313,
                    updated: "2000-10-31T01:30:00.000-05:00",
                    updatedBy: 43243243,
                    quantity: 200,
                    price: 313213,
                    profit: 4324324,
                    value: 321323
                },
                {
                    id: 76547654,
                    name: 'Item 2',
                    comment: "Comment 2",
                    created: "2000-10-31T01:30:00.000-05:00",
                    createdBy: 32321313,
                    updated: "2000-10-31T01:30:00.000-05:00",
                    updatedBy: 43243243,
                    quantity: 200,
                    price: 313213,
                    profit: 4324324,
                    value: 321323
                },
                {
                    id: 6755477,
                    name: 'Item 3',
                    comment: "Comment 3",
                    created: "2000-10-31T01:30:00.000-05:00",
                    createdBy: 32321313,
                    updated: "2000-10-31T01:30:00.000-05:00",
                    updatedBy: 43243243,
                    quantity: 200,
                    price: 313213,
                    profit: 4324324,
                    value: 321323
                },
            ]
        },
    ]
}

export const getItems = async (projectId) => {
    // const result = await instance.get(`/project/${projectId}/items`)
    //
    // return result.data

    return [
        {
            id: 9098769,
            name: 'Item 1',
            comment: "Comment 1",
            created: "2000-10-31T01:30:00.000-05:00",
            createdBy: 32321313,
            updated: "2000-10-31T01:30:00.000-05:00",
            updatedBy: 43243243,
            quantity: 200,
            price: 313213,
            profit: 4324324,
            value: 321323
        },
        {
            id: 76547654,
            name: 'Item 2',
            comment: "Comment 2",
            created: "2000-10-31T01:30:00.000-05:00",
            createdBy: 32321313,
            updated: "2000-10-31T01:30:00.000-05:00",
            updatedBy: 43243243,
            quantity: 200,
            price: 313213,
            profit: 4324324,
            value: 321323
        },
        {
            id: 6755477,
            name: 'Item 3',
            comment: "Comment 3",
            created: "2000-10-31T01:30:00.000-05:00",
            createdBy: 32321313,
            updated: "2000-10-31T01:30:00.000-05:00",
            updatedBy: 43243243,
            quantity: 200,
            price: 313213,
            profit: 4324324,
            value: 321323
        },
        {
            id: 7646546,
            name: 'Item 4',
            comment: "Comment 4",
            created: "2000-10-31T01:30:00.000-05:00",
            createdBy: 32321313,
            updated: "2000-10-31T01:30:00.000-05:00",
            updatedBy: 43243243,
            quantity: 200,
            price: 313213,
            profit: 4324324,
            value: 321323
        },
        {
            id: 432424,
            name: 'Item 5',
            comment: "Comment 5",
            created: "2000-10-31T01:30:00.000-05:00",
            createdBy: 32321313,
            updated: "2000-10-31T01:30:00.000-05:00",
            updatedBy: 43243243,
            quantity: 200,
            price: 313213,
            profit: 4324324,
            value: 321323
        },
        {
            id: 7657654,
            name: 'Item 6',
            comment: "Comment 6",
            created: "2000-10-31T01:30:00.000-05:00",
            createdBy: 32321313,
            updated: "2000-10-31T01:30:00.000-05:00",
            updatedBy: 43243243,
            quantity: 200,
            price: 313213,
            profit: 4324324,
            value: 321323
        },
    ]
}
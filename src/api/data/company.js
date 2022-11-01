import {instance} from "../axiosInstance";

export const getCompany = async () => {
    // const result = await instance.get(`/company/`)
    //
    // return result.data

    return [
        {
            id: 12212,
            name: 'First company',
            members: [{

            }]
        },
        {
            id: 321321,
            name: 'Second company',
            members: [{

            }]
        },
        {
            id: 4324432,
            name: 'Third company',
            members: [{

            }]
        },
        {
            id: 43244,
            name: 'Fourth company',
            members: [{

            }]
        },
        {
            id: 436546,
            name: 'Fifth company',
            members: [{

            }]
        },
    ]
}

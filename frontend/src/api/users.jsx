import api from "./api"

export const getUsers = async () => {
    const response = await api.get('/api/v1/users')

    if(response.status !== 200){
        return [] // throw new Error('')
    }

    return response.data.users
} 
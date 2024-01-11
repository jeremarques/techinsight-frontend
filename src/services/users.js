export default httpClient => ({
    getMe: async () => {
        const response = await httpClient.get('/me/')

        return {
            data: response.data,
        }
    },
    getMeProfile: async () => {
        const response = await httpClient.get('/me/profile/')

        return {
            data: response.data,
        }
    }
})
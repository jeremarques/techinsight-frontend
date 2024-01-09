export default httpClient => ({
    getMe: async () => {
        const response = await httpClient.get('/me/')

        return {
            data: response.data[0],
        }
    }
})
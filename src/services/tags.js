export default httpClient => ({
    getTags: async () => {
        const response = await httpClient.get('/tags/')
        return {
            data: response.data
        }
    },
})
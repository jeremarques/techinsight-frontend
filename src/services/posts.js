export default httpClient => ({
    getPosts: async () => {
        const response = await httpClient.get('/posts/')
        return {
            data: response.data
        }
    }
})
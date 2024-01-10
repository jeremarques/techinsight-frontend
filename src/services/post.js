export default httpClient => ({
    getPosts: async () => {
        const response = await httpClient.get('/posts/')
        return {
            data: response.data
        }
    },
    getPost: async (postId) => {
        const response = await httpClient.get(`/posts/${postId}/`)
        return {
            data: response.data
        }
    }
})
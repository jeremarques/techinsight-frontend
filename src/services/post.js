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
    },
    createPost: async ({ title, content, tag_id }) => {
        const response = await httpClient.post('/me/posts/', {
            title,
            content,
            tag_id
        })

        return {
            data: response.data
        }
    }
})
export default httpClient => ({
    getPosts: async () => {
        const response = await httpClient.get('/posts/')
        return {
            data: response.data
        }
    },
    getProfilePosts: async (profileId) => {
        const response = await httpClient.get(`/users/profiles/${profileId}/posts/`)
        let errors = null
        
        if (!response.data) {
            errors = {
                status: response.request.status,
                statusText: response.request.statusText,
                errorData: response.response?.data
            }
        }
        return {
            data: response.data,
            errors
        }
    },
    getPost: async (postId) => {
        const response = await httpClient.get(`/posts/${postId}/`)
        let errors = null

        if (!response.data) {
            errors = {
                status: response.request.status,
                statusText: response.request.statusText,
                errorData: response.response?.data
            }
        }
        return {
            data: response.data,
            errors
        }
    },
    createPost: async ({ title, content, tag_id }) => {
        const response = await httpClient.post('/me/posts/', {
            title,
            content,
            tag_id
        })
        let errors = null

        if (!response.data) {
            errors = {
                status: response.request.status,
                statusText: response.request.statusText,
                errorData: response.response?.data
            }
        }
        return {
            data: response.data,
            errors
        }
    }
})
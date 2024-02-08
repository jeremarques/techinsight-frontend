export default httpClient => ({
    getComments: async (postId) => {
        const response = await httpClient.get(`/posts/${postId}/comments/`)
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
    createComment: async ({ postId, content }) => {
        const response = await httpClient.post(`/posts/${postId}/comments/`, {
            content
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
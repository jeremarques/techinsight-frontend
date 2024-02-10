export default httpClient => ({
    getComments: async (postId) => {
        const response = await httpClient.get(`/posts/${postId}/comments/`)
        let errors = null

        if (!response.data) {
            errors = {
                status: response.request.status,
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
            }
        }

        return {
            data: response.data,
            errors
        }
    },
    editComment: async ({ commentId, content }) => {
        const response = await httpClient.put(`/posts/comments/${commentId}/`, {
            content
        })
        let errors = null

        if (!response.data) {
            errors = {
                status: response.request.status,
            }
        }

        return {
            data: response.data,
            errors
        }
    },
    deleteComment: async (commentId) => {
        const response = await httpClient.delete(`/posts/comments/${commentId}/`)
        const status = response.request.status

        return status
    }
})
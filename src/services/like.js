export default httpClient => ({
    addLike: async (postId) => {
        const response = await httpClient.post(`/posts/${postId}/likes/`)
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
    removeLike: async (postId) => {
        const response = await httpClient.delete(`/posts/${postId}/likes/`)
        const status = response.request.status

        return {
            data: response.data,
            status
        }
    },
})
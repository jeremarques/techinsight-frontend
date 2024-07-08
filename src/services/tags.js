export default httpClient => ({
    getTags: async () => {
        const response = await httpClient.get('/tags/')
        return {
            data: response.data
        }
    },
    getTagPosts: async (tagSlug) => {
        const response = await httpClient.get(`/tags/${tagSlug}/posts/`)

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
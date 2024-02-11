export default httpClient => ({
    addFollow: async (userId) => {
        const response = await httpClient.post(`/users/${userId}/follow/`)
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
    removeFollow: async (userId) => {
        const response = await httpClient.delete(`/users/${userId}/unfollow/`)
        const status = response.request.status

        return {
            data: response.data,
            status
        }
    },
})
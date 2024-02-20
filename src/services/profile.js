export default httpClient => ({
    getProfile: async (username) => {
        const response = await httpClient.get(`/users/${username}/profile/`)

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
    updateProfile: async ({ bio, about, profile_photo, website_url }) => {
        const response = await httpClient.put(`/me/profile/`, {
            bio,
            about,
            profile_photo,
            website_url
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
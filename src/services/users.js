export default httpClient => ({
    getMe: async () => {
        const response = await httpClient.get('/me/')

        return {
            data: response.data,
        }
    },
    getMeProfile: async () => {
        const response = await httpClient.get('/me/profile/')

        return {
            data: response.data,
        }
    },
    updateMe: async ({ username, email, full_name }) => {
        const response = await httpClient.put(`/me/`, {
            username,
            email,
            full_name
        })

        let errors = null

        if (!response.data) {
            const dataErrors = response.response?.data
            errors = {
                status: response.request.status,
                statusText: response.request.statusText,
                usernameError: dataErrors?.username,
                emailError: dataErrors?.email,
                errorData: response.response?.data,
            }
        }

        return {
            data: response.data,
            errors
        }
    }
})
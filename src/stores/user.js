import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {},
        userProfile: {}
    }),
    getters: {
        currentUser (state) {
            return state.user
        },
        currentUserProfile (state) {
            return state.userProfile
        }
    },
    actions: {
        setCurrentUser (user) {
            this.user = user
        },
        setCurrentUserProfile (userProfile) {
            this.userProfile = userProfile
        }
    }
})
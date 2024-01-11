import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {},
    }),
    getters: {
        currentUser (state) {
            return state.user
        }
    },
    actions: {
        setCurrentUser (user) {
            this.user = user
        }
    }
})
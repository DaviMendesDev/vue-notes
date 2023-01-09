import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            user: {},
            accessToken: '',
            refreshToken: '',
        }
    },
    mutations: {
        user(state, userData) {
            state.user = userData
        },
        accessToken(state, token) {
            state.accessToken = token
        },
        refreshToken(state, token) {
            state.refreshToken = token
        },
    }
})

export default store

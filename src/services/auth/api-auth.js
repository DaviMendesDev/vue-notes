import auth from "@/services/auth/index"
import baseApi from "@/services/base-api";
import store from '@/bootstrap/state'

const apiAuth = {
    async loadUser() {
        if (! auth.loggedOnce()) {
            await this.enterAsGuest();
        }

        store.commit('accessToken', auth.getAccessToken());
        store.commit('refreshToken', auth.getRefreshToken())
    },

    enterAsGuest() {
        return baseApi().post('/guest')
            .then(res => res.data)
            .then(data => data.data)
            .then(({ accessToken, refreshToken }) => {
                auth.savePasses(accessToken, refreshToken)
            })
    },

    refreshAccess() {
        return baseApi().post('/refresh', {
            refreshToken: auth.getRefreshToken()
        }).then(({ data }) => data.data)
            .then(({ accessToken }) => {
                auth.savePasses(accessToken);
            })
    },

    async fetchUserInfo(force = false) {
        if (force || ! auth.userAlreadyFetched()) {
             await baseApi().get('me')
                .then(res => res.data)
                .then(({ data: user}) => {
                    auth.saveInfo(user)
                })
        }

        store.commit('user', auth.getFetchedUserInfo())
    },
}

Object.freeze(apiAuth)

export default apiAuth

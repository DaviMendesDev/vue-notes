import cookies from "@/services/cookies";

const auth = {
    /**
     * @return {boolean}
     */
    isLogged() {
        return !!this.getAccessToken();
    },

    /**
     * @return {boolean}
     */
    loggedOnce() {
        return !!this.getRefreshToken()
    },

    /**
     * saves a new JWT on Cookie
     * @param jwtAccess {String}
     * @param jwtRefresh {?String}
     * @return boolean
     */
    savePasses(jwtAccess, jwtRefresh = null) {
        cookies().set('jwtAccess', jwtAccess)

        if (jwtRefresh) {
            cookies().set('jwtRefresh', jwtRefresh)
        }

        return cookies().get('jwtAccess') && cookies().get('jwtRefresh')
    },

    getAccessToken() {
        return cookies().get('jwtAccess')
    },

    getRefreshToken() {
        return cookies().get('jwtRefresh')
    },

    getFetchedUserInfo() {
        return cookies().get('user')
    },

    saveInfo(user) {
        return cookies().set('user', user);
    },

    userAlreadyFetched() {
        return !!cookies().get('user')
    }
}

Object.freeze(auth)

export default auth

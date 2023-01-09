import axios from "axios";
import auth from "@/services/auth";
import apiAuth from "@/services/auth/api-auth";

export default function baseApi() {
    const api = axios.create({
        baseURL: process.env.VUE_APP_NOTES_LUMEN_URL,
        headers: {
            common: {
                ['Accept']: 'application/json'
            }
        }
    });

    if (auth.isLogged()) {
        api.defaults.headers.common['Authorization'] = 'Bearer ' + auth.getAccessToken()
    }

    api.interceptors.response.use(undefined, async (error) => {
        const originalRequestConfig = error.config

        if (error.response.data.message === 'Expired token') {
            if (! auth.getRefreshToken())
                return error;

            await apiAuth.refreshAccess()
        }

        originalRequestConfig.headers['Authorization'] = 'Bearer ' + auth.getAccessToken()
        return axios.request(originalRequestConfig);
    });

    return api;
}

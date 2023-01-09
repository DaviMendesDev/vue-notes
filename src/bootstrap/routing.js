import * as VueRouter from "vue-router";
import routes from "@/routes";
import apiAuth from "@/services/auth/api-auth";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    base: '/',
    routes
})

router.beforeEach(async () => {
    await apiAuth.loadUser()
    await apiAuth.fetchUserInfo();
})

export default router

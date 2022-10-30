import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'


// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faChevronDown
)

// routing
import * as VueRouter from 'vue-router';
import routes from '@/routes'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    base: '/',
    routes
})

// creating the app
const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

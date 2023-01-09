import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'

// fontawesome
import FontAwesomeIcon from '@/bootstrap/font-awesome'

// cookies management
import VueCookies from "@/bootstrap/cookie";

// routing
import router from '@/bootstrap/routing'

// state management
import store from '@/bootstrap/state'

// creating the app
const app = createApp(App)

app.use(VueCookies)
app.use(router)
app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

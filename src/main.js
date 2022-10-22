import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import './styles/main.css'

library.add(
    faChevronDown
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

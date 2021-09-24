import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



import './assets/css/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch, faMapPin, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHome, faSearch, faMapPin, faUmbrellaBeach)

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')

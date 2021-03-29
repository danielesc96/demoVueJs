import Vue from 'vue'
import router from './router/index'
import store from './store/store';
import App from './App.vue'
import VuePageTransition from 'vue-page-transition'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEye)
library.add(faSadTear)
library.add(faHome)
library.add(faAsterisk)


Vue.use(VuePageTransition)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  store

}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { FontAwesomeIcon, FontAwesomeLayers} from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebookMessenger,
  faInstagram,
  faMedium
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faCircleNotch,
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebookMessenger,
  faInstagram,
  faMedium
);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


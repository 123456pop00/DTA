import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import store from './store'
import { sync } from 'vuex-router-sync'
// import plugin
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
// don't forget to import CSS styles
import 'tiptap-vuetify/dist/main.css'
// Vuetify's CSS styles 
import 'vuetify/dist/vuetify.min.css'
// icons. Only if you need mdi or fortawesome icons
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
<<<<<<< HEAD
import VueFilterDateFormat from 'vue-filter-date-format';

Vue.use(VueFilterDateFormat);
=======

import axios from 'axios';

const baseUrl = 'https://localhost:5001'

const instance = axios.create({
    baseURL: `${baseUrl}`
});
export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, '$axios', { value: instance });
  }
}


>>>>>>> b962d78025f0b8f635370b73aa3301f10d7fb9f9
Vue.config.productionTip = false
Vue.use(TiptapVuetifyPlugin, {
  // the next line is important! You need to provide the Vuetify Object to this place.
  vuetify, // same as "vuetify: vuetify"
  iconsGroup: 'fa'
})



sync(store, router)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')

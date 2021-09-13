import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueNumber from 'vue-number-animation';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueNumber);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

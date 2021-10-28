import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';

import App from './App.vue';

Vue.use(VueCompositionAPI);

new Vue({
  render: h =>
    // @ts-ignore
    h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSplide from '@splidejs/vue-splide';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(VueSplide);
Vue.config.productionTip = false;
library.add(faBars, faTimes);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');

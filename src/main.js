import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSplide from '@splidejs/vue-splide';

Vue.use(VueSplide);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');

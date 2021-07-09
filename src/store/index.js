import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url =
	'https://searchapi.samsung.com/v6/front/b2c/product/card/detail/newhybris?siteCode=nl&modelList=SM-P610NZAALUX,SM-P610NZAELUX,SM-P610NZBALUX,SM-P610NZBELUX,SM-P615NZAALUX,SM-P615NZAELUX,SM-P615NZBALUX,SM-P615NZBELUX,SM-T870NZKAEUB,SM-T870NZKEEUB,SM-T870NZNAEUB,SM-T870NZNEEUB,SM-T870NZSAEUB,SM-T870NZSEEUB,SM-T870NDBAEUB,SM-T870NDBEEUB,SM-T875NZKAEUB,SM-T875NZKEEUB,SM-T875NZNAEUB,SM-T875NZSAEUB,SM-T875NDBAEUB,SM-T970NZKAEUB,SM-T970NZKEEUB,SM-T970NZNAEUB,SM-T970NZSAEUB,SM-T970NDBAEUB,SM-T970NDBEEUB,SM-T976BZKAEUB,SM-T976BZKEEUB,SM-T976BDBAEUB,SM-G991BZADEUB,SM-G991BZIDEUB,SM-G991BZVDEUB,SM-G991BZWDEUB,SM-G991BZAGEUB,SM-G991BZIGEUB,SM-G991BZVGEUB,SM-G991BZWGEUB,SM-G996BZKDEUB,SM-G996BZSDEUB,SM-G996BZVDEUB,SM-G996BZKGEUB,SM-G996BZSGEUB,SM-G996BZVGEUB,SM-G996BIDDEUB,SM-G996BIDGEUB,SM-G996BZRDEUB,SM-G996BZRGEUB,SM-G998BZKDEUB,SM-G998BZSDEUB,SM-G998BZKGEUB,SM-G998BZSGEUB,SM-G998BZKHEUB,SM-G998BZSHEUB,SM-G998BZTDEUB,SM-G998BZTGEUB,SM-G998BZTHEUB,SM-G998BDBDEUB,SM-G998BDBGEUB,SM-G998BDBHEUB,SM-G998BZNDEUB,SM-G998BZNGEUB,SM-G998BZNHEUB&commonCodeYN=N&saleSkuYN=N&onlyRequestSkuYN=Y&keySummaryYN=N&shopSiteCode=nl';

export default new Vuex.Store({
	state: {
		allProducts: [],
		clickedProduct: [],
		loading: false,
	},
	getters: {
		allProducts: (state) => state.allProducts,
		clickedProduct: (state) => state.clickedProduct,
		loading: (state) => state.loading,
	},
	mutations: {
		async GET_ALL_PRODUCTS(state) {
			state.loading = true;
			await fetch(url)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					state.allProducts = data.response.resultData.productList;
					state.loading = false;
				})
				.catch((error) => {
					if (error.response && error.response.status == 404) {
						this.$router.push({
							name: 'NotFound',
						});
					}
					state.loading = false;
				});
		},
		GET_PRODUCT(state, payload) {
			state.clickedProduct = [];
			state.allProducts[payload].modelList.map((item) => {
				state.clickedProduct.push(item);
			});
		},
	},
	actions: {
		getAllProducts: ({ commit }) => {
			commit('GET_ALL_PRODUCTS');
		},
		getProduct: ({ commit }, payload) => {
			commit('GET_PRODUCT', payload);
		},
	},
});

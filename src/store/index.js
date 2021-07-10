import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = process.env.VUE_APP_SAMSUNG_API;

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

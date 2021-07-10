import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = process.env.VUE_APP_SAMSUNG_API;

export default new Vuex.Store({
	state: {
		allProducts: [],
		clickedProduct: [],
		listOpen: false,
		loading: false,
	},
	getters: {
		allProducts: (state) => state.allProducts,
		clickedProduct: (state) => state.clickedProduct,
		listOpen: (state) => state.listOpen,
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
		OPEN_LIST(state) {
			state.listOpen = true;
		},
		CLOSE_LIST(state) {
			state.listOpen = false;
		},
	},
	actions: {
		getAllProducts: ({ commit }) => {
			commit('GET_ALL_PRODUCTS');
		},
		getProduct: ({ commit }, payload) => {
			commit('GET_PRODUCT', payload);
		},
		openList: ({ commit }) => {
			commit('OPEN_LIST');
		},
		closeList: ({ commit }) => {
			commit('CLOSE_LIST');
		},
	},
});

import { createStore } from "vuex"
import createPersistedState from 'vuex-persistedstate';
import data from './data';

const store = createStore ({
	modules: {
		data,
	},
	plugins: [
		createPersistedState({
			paths: [],
		}),
	],
});

export default store
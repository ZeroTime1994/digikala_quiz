import Vue from "vue";
import Vuex from "vuex";
import { ProductState, product } from "./product";
Vue.use(Vuex);

export interface RootState {
  product?: ProductState;
}

export default new Vuex.Store<RootState>({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    product,
  },
});

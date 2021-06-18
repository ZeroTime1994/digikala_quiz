import Vue from "vue";
import Vuex from "vuex";
import { ProductState, product } from "./product";
import { CartState, cart } from "./cart";

Vue.use(Vuex);

export interface RootState {
  product?: ProductState;
  cart?: CartState;
}

export default new Vuex.Store<RootState>({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    product,
    cart,
  },
});

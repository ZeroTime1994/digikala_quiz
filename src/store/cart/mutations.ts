import { MutationTree } from "vuex";
import { CartState } from ".";
import { Product } from "../product";
import { CartMutationTypes } from "./mutation-types";
import Vue from "vue";
import { storeCartInStorage } from "@/utils/storage";

export const mutations: MutationTree<CartState> = {
  [CartMutationTypes.addProductToCart]: (state, product: Product) => {
    const productInCart = state.products.find(
      (p) => p.product.id === product.id
    );
    if (productInCart) {
      const productInCartIndex = state.products.findIndex(
        (p) => p.product.id === product.id
      );
      productInCart.quantity += 1;
      Vue.set(state.products, productInCartIndex, productInCart);
    } else {
      state.products.push({
        quantity: 1,
        product: product,
      });
    }
  },
  [CartMutationTypes.restoreCartFromLocalStorage]: (state) => {
    const cartFromLocalStorage = localStorage.getItem("cart");
    if (cartFromLocalStorage) {
      const products = JSON.parse(cartFromLocalStorage) as {
        product: Product;
        quantity: number;
      }[];
      state.products = products;
      storeCartInStorage(state.products);
    }
  },
  [CartMutationTypes.deleteProductInCart]: (state, productId: number) => {
    const products = state.products.filter((p) => p.product.id !== productId);
    state.products = products;
    storeCartInStorage(state.products);
  },
};

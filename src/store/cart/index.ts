import { Module } from "vuex";
import { RootState } from "..";
import { Product } from "../product";
import { mutations } from "./mutations";

export interface CartState {
  products: {
    product: Product;
    quantity: number;
  }[];
}

const state: CartState = {
  products: [],
};

export const cart: Module<CartState, RootState> = {
  namespaced: true,
  state,
  mutations,
};

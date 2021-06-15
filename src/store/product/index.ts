import { Module } from "vuex";
import { RootState } from "..";
import { actions } from "./actions";

export interface Product {
  id: number;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
  status: string;
  images: {
    main: string;
  };
  price: {
    sellingPrice: number;
    rrpPrice: number;
  };
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export interface ProductState {
  products: Product[];
  productsPagination: Pagination | null;
  loadingProducts: boolean;
  product: Product | null;
  loadingProduct: boolean;
}

const state: ProductState = {
  products: [],
  productsPagination: null,
  loadingProducts: false,
  product: null,
  loadingProduct: false,
};

export const product: Module<ProductState, RootState> = {
  namespaced: true,
  state: state,
  actions,
};

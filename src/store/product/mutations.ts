import { MutationTree } from "vuex";
import { Pagination, Product, ProductState } from ".";
import { ProductMutationTypes } from "./mutation-types";

export const mutations: MutationTree<ProductState> = {
  //-- SET Products and Pagination
  [ProductMutationTypes.setProducts]: (state, payload: SetProductPayload) => {
    const { pagination, products } = payload;
    state.products = products;
    state.productsPagination = pagination;
  },

  //-- SET Loading Products Status
  [ProductMutationTypes.setLoadingProductsStatus]: (
    state,
    loading: boolean
  ) => {
    state.loadingProducts = loading;
  },

  //-- SET One Product
  [ProductMutationTypes.setProduct]: (state, product: Product) => {
    state.product = product;
  },

  //-- SET Loading One Product Status
  [ProductMutationTypes.setLoadingProductStatus]: (state, loading: boolean) => {
    state.loadingProduct = loading;
  },

  //TODO Create Set Product filters data mutation
  //-- SET Product Filters
  //   [ProductMutationTypes.setProductFilters]: () => {},
};

export interface SetProductPayload {
  products: Product[];
  pagination: Pagination;
}

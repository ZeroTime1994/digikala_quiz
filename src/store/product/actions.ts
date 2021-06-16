import axios, { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { Pagination, Product, ProductState } from ".";
import { RootState } from "..";
import { ProductActionTypes } from "./action-types";
import { ProductMutationTypes } from "./mutation-types";
import { SetProductPayload } from "./mutations";

export const actions: ActionTree<ProductState, RootState> = {
  //-- Fetch Products
  [ProductActionTypes.fetchProducts]: ({ commit }) => {
    commit(ProductMutationTypes.setLoadingProductsStatus, true);

    axios
      .get<
        any,
        AxiosResponse<{
          status: number;
          data: {
            filters: FilterData;
            products: ProductData[];
            sort: SortData;
            pager: PagerData;
          };
        }>
      >("/front-end/search/")
      .then((res) => {
        const productsData = res.data.data.products;

        const pagerData = res.data.data.pager;
        const products: Product[] = productsData.map((p) => ({
          id: p.id,
          images: { main: p.images.main },
          price: {
            rrpPrice: p.price.rrp_price,
            sellingPrice: p.price.selling_price,
          },
          rating: p.rating,
          status: p.status,
          title: p.title,
        }));
        const pagination: Pagination = {
          currentPage: pagerData.current_page,
          totalItems: pagerData.total_items,
          totalPages: pagerData.total_page,
        };
        const payload: SetProductPayload = { products, pagination };
        commit(ProductMutationTypes.setProducts, payload);
      })
      .finally(() =>
        commit(ProductMutationTypes.setLoadingProductsStatus, false)
      );
  },
};

//--Start Responses Data Interfaces--//
export interface ProductData {
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
    selling_price: number;
    rrp_price: number;
  };
}

export interface FilterData {
  has_selling_stock: {
    title: string;
    options: {
      title: string;
    }[];
    type: string;
  };
}

export interface SortData {
  default: number;
}

export interface PagerData {
  current_page: 1;
  total_page: number;
  total_items: number;
}
//--End--//

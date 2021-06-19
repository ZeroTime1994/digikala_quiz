import axios from "axios";
import { ActionTree } from "vuex";
import { Pagination, Product, ProductState } from ".";
import { RootState } from "..";
import { ProductActionTypes } from "./action-types";
import { ProductMutationTypes } from "./mutation-types";
import { SetProductPayload } from "./mutations";

export const actions: ActionTree<ProductState, RootState> = {
  //-- Fetch Products
  [ProductActionTypes.fetchProducts]: (
    { commit },
    payload: {
      page: number;
      perPage: number;
      searchText?: string;
    }
  ) => {
    const { page, perPage, searchText } = payload;

    commit(ProductMutationTypes.setLoadingProductsStatus, true);

    axios
      .get<{
        status: number;
        data: {
          filters: FilterData;
          products: ProductData[];
          sort: SortData;
          pager: PagerData;
        };
      }>("/front-end/search/", {
        params: {
          page: page,
          rows: perPage,
          q: searchText,
        },
      })
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
          totalPages: pagerData.total_pages,
        };
        const payload: SetProductPayload = { products, pagination };
        commit(ProductMutationTypes.setProducts, payload);
      })
      .finally(() =>
        commit(ProductMutationTypes.setLoadingProductsStatus, false)
      );
  },

  [ProductActionTypes.fetchProduct]: ({ commit }, productId: number) => {
    commit(ProductMutationTypes.setLoadingProductStatus, true);

    axios
      .get<{ status: number; data: { product: ProductData } }>(
        `https://www.digikala.com/front-end/product/${productId}/`
      )
      .then((res) => {
        const productData = res.data.data.product;
        const product: Product = {
          id: productData.id,
          title: productData.title,
          images: { main: productData.images.main },
          price: {
            rrpPrice: productData.price.rrp_price,
            sellingPrice: productData.price.selling_price,
          },
          rating: {
            count: productData.rating.count,
            rate: productData.rating.rate,
          },
          status: productData.status,
        };
        commit(ProductMutationTypes.setProduct, product);
      })
      .finally(() =>
        commit(ProductMutationTypes.setLoadingProductStatus, false)
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
  total_pages: number;
  total_items: number;
}
//--End--//

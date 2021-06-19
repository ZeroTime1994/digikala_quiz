<template>
  <div class="container">
    <search-input v-model="searchText" />
    <app-filter />
    <template v-if="products">
      <div class="product-list" ref="productListRef" id="productList">
        <product-card
          v-for="(product, index) in products"
          :key="index"
          :title="product.title"
          :imageUrl="product.images.main"
          :rate="product.rating.rate"
          :rateCount="product.rating.count"
          :sellingPrice="product.price.sellingPrice"
          :discoundPrice="product.price.rrpPrice"
          :id="product.id"
        />
      </div>
    </template>
    <div class="loader-container" v-if="loadingProducts">
      <loader />
    </div>
  </div>
</template>
<script lang="ts">
//Composition Api
import {
  computed,
  defineComponent,
  onDeactivated,
  onMounted,
  ref,
  watch,
} from "@vue/composition-api";

//Interfaces And Types
import { RootState } from "@/store";
import { ProductActionTypes } from "@/store/product/action-types";

//Components
import ProductCard from "@/components/ProductCard.vue";
import SearchInput from "@/components/SearchInput.vue";
import Loader from "@/components/Loader.vue";
import Filter from "@/components/Filter.vue";

export default defineComponent({
  components: { ProductCard, SearchInput, Loader, AppFilter: Filter },
  setup(_, { root }) {
    //State Vuex
    const store = root.$store;
    const state = store.state as RootState;

    //Router
    const router = root.$router;

    //Page Detail
    const page = ref(1);
    const perPage = ref(16);

    //Search
    const searchText = ref();

    //fetch product func
    const fetchProducts = () => {
      store.dispatch(`product/${ProductActionTypes.fetchProducts}`, {
        page: page.value,
        perPage: perPage.value,
        searchText: searchText.value,
      });
    };

    //--Start Products
    const products = computed(() => state.product?.products);
    const pagination = computed(() => state.product?.productsPagination);
    const loadingProducts = computed(() => state.product?.loadingProducts);

    //--End Products

    //Ininit scroll for pagination
    const productListRef = ref<InstanceType<typeof HTMLDivElement>>();
    const onScroll = () => {
      const productListElement = document.getElementById("productList");
      if (productListElement) {
        const bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (
          bottomOfWindow &&
          pagination.value &&
          pagination.value?.currentPage < pagination.value?.totalPages
        ) {
          page.value = page.value + 1;
        }
      }
    };

    watch([page, perPage], () => {
      fetchProducts();
    });

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });

    onDeactivated(() => {
      window.removeEventListener("scroll", onScroll);
    });

    watch(searchText, () => {
      if (searchText.value !== "" && searchText.value) {
        if (searchText.value !== router.currentRoute.query.q) {
          router.push({
            name: "products",
            query: {
              ...router.currentRoute.query,
              q: searchText.value,
            },
          });
          fetchProducts();
        }
      } else {
        router.push({
          name: "products",
        });
        fetchProducts();
      }
    });

    onMounted(() => {
      const queries = router.currentRoute.query;
      if (queries.q) searchText.value = queries.q;
    });

    onMounted(() => fetchProducts());
    return {
      products,
      loadingProducts,
      onScroll,
      productListRef,
      searchText,
    };
  },
});
</script>
<style lang="scss">
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10rem;
  & > div {
    flex: 20% 0 0;
  }
}

.loader-container {
  display: flex;
  justify-content: center;
}
</style>

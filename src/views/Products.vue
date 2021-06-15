<template>
  <div>Products</div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from "@vue/composition-api";
import { RootState } from "@/store";
import { ProductActionTypes } from "@/store/product/action-types";

export default defineComponent({
  setup(_, { root }) {
    const store = root.$store;
    const state = store.state as RootState;

    //--Start Products
    const products = computed(() => state.product?.products);
    const loadingProducts = computed(() => state.product?.loadingProducts);

    onMounted(() => {
      console.log("on Mounted");

      store.dispatch(`product/${ProductActionTypes.fetchProducts}`);
    });
    //--End Products

    return {
      products,
      loadingProducts,
    };
  },
});
</script>

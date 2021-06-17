<template>
  <div>{{ product }}</div>
</template>

<script lang="ts">
import { RootState } from "@/store";
import { ProductActionTypes } from "@/store/product/action-types";
import { computed, defineComponent, onMounted } from "@vue/composition-api";

export default defineComponent({
  setup(_, { root }) {
    const store = root.$store;
    const state = store.state as RootState;
    const productId = root.$route.params.id;

    //Product data
    const product = computed(() => state.product?.product);

    //Product loading status
    const loading = computed(() => state.product?.loadingProduct);

    onMounted(() => {
      store.dispatch(`product/${ProductActionTypes.fetchProduct}`, productId);
    });
    return {
      product,
    };
  },
});
</script>

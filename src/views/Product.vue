<template>
  <div>{{ product }}</div>
</template>

<script lang="ts">
import { RootState } from "@/store";
import { ProductActionTypes } from "@/store/product/action-types";
import { defineComponent, onMounted } from "@vue/composition-api";

export default defineComponent({
  setup(_, { root }) {
    const store = root.$store;
    const state = store.state as RootState;
    const productId = root.$route.params.id;
    const product = state.product?.product;

    onMounted(() => {
      store.dispatch(`product/${ProductActionTypes.fetchProduct}`, productId);
    });
    return {
      product,
    };
  },
});
</script>

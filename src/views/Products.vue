<template>
  <div>Products</div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup(_, { root }) {
    const products: string[] = [];

    return {
      products,
    };
  },
});
</script>

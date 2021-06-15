<template>
  <div class="product-card">
    <img :src="imageUrl" :alt="title" />
    <h3>{{ title }}</h3>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  name: "ProductCard",
  props: {
    title: {
      type: String as PropType<string>,
      requried: true,
    },
    imageUrl: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>

<template>
  <div class="product-card">
    <img :src="imageUrl" :alt="title" />
    <h4>{{ title }}</h4>
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
<style lang="scss" scoped>
.product-card {
  border: 1px solid rgb(196, 196, 196);
  padding: 0.75rem;
  img {
    width: 185px;
    padding: 1.5rem;
  }
  h4 {
    font-size: 0.9rem;
    text-align: right;
  }

  &:hover {
    box-shadow: 0 2px 17px 0 rgba(0, 0, 0, 9%);
    transition: box-shadow 0.5s;
  }
}
</style>

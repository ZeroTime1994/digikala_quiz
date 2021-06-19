<template>
  <router-link
    :to="{ name: 'product', params: { id } }"
    v-slot="{ navigate }"
    custom
  >
    <div @click="navigate" class="product-card">
      <img :src="imageUrl" :alt="title" />
      <h4>{{ title }}</h4>
      <div>
        <div><span class="mdi mdi-check" /> موجود در انبار</div>
        <div>
          <span> ({{ rateCount }}) </span> {{ rate }}
          <span class="mdi mdi-star" />
        </div>
      </div>
      <div :class="sellingPrice !== discoundPrice ? 'has-discount' : ''">
        <div></div>
        <div>{{ sellingPrice }} تومان</div>
      </div>
      <div v-if="sellingPrice !== discoundPrice">
        <div></div>
        <div>{{ discoundPrice }} تومان</div>
      </div>
    </div>
  </router-link>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  name: "ProductCard",
  props: {
    id: {
      type: Number as PropType<number>,
      required: true,
    },
    title: {
      type: String as PropType<string>,
      requried: true,
    },
    imageUrl: {
      type: String as PropType<string>,
      required: true,
    },
    sellingPrice: {
      type: Number as PropType<number>,
      required: true,
    },
    discoundPrice: {
      type: Number as PropType<number>,
      requried: true,
    },
    rate: {
      type: Number as PropType<number>,
      required: true,
    },
    rateCount: {
      type: Number as PropType<number>,
      requried: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

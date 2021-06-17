<template>
  <router-link
    :to="{ name: 'product', params: { id } }"
    class="product-card"
    tag="div"
  >
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
<style lang="scss" scoped>
.product-card {
  border: 1px solid rgb(196, 196, 196);
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 300px;
  div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    &:nth-of-type(2) {
      margin-top: 0.45rem;
    }
    div {
      flex: 1;
      width: 100%;
      &:nth-child(2) {
        justify-content: flex-end;
      }
      &:nth-child(1) {
        justify-content: flex-start;
      }
    }
  }
  img {
    width: 80%;
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

  .has-discount {
    text-decoration: line-through;
    color: rgb(155, 155, 155);
  }
}
</style>

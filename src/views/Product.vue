<template>
  <div class="container" style="display: flex; justify-content: center">
    <template v-if="product">
      <div class="product-container">
        <div class="image-container">
          <img :src="product.images.main" :alt="product.title" />
        </div>
        <div class="title-container">
          <h4>{{ product.title }}</h4>
        </div>
        <div class="price-container">
          <div><span class="mdi mdi-check" /> موجود در انبار</div>
          <div>
            <div
              :class="
                product.price.sellingPrice !== product.price.rrpPrice
                  ? 'has-discount'
                  : ''
              "
            >
              <div></div>
              <div>{{ product.price.sellingPrice }} تومان</div>
            </div>
            <div v-if="product.price.sellingPrice !== product.price.rrpPrice">
              <div></div>
              <div>{{ product.price.rrpPrice }} تومان</div>
            </div>
          </div>
        </div>
        <div class="button-container">
          <div>
            <span> ({{ product.rating.count }}) </span>
            {{ product.rating.rate }}
            <span class="mdi mdi-star" />
          </div>
          <div>
            <button @click="onAddToCart">خرید</button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { RootState } from "@/store";
import { CartMutationTypes } from "@/store/cart/mutation-types";
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

    const onAddToCart = () => {
      if (product.value) {
        store.commit(
          `cart/${CartMutationTypes.addProductToCart}`,
          product.value
        );
      }
    };

    return {
      product,
      onAddToCart,
    };
  },
});
</script>
<style lang="scss" scoped>
.product-container {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: px;
  grid-row-gap: 0px;
  .image-container {
    grid-area: 1 / 1 / 6 / 3;
  }
  .title-container {
    grid-area: 1 / 3 / 2 / 6;
  }
  .price-container {
    grid-area: 2 / 3 / 3 / 6;
    display: flex;
    justify-content: space-between;
  }
  .button-container {
    grid-area: 5 / 3 / 6 / 6;
    display: flex;
    justify-content: space-between;
    button {
      background-color: #33b93e;
      padding: 0.5rem 3rem;
      font-size: 1.3rem;
      border-radius: 10px;
    }
  }
}
</style>

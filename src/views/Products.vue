<template>
  <div>
    <template v-if="products">
      <product-card
        v-for="(product, index) in products"
        :key="index"
        :title="product.title"
        :imageUrl="product.images.main"
      />
    </template>
  </div>
</template>
<script lang="ts">
//Composition Api
import { computed, defineComponent, onMounted } from "@vue/composition-api";

//Interfaces And Types
import { RootState } from "@/store";
import { ProductActionTypes } from "@/store/product/action-types";

//Components
import ProductCard from "@/components/ProductCard.vue";

export default defineComponent({
  components: { ProductCard },
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

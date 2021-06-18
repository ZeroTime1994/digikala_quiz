<template>
  <div>
    <modal v-model="show" :maxWidth="600">
      <template slot="body">
        <div class="cart-products" v-if="productsInCart">
          <div v-for="(p, index) in productsInCart" :key="index" class="p-card">
            <div class="title-container">
              <span>{{ p.product.title }}</span>
            </div>
            <div class="p-info">
              <div>
                <img :src="p.product.images.main" :alt="p.product.title" />
              </div>

              <div>
                <input v-model="p.quantity" type="number" />
              </div>

              <div>
                <span class="mdi mdi-delete"></span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </modal>
  </div>
</template>
<script lang="ts">
import { RootState } from "@/store";
import { computed, defineComponent, ref } from "@vue/composition-api";
import Modal from "./Modal.vue";

export default defineComponent({
  components: {
    Modal,
  },
  props: {},
  setup(_, { root }) {
    const show = ref(true);

    const store = root.$store;
    const state = store.state as RootState;

    const productsInCart = computed(() => state.cart?.products);

    return {
      show,
      productsInCart,
    };
  },
});
</script>
<style lang="scss" scoped>
.cart-products {
  display: flex;
  flex-direction: column;
  width: 100%;
  .title-container {
    display: block;
  }
  .p-card {
    padding: 0.5rem 0.5rem;
    border: 1px solid black;
    border-radius: 10px;
    &:nth-of-type(n + 2) {
      margin-top: 0.5rem;
    }
    .p-info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > div {
        padding: 0.4rem;
      }

      img {
        width: 5rem;
        padding: 1rem;
      }
    }
  }
}
</style>

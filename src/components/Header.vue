<template>
  <header>
    <div class="container main-header">
      <nav>
        <ul>
          <li>
            <router-link to="/"> خانه </router-link>
          </li>
        </ul>
      </nav>
      <div class="cart-container">
        <span class="mdi mdi-cart"></span>
        <span class="product-counter">{{ productCountInCart }}</span>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { RootState } from "@/store";
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup(_, { root }) {
    const store = root.$store;
    const state = store.state as RootState;

    const productsIncart = computed(() => state.cart?.products);
    const productCountInCart = computed(() => productsIncart.value?.length);
    return {
      productsIncart,
      productCountInCart,
    };
  },
});
</script>
<style lang="scss" scoped>
header {
  box-shadow: 2px 2px 2px grey;
  position: sticky;
  z-index: 999;
  background-color: white;
  top: 0;
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    nav {
      ul {
        li {
          font-size: 1.5rem;
        }
      }
    }

    .cart-container {
      position: relative;
      span {
        font-size: 2.3rem;
      }
    }

    .product-counter {
      position: absolute;
      display: block;
      width: 1.2rem;
      height: 1.2rem;
      background: red;
      color: white;
      border-radius: 50px;
      font-size: 1rem !important;
      text-align: center;
      top: 0.1rem;
      right: -0.5rem;
    }
  }
}

ul {
  list-style: none;
  padding: 0;
}
a {
  text-decoration: none;
}
</style>

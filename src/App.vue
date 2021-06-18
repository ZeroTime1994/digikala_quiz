<template>
  <div id="app">
    <app-header />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import Header from "@/components/Header.vue";
import { CartMutationTypes } from "./store/cart/mutation-types";

export default defineComponent({
  components: {
    AppHeader: Header,
  },
  setup(_, { root }) {
    const store = root.$store;

    onMounted(() => {
      store.commit(`cart/${CartMutationTypes.restoreCartFromLocalStorage}`);
    });
  },
});
</script>

<style lang="scss">
#app {
  direction: rtl;
}
.main {
  position: relative;
  margin-top: 2rem;
}
</style>

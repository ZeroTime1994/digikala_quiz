<template>
  <div id="app">
    <app-header />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Header from "@/components/Header.vue";

export default defineComponent({
  components: {
    AppHeader: Header,
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

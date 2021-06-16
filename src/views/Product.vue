<template>
  <div>{{ id }}</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup(_, { root }) {
    const route = root.$route;

    return {
      id: route.params.id,
    };
  },
});
</script>

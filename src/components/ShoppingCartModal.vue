<template>
  <div>
    <modal v-model="show">
      <template slot="header"> شسیشسی </template>
      <template slot="body"> asd </template>
    </modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import Modal from "./Modal.vue";

export default defineComponent({
  components: {
    Modal,
  },
  props: {},
  setup() {
    const show = ref(true);

    return {
      show,
    };
  },
});
</script>

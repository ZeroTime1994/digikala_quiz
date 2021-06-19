<template>
  <div class="input-container">
    <input
      type="text"
      placeholder="جستجو"
      v-model="searchText"
      name="search"
      v-debounce:600="onChangeValue"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "@vue/composition-api";

export default defineComponent({
  name: "SearchInput",
  props: {
    value: {
      required: false,
      default: "",
      type: String as PropType<string>,
    },
  },

  setup(_, { emit }) {
    const searchText = ref();

    const onChangeValue = () => {
      emit("input", searchText.value);
    };

    return { onChangeValue, searchText };
  },
});
</script>
<style lang="scss" scoped>
.input-container {
  width: 50%;
  margin: 1rem 0;
  input {
    padding: 0.7rem 1rem 0.7rem 3.5rem;
    border: 1px solid grey;
    width: 100%;
    outline: none;
    border-radius: 50px !important;
  }
}
</style>

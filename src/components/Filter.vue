<template>
  <div class="filter-container">
    <span @click="onChangeFilter(27)" :class="filter === 27 ? 'active' : ''"
      >پرفروش‌ترین</span
    >
    <span :class="filter === 4 ? 'active' : ''" @click="onChangeFilter(4)"
      >پربازدید‌ترین</span
    >
    <span :class="filter === 22 ? 'active' : ''" @click="onChangeFilter(22)">
      مرتبط‌ترین
    </span>
  </div>
</template>
<script lang="ts">
import { ProductActionTypes } from "@/store/product/action-types";
import { SortTypes } from "@/store/product/actions";
import { defineComponent, ref, watch } from "@vue/composition-api";

export default defineComponent({
  setup(_, { root }) {
    const store = root.$store;
    const router = root.$router;

    const filter = ref<SortTypes>(SortTypes.customerRecomendation);
    const onChangeFilter = (sort: SortTypes) => {
      filter.value = sort;
    };

    watch(filter, () => {
      const queries = root.$route.query;

      store.dispatch(`product/${ProductActionTypes.fetchProducts}`, {
        sort: filter.value,
        searchText: queries.q,
      });
      router.push({
        name: "products",
        query: {
          ...queries,
          sort: filter.value.toString(),
        },
      });
    });

    return { onChangeFilter, filter };
  },
});
</script>

<style lang="scss" scoped>
.filter-container {
  width: 100%;
  display: flex;
  background: rgb(218, 218, 218);
  height: 2.3rem;
  align-items: center;
  padding: 1rem;
  > span {
    display: inline-block;
    margin: 0.3rem;

    color: rgb(133, 31, 192);
    padding: 0.45rem;
    border-radius: 10px;
    font-size: 0.85rem;
    cursor: pointer;
    background-color: white;
    &.active {
      background-color: cyan;
    }
  }
}
</style>

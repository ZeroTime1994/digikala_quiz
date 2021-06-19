<template>
  <div class="filter-container">
    <span class="active">پرفروش‌ترین</span>
    <span>پربازدید‌ترین</span>
    <span> مرتبط‌ترین </span>
  </div>
</template>
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

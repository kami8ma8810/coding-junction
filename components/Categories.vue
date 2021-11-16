<template>
  <div class="wrapper">
    <h1 class="pageTitle">カテゴリー</h1>
    <ul class="c-category-items">
      <li
        v-for="categoryItem in category"
        :key="categoryItem.id"
        class="c-category-item"
      >
        {{ categoryItem.name }}
        <nuxt-link :to="`/category/${category.id}`" class="link">
          {{ categoryItem.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>

<style scoped></style>

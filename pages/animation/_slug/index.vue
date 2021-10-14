<template>
  <div class="c-container">
    <main class="c-main">
      <picture v-if="thumbnail" class="c-thumbnail">
        <img
          ref="thumbnail"
          :src="thumbnail.url + '?w=820&q=100'"
          class="thumbnail"
          alt
        />
      </picture>
      <h1 class="c-article-title">{{ title }}</h1>
      <ul class="c-category-items">
        <li
          v-for="categoryItem in category"
          :key="categoryItem.id"
          class="c-category-item"
        >
          <nuxt-lin :to="`/category/${category.id}`" class="link">
            {{ categoryItem.name }}
          </nuxt-lin>
        </li>
      </ul>
      <span class="c-timestamp"
        ><img src="~/assets/img/common/icon-clock-gray.svg" alt="" width="14" height="14" /><time
          class="c-article-time"
          >{{ date | formatDate }}</time
        ></span>
      <div class="c-article-content" v-html="contents"></div>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: 'animation',
      contentId: params.slug,
    })
    return data
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

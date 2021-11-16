<template>
  <div class="c-container">
    <main class="c-main">
      <h1 class="c-article-title">{{ title }}</h1>
      <time class="c-article-time">{{ date | formatDate }}</time>
      <ul class="c-category-items">
        <li v-for="categoryItem in category" :key="categoryItem.id" class="c-category-item">
          {{ categoryItem.name }}
        </li>
      </ul>
      <div class="c-article-content" v-html="contents"></div>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: 'blog',
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

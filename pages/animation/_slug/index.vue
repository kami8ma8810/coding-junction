<template>
  <div class="c-container">
    <main class="c-main">
      <h1 class="c-article-title">{{ title }}</h1>
      <p>{{ new Date() | moment }}</p>
      <ul class="category-items">
        <li>{{ category && category.categoryName }}</li>
      </ul>
      <div v-html="contents"></div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://coding-junction.microcms.io/api/v1/animation/${params.slug}`,
      {
        // headers: { 'X-API-KEY': process.env.API_KEY },
        headers: { 'X-API-KEY': 'ba518e2d-72c5-4707-bde8-826fd87237bc' },
      }
    )
    return data
  },
}
</script>

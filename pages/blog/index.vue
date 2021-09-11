<template>
  <div>
    <main>
      <h1 class="page-title">Blog</h1>
      <ul>
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/blog/${content.id}`">
            {{ content.title }}
          </nuxt-link>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data } = await axios.get(
      'https://coding-junction.microcms.io/api/v1/blog',
      {
        headers: { 'X-API-KEY': process.env.API_KEY },
      }
    )
    return data
  },
}
</script>

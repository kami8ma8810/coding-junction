<template>
  <div class="c-container">
    <main class="c-main">
      <h1 class="page-title">Animation</h1>
      <ul>
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/animation/${content.id}`">
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
      'https://coding-junction.microcms.io/api/v1/animation',
      {
        headers: { 'X-API-KEY': process.env.API_KEY },
      }
    )
    return data
  },
}
</script>

<template>
  <div class="c-container">
    <main class="c-main c-article-wrap">
      <h1 class="c-page-title">
        Blog<br /><span class="c-page-title__small"
          >本サイトを構築しているNuxt.jsやmicroCMSについて</span
        >
      </h1>
      <ul class="items">
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/blog/${content.id}`" class="item">
            <article>
              <section>
                <h2>
                  {{ content.title }}
                </h2>
              </section>
            </article>
          </nuxt-link>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
// import axios from 'axios'

export default {
  // async asyncData() {
  //   const { data } = await axios.get(
  //     'https://coding-junction.microcms.io/api/v1/blog',
  //     {
  //       // headers: { 'X-API-KEY': process.env.API_KEY },
  //       headers: { 'X-API-KEY': 'ba518e2d-72c5-4707-bde8-826fd87237bc' },
  //     }
  //   )
  //   return data
  // },
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'blog',
    })
    return data
  },
}
</script>

<style lang="scss" scoped></style>

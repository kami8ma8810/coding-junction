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
export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: 'blog',
      contentId: params.slug,
    })
    return data
  },
   head(){
    return{
      title: 'Blog',
    }
  },
}
</script>

<style lang="scss" scoped></style>

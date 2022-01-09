<template>
  <div class="c-container">
    <main class="c-main c-article-wrap">
      <h1 class="c-page-title">
        News<br /><span class="c-page-title__small"
          >コミュニティなどに関するお知らせ</span
        >
      </h1>
      <ul class="items">
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/news/${content.id}`" class="item">
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
      endpoint: 'news',
      contentId: params.slug,
    });
    return data;
  },
  head() {
    return {
      title: 'News',
    };
  },
};
</script>

<style lang="scss" scoped></style>

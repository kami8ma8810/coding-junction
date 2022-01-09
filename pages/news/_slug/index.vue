<template>
  <div class="c-container">
    <main class="c-main">
      <h1 class="c-article-title">{{ title }}</h1>
      <time class="c-article-time">{{ date | formatDate }}</time>
      <ul class="c-category-items">
        <li
          v-for="categoryItem in category"
          :key="categoryItem.id"
          class="c-category-item"
        >
          <nuxt-link :to="`/category/${categoryItem.id}`" class="link">
            {{ categoryItem.name }}
          </nuxt-link>
        </li>
      </ul>
      <div class="c-article-content" v-html="contents"></div>
    </main>
  </div>
</template>

<script>
import cheerio from 'cheerio';
import hljs from 'highlight.js';

export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: 'news',
      contentId: params.slug,
    });
    // シンタックスハイライト
    const $ = cheerio.load(data.contents);
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass('hljs');
    });
    return { ...data, contents: $.html() };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

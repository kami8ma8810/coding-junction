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
          {{ categoryItem.name }}
        </li>
      </ul>
      <div class="c-article-content" v-html="contents"></div>
    </main>
  </div>
</template>

<script>
// import axios from 'axios';
import cheerio from 'cheerio';
import hljs from 'highlight.js';

export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: 'blog',
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
  // async asyncData({ params }) {
  //   const { data } = await axios.get(
  //     `https://coding-junction.microcms.io/api/v1/blog/${params.slug}`,
  //     {
  //       headers: { 'X-API-KEY': 'ba518e2d-72c5-4707-bde8-826fd87237bc' },
  //     }
  //   );
  //   return data;
  // },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

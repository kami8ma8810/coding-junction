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
          <nuxt-link :to="`/category/${category.id}`" class="link">
            {{ categoryItem.name }}
          </nuxt-link>
        </li>
      </ul>
      <span class="c-timestamp"
        ><img
          src="~/assets/img/common/icon-clock-gray.svg"
          alt=""
          width="14"
          height="14"
        /><time class="c-article-time">{{ date | formatDate }}</time></span
      >
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
      endpoint: 'animation',
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

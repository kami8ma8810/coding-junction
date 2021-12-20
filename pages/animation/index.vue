<template>
  <div class="c-container">
    <main class="c-main">
      <h1 class="c-page-title">Animation Examples</h1>
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
// import axios from 'axios';

export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: 'animation',
      contentId: params.slug,
    });
    return data;
  },
  head() {
    return {
      title: 'Animation',
    };
  },

  // async asyncData() {
  //   const { data } = await axios.get(
  //     'https://coding-junction.microcms.io/api/v1/animation',
  //     {
  //       headers: { 'X-API-KEY': 'ba518e2d-72c5-4707-bde8-826fd87237bc' },
  //     }
  //   );
  //   return data;
  // },
  // head() {
  //   return {
  //     title: 'Animation',
  //   };
  // },
};
</script>

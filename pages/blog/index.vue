<template>
  <main>
    <h1>ブログ一覧</h1>
    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/blog/${content.id}`">
          {{ content.title }}
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>
<script>
import axios from "axios";
export default {
  async asyncData() {
    const { data } = await axios.get(
      "https://coding-junction.microcms.io/api/v1/blog",
      {
        headers: { "X-API-KEY": "ba518e2d-72c5-4707-bde8-826fd87237bc" }
      }
    );
    return data;
  }
};
</script>

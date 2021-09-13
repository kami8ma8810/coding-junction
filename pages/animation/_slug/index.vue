<template>
  <div class="c-container">
    <main class="main">
      <h1>{{ title }}</h1>
      <p>{{ date }}</p>
      <div v-html="contents"></div>
    </main>
  </div>
</template>

<script>
// import axios from 'axios'

// export default {
//   async asyncData({ params }) {
//     const { data } = await axios.get(
//       `https://coding-junction.microcms.io/api/v1/animation/${params.slug}`,
//       {
//         headers: { 'X-API-KEY': process.env.API_KEY },
//       }
//     )
//     return data
//   },
// }
</script>

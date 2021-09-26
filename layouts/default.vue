<template>
  <!-- layoutファイル内には必ず</nuxt>を記述。この</nuxt>部分でpagesの中身が展開される -->
  <div>
    <Header />
    <Nav-bar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>
<style lang="scss">
@import '~/assets/scss/_reset.scss';
</style>

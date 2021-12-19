<template>
  <!-- layoutファイル内には必ず</nuxt>を記述。この</nuxt>部分でpagesの中身が展開される -->
  <div class="wrapper">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '@/components/common/TheHeader.vue';
import TheFooter from '~/components/common/TheFooter.vue';
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style lang="scss">
@import '~/assets/scss/_reset.scss';
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.c-container {
  flex: 1;
  overflow-x: hidden;
}
</style>

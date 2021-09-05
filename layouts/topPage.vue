<template>
  <!-- layoutファイル内には必ず</nuxt>を記述。この</nuxt>部分でpagesの中身が展開される -->
  <div>
    <h1>This is top page.</h1>
    <nuxt />
    <hr />
    <!-- Footer -->
    <footer>
      <p class="copyright text-muted">Copyright &copy; Hayato Kamiyama 2021</p>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* nuxt-link-exact-active : 現在のURLとリンク先のURLが完全に一致する場合 */
a.nuxt-link-exact-active {
  font-weight: bold;
}
</style>

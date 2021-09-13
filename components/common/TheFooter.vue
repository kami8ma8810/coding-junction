<template>
  <div>
    <footer class="footer">
      <div class="footer-inner">
        <p class="copyright text-muted">&copy; 2021 上かるび</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: $mainOrange;
  color: $white;
  @include yugo;
}
.footer-inner {
  width: 100%;
  padding: 20px 0;
  @include mq(md) {
    padding: 40px 0;
  }
}
.copyright {
  text-align: center;
  letter-spacing: 0.05em;
}
</style>

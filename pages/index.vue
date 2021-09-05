<template>
  <!-- template直下には１つのHTMLのみ ここではdiv（それより下層はいくつでもOK） -->
  <div>
    <!-- Page Header -->
    <header class="header">
      <div class="header-inner">
      <div class="header-logo">
        <img src="~/assets/images/logo-main.svg" alt="" width="50" height="auto">
      </div>
      <h1 class="header-title">Coding Junction</h1>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      メインコンテンツ
    </main>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>

  footer {
    padding: 50px 0 65px;
    text-align: center;
  }
</style>

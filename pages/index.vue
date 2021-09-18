<template>
  <div class="c-container">
    <main class="c-main">
      <section>
        <h1 class="top-title">
          TOP PAG TITLE
        </h1>
      </section>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.top-title {
  text-align: left;
  font-size: 16px;
  font-feature-settings: 'palt';
  letter-spacing: 0.05em;
  font-weight: 600;
  @include mq(md) {
    font-size: 32px;
    letter-spacing: 0.08em;
  }
}
</style>

<template>
  <div>
    <main>
      <section>
        <h1 class="top-title">
          コーディングで悩んだ人が、いつでも戻れる場所。<br />学び合い、力をつけて、再出発する場所。
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
  text-align: center;
  font-size: 16px;
  font-feature-settings: 'palt';
  letter-spacing: 0.05em;
  @include mq(md) {
    font-size: 24px;
  }
}
</style>

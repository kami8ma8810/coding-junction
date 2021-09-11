<template>
  <div>
    <header class="header">
      <div class="header-inner">
        <nuxt-link to="/" class="header-title">
          <div class="header-title__logo">
            <img src="~/assets/img/common/logo-main.svg" alt="" />
          </div>
          <p class="header-title__text">
            <img
              src="~/assets/img/common/text-header-title.svg"
              alt="Coding Junction"
            />
          </p>
        </nuxt-link>
        <NavBar />
      </div>
    </header>
  </div>
</template>
<script>
import NavBar from '@/components/common/NavBar.vue'
export default {
  components: {
    NavBar,
  },
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
}
.header-inner {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
.header-title {
  width: 100%;
  display: flex;
  align-items: center;
}
.header-title__logo {
  width: 30px;
  margin-right: 10px;
}
.header-title__text {
  width: 200px;
}
.nav {
  display: none;
  @include mq(md) {
    display: block;
  }
}
</style>

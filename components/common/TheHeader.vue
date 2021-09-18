<template>
  <div>
    <header class="header">
      <div class="header-inner">
        <nuxt-link to="/" class="header-title">
          <div class="header-title__logo">
            <img src="~/assets/img/common/header-logo.svg" alt="" />
          </div>
          <p class="header-title__text">
            <!-- <img
              src="~/assets/img/common/text-header-title.svg"
              alt="Coding Junction"
            /> -->
            Coding Junction
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
  position: fixed;
  top: 0;
}
.header-inner {
  background-color: $white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  @include josefin;
  font-weight: 600;
}
.header-title {
  width: 100%;
  display: flex;
  align-items: center;
}
.header-title__logo {
  width: 32px;
  margin-right: 10px;
  img {
    vertical-align: middle;
  }
}
.header-title__text {
  font-size: 30px;
}
.nav {
  display: none;
  @include mq(md) {
    display: block;
  }
}
</style>

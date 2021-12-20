<template>
  <header class="header">
    <div class="header-inner">
      <nuxt-link to="/" class="header-title">
        <div class="header-title__logo">
          <img src="~/assets/img/common/header-logo.svg" alt="" />
        </div>
        <p class="header-title__text">Coding Junction</p>
      </nuxt-link>
      <NavBar v-if="$mq === 'infinity'" />
      <HamburgerMenu v-if="$mq === 'lg'" />
    </div>
  </header>
</template>
<script>
import NavBar from '@/components/common/NavBar.vue';
import HamburgerMenu from '@/components/common/HamburgerMenu.vue';
export default {
  components: {
    NavBar,
    HamburgerMenu,
  },
};
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
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  @include josefin;
  font-weight: 600;
}
.header-title {
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
  font-size: 24px;
  white-space: nowrap;
  @include mq(lg) {
    font-size: 30px;
  }
}
</style>

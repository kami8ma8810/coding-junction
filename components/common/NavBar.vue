<template>
  <div class="pc-nav">
    <nav>
      <ul class="nav-items">
        <li class="nav-item"><nuxt-link to="/" exact>Home</nuxt-link></li>
        <!-- <li class="nav-item">
          <nuxt-link to="/animation">Animation</nuxt-link>
        </li> -->
        <li class="nav-item"><nuxt-link to="/news">News</nuxt-link></li>
        <!-- <li class="nav-item"><nuxt-link to="/blog">Blog</nuxt-link></li> -->
        <!-- <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/contact">Contact</nuxt-link></li> -->
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.pc-nav{
  display: none;
  @include mq(lg) {
  display: block;
  }
}

a.nuxt-link-active {
  /* nuxt-link-exact-active : 現在のURLとリンク先のURLが完全に一致する場合 */
  background: linear-gradient(transparent 70%, $colorLightPink 70%);
}
.nav-items {
  display: flex;
  align-items: center;
}
.nav-item {
  font-size: 14px;
  letter-spacing: 0.08em;
  @include mq(md) {
    font-size: 20px;
  }
  & + .nav-item {
    margin-left: 24px;
  }
}
</style>

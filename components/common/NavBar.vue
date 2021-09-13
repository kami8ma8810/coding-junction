<template>
  <div class="nav">
    <nav>
      <ul class="nav-items">
        <li class="nav-item"><nuxt-link to="/">Top</nuxt-link></li>
        <li class="nav-item">
          <nuxt-link to="/animation">Animation</nuxt-link>
        </li>
        <li class="nav-item"><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
/* nuxt-link-exact-active : 現在のURLとリンク先のURLが完全に一致する場合 */
a.nuxt-link-exact-active {
  background: linear-gradient(transparent 70%, $mainYellow 70%);
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
    margin-left: 20px;
  }
}
</style>

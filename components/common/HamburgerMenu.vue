<template>
  <div class="hamburger">
    <button @click="toggle" class="button">
      <span class="line">
        <span class="sr-only">メニューを開閉する</span>
      </span>
    </button>
    <nav class="global-menu">
      <ul class="menu">
        <template v-for="(menuItem, index) in MENU">
          <li :key="index" class="menu__item" :class="menuItem.className">
            <nuxt-link :to="`/${menuItem.path}`" v-text="menuItem.name" />
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>
<script>

const MENU = [
  {
    id: 1,
    name: 'Home',
    path: '',
    image: '',
    className: '',
  },
  {
    id: 2,
    name: 'About',
    path: 'about',
    image: '',
    className: '',
  },
]
export default {
  data() {
    return {
      MENU,
      windowWidth:650
    }
  },
}
</script>

<style scoped lang="scss">
.hamburger {
  width: 40px;
  display: none;
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 40px;
  }
  .line {
    width: 100%;
    height: 2px;
    background-color: $black;
    display: block;
    position: relative;
    &::before,
    &::after {
      content: '';
      display: block;
      width: 100%;
      position: absolute;
      height: 100%;
      background-color: inherit;
    }
    &::before {
      top: -10px;
    }
    &::after {
      bottom: -10px;
    }
  }
}
</style>

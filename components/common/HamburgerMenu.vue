<template>
  <div class="hamburger-menu">
    <button
      v-show="isMobile"
      class="hamburger-button"
      type="button"
      @click="isActiveMenu = !isActiveMenu"
    >
      <span class="hamburger-line">
        <span class="sr-only">メニューを開閉する</span>
      </span>
    </button>
    <transition name="fade">
      <nav v-show="!isMobile || isActiveMenu" class="global-nav">
        <ul class="menu">
          <template v-for="(menuItem, index) in MENU">
            <li :key="index" class="menu__item" :class="menuItem.className">
              <nuxt-link
                :to="`/${menuItem.path}`"
                event=""
                @click.native.prevent="trigger"
                v-text="menuItem.name"
              />
            </li>
          </template>
        </ul>
      </nav>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      MENU,
      windowWidth: 900,
      isActiveMenu: false,
    }
  },
    computed: {
    /**
     * スマホかどうかを判定する
     *
     * @return {Boolean}
     */
    isMobile() {
      return this.windowWidth < 960
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
  },
  methods: {
    trigger() {
      if (this.isMobile) {
        this.isActiveMenu = false
        this.$router.push({ path: event.target.pathname })
      } else {
        this.$router.push({ path: event.target.pathname })
      }
    },
  },
}
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
    name: 'Animation',
    path: 'animation',
    image: '',
    className: '',
  },
  {
    id: 3,
    name: 'Blog',
    path: 'blog',
    image: '',
    className: '',
  },
]
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.hamburger-button {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
}
.hamburger-line {
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
    height: 100%;
    position: absolute;
    background-color: inherit;
  }
  &::before {
    top: -10px;
  }
  &::after {
    bottom: -10px;
  }
}
.cross {
  width: 100%;
  height: 2px;
  background-color: $white;
  display: block;
  transform: rotate(45deg);
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: inherit;
    position: absolute;
    background-color: inherit;
    transform: rotate(-90deg);
  }
}
.hamburger-menu{
  display: block;
  @include mq(lg) {
  display: none;
  }
}
.global-nav {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  // background-color: $colorLightPink;
  background-color: $colorDarkBlue;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu__item {
  font-size: 40px;
  & + .menu__item {
    margin-top: 40px;
  }
}
</style>

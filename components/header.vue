<template>
  <div>
    <header>
      <div class="header-logo">
        <img src="" alt="">
      </div>
      <h1>Coding Junctionは、コーディングをする人がいつでも戻れる場所。交流して学び合い、再出発する場所。</h1>
      <HeaderNav />
    </header>
  </div>
</template>
<script>
import '~/assets/sass/global/_variables.scss'
import HeaderNav from '@/components/headerNav.vue'
export default {
  components: {
    HeaderNav,
  },
}
</script>

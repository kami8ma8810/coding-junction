import Vue from 'vue'
import VueMq from 'vue-mq'
Vue.use(VueMq, {
  breakpoints: {
    // sm:430,
    // md: 768,
    lg: 960,
    // xl: 1366,
    infinity:Infinity
  },
  defaultBreakpoint: 'lg',
})

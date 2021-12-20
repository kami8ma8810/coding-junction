<template>
  <div class="c-container">
    <main class="c-main">
      <section>
        <h1 class="top-title">
          Coding
          JunctionではGSAPをメインに、<br>ライブラリを使用したアニメーションの実装について発信しています。
        </h1>
        <div class="swiper-area">
          <!-- <client-only>
            <swiper :options="swiperOption">
              <swiper-slide v-for="(slide, index) in contents" :key="index">
                <img :src="slide.image.url" :alt="slide.alt" />
              </swiper-slide>
            </swiper>
          </client-only> -->
          <!-- <div slot="pagination" class="swiper-pagination" />
          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next" /> -->
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ params,$microcms }) {
    const data = await $microcms.get({
      endpoint: 'slide',
      contentId: params.slug,
    })
    return data
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        allowTouchMove:true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 40,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      },
    }
  },
  head() {
    return {
      title: 'Home',
    }
  },
}
</script>

<style lang="scss" scoped>
.top-title {
  text-align: left;
  font-size: 16px;
  font-feature-settings: 'palt';
  letter-spacing: 0.05em;
  font-weight: 600;
  @include mq(md) {
    font-size: 32px;
    letter-spacing: 0.08em;
    line-height: 1.8;
  }
}
@keyframes zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
.swiper-area {
  position: relative;
  z-index: -1;
}
.swiper-area::v-deep {
  .swiper-container {
    width: 100vw;
    margin: 0 calc(50% - 50vw);
  }
  .swiper-wrapper {
    padding: 100px 0;
  }
}
.swiper-button-next,
.swiper-button-prev {
  transform: translateY(-50%);
}
.swiper-slide {
  &:hover {
    cursor: grab;
  }
}
</style>

import Sass from 'sass';
// import Fiber from 'fibers'
import open from 'open';
require('dotenv').config();
const { API_KEY, SERVICE_ID } = process.env;
const axios = require('axios');
const cheerio = require('cheerio'); //nuxt generateでの不要ファイルを削除するプラグイン

const siteUrl = 'https://coding-junction.com/';
const siteName = 'Coding Junction';
const siteDesc =
  'Coding Junctionは、コーディングをする人がいつでも戻れる場所。交流して学び合い、再出発する場所。';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s | ${siteName}`,
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteDesc },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'canonical', href: siteUrl },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        type: 'image/png',
        href: '/apple-touch-icon.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // { src: '~/assets/scss/reset.scss', lang: 'scss' },
    { src: '~/assets/scss/common.scss', lang: 'scss' },

    {
      // シンタックスハイライト テーマ参照先：https://highlightjs.org/static/demo/
      src: '~/node_modules/highlight.js/styles/atom-one-dark.css',
      lang: 'css',
    },
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/filter' },
    { src: '~/plugins/vue-mq' },
    { src: '~/plugins/swiper', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-microcms-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources', // グローバルなsass変数を利用
    'nuxt-webfontloader', //webフォント用
    // ['@nuxtjs/moment', ['ja']], //microCMSの日付をフォーマット
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // microCMS
  microcms: {
    options: {
      serviceDomain: SERVICE_ID,
      apiKey: API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  // env: {
  //   API_KEY,
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    scss: [
      // '~/assets/scss/common.scss',
      '~/assets/scss/global/_variables.scss',
      '~/assets/scss/global/_mixins.scss',
    ],
  },
  // webfont
  webfontloader: {
    google: {
      families: ['Lato:400,600,700', 'Josefin+Sans:400,600,700'],
    },
  },
  hooks: {
    // generate時に生成される不要なタグを削除
    'generate:page': (page) => {
      const doc = cheerio.load(page.html);
      doc(`body script`).remove();
      page.html = doc.html();
    },
    //ローカルサーバー自動起動
    listen(server, { host, port }) {
      open(`http://${host}:${port}`);
    },
  },
};

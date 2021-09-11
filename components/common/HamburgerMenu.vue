<template>
  <div class="hamburger"></div>
</template>
<script>
export default {
  components: {},
}
</script>

<style scoped lang="scss">
// $header-height: 70px;
// $sp_header-height: 40px;
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.3s;
// }
// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
// }

// .hamburger {
//   position: fixed;
//   top: 0;
//   right: 0;
//   z-index: 10;
// }
// .closeBtn_gray_back {
//   position: fixed;
//   background: $gray;
//   top: 0;
//   right: 0;
//   width: $sp_header-height;
//   height: $sp_header-height;
// }
// .menu {
//   position: absolute;
//   display: flex;
//   background: #000;
//   color: #fff;
//   justify-content: flex-start;
//   top: 0;
//   right: 0;
//   width: $sp_header-height;
//   height: $sp_header-height;
//   transition: all 0.3s;
//   cursor: pointer;
//   @include tab {
//     width: $header-height;
//     height: $header-height;
//   }
// }
// .menu span {
//   margin-top: 10px;
//   left: 10px;
//   width: 20px;
//   position: absolute;
//   height: 1px;
//   background-color: #fff;
//   border-radius: 4px;
//   transition: all 0.3s;
//   @include tab {
//     margin-top: 23px;
//     left: 23px;
//     width: 25px;
//   }
// }
// .menu span:nth-child(1) {
//   top: 0;
// }
// .menu span:nth-child(2) {
//   top: 9px;
// }
// .menu span:nth-child(3) {
//   top: 18px;
// }
// .menu.menuopen {
//   background: none;
//   z-index: 1;
// }
// .menu.menuopen span {
//   background-color: #000;
// }
// .menu.menuopen span:nth-child(1) {
//   transform: translateY(10px) rotate(-135deg);
//   height: 2px;
// }
// .menu.menuopen span:nth-child(2) {
//   opacity: 0;
// }
// .menu.menuopen span:nth-child(3) {
//   transform: translateY(-8px) rotate(135deg);
//   height: 2px;
// }

// /*#mask*/
// .mask {
//   display: none;
// }
// .mask.menuopened_mask {
//   display: block;
//   position: fixed;
//   overflow-y: scroll;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: #fff;
//   animation: openHam 0.2s ease;
//   -ms-overflow-style: none; /* IE, Edge 対応 */
//   scrollbar-width: none; /* Firefox 対応 */
//   @include tab {
//     overflow-y: visible;
//   }
// }
// .mask.menuopened_mask::-webkit-scrollbar {
//   /* Chrome, Safari 対応 */
//   display: none;
// }
// .wrapper-menu {
//   display: flex;
//   flex-direction: column;
//   @include tab {
//     justify-content: space-between;
//     flex-direction: row;
//   }
// }
// @keyframes openHam {
//   0% {
//     opacity: 0;
//   }

//   100% {
//     opacity: 1;
//   }
// }
// .menu_sidebar {
//   right: 0;
//   width: 100%;
//   @include tab {
//     width: 230px;
//     background: $gray;
//   }
// }

// .menu_main {
//   display: none;
//   @include tab {
//     display: block;
//     width: calc(100% - 230px);
//     padding: 0 0.5rem 5rem 3rem;
//   }
// }
// .sp-menu-main {
//   display: block;
//   padding: 3rem 1.5rem 1rem 1.5rem;
//   @include tab {
//     display: none;
//   }
// }

// .tags_btn {
//   display: block;
//   width: 100%;
//   max-width: 400px;
//   & img {
//     width: 100%;
//   }
// }
// @include tab {
//   .for_scroll {
//     overflow-y: scroll;
//     height: 100vh;
//     /* Windowsスクロールバーを消す */
//     -ms-overflow-style: none; /* IE, Edge 対応 */
//     scrollbar-width: none; /* Firefox 対応 */
//   }
//   .for_scroll::-webkit-scrollbar {
//     /* Chrome, Safari 対応 */
//     display: none;
//   }
//   .menu_sidebar .for_scroll {
//     padding: 5rem 1rem;
//   }
// }
</style>

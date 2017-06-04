<template>
  <div class="header-tab">
    <div class="Swipe-tab Swipe-tab_2 f-cb">
      <a href="javascript:"></a>
      <a href="javascript:"></a>
      <i v-bind:style="{width: '50%', transform: 'translate3d('+swipeTabI+'px, 0px, 0px)' , transition:'transform '+0.2*!touchFlag+'s ease-out'}"></i>
     </div>
     <em class="header-user" ></em>
     <em class="header-checkin" ></em>
  </div>
</template>
<script>
export default {
  name : 'main-header'
}
</script>
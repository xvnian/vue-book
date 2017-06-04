<template>
  <div id="root">
    <transition enter-active-class="animated slideInRight fast" leave-active-class="animated slideOutLeft fast">
      <router-view></router-view>
    </transition>
    
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
</style>

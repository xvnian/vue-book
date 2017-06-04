<template>
  <div class="top">
    <a href="javascript:history.back()" class="top__back"></a>
    <span class="top__title">{{title}}</span>
    <a href="#" class="header-home"></a>
  </div>
</template>
<script type="text/javascript">
  export default {
    props:{
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
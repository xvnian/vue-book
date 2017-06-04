<template>
  <section class="main-card -folder">
    <div class="u-title">
      <h1>图书信息</h1></div>
    <div class="cnt">
      <ul class="text">
        <li>版权 : {{right}}</li>
      </ul>
    </div>
  </section>
</template>
<script>
  export default {
    props: {
      right: ''
    }
  }
</script>
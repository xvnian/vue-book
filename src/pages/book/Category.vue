<template>
  <section class="main-card">
    <div class="u-folder ">
      <div class="folder-top">
        <h3>类别标签</h3>
      </div>
      <div class="folder-cnt">
        <ul class="m-tag -color">
          <li class="u-tag" v-for="item in category">{{item.label}}</li>
        </ul>
      </div><em class="folder-more"></em>
    </div>
  </section>
</template>
<script type="text/javascript">
  export default {
    props: {
      category: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>
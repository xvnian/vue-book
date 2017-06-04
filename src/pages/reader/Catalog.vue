<template>
<div >
  <div class="top">
    <a href="javascript:history.back()" class="top__back"></a>
    <span class="top__title">目录</span>
    <a href="#" class="header-home"></a>
  </div>
  <div class="top__bd">
    <ul class="fiction-toc">
      <li v-for="item in catalogData"  @click="gotoReader(item.chapter_id)"
      :class="['fiction-toc__item', item.free?'fiction-toc__item_free':'', 
      (item.chapter_id==$route.params.chapter_id) ?'fiction-toc__item_cur':'']">
        <p :data-id="item.chapter_id">{{item.title}}</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import {getCatalogData} from '@/api/index'
export default {
  name: 'catalog',
  data () {
    return {
      catalogData: [],
      chapter_id: 0
    }
  },
  methods: {
    gotoReader(chapter_id){
      localStorage.removeItem('v6__fiction_' + this.$route.params.fiction_id + '_progress')
      this.$router.replace({
        name: 'Reader',
        params: {
          fiction_id: this.$route.params.fiction_id,
          chapter_id: chapter_id
        }
      })
    }
  },
  created: function () {
    this.fiction_id = this.$route.params.fiction_id;
    this.chapter_id = this.$route.params.chapter_id;
    getCatalogData(this.fiction_id).then(res => {
      this.catalogData = res.item.toc
      this.$nextTick(() => {
        document.querySelector(".fiction-toc__item_cur").scrollIntoView()
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
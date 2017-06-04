<template>
  <div class="Swipe slider-banner">
    <div :style="containerStyle" style="transition-duration:0">
        <div class="u-topic" v-for="item in banner">
          <div class="banner">
            <img class="cover" v-lazy="item.ad_pic_url">
          </div>
        </div>
        <!-- <div class="u-topic">
          <div class="banner">
            <img class="cover" src="http://image.read.duokan.com/mfsv2/download/fdsc3/p01t3HFw4zGY/cRQkpvrTm5bJJB.jpg">
          </div>
        </div> -->
    </div>
    <div class="Swipe-tab">
      <!-- <a class="Swipe-tab__on"></a> -->
      <a :class="[item==index ? 'Swipe-tab__on': '']" v-for="item in banner.length" @click="index=(item-1)"></a>
      <i :style="tabStyle" style="width:18px;transition-duration:0"></i>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'banner',
    data () {
      return {
        index: 0,
        timer: null
      }
    },
    computed: {
      tabStyle () {
        let offset = this.index * 18
        return {
          transform: 'translate3d(' + offset + 'px, 0px, 0px)'
        }
      },
      containerStyle () {
        let offset =  - window.innerWidth * this.index
        return {
          width: window.innerWidth * this.banner.length + 'px',
          transform: 'translate3d(' + offset + 'px, 0px, 0px)'
        }
      }
    },
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created () {
      // console.log(this.banner)
    },
    mounted () {
      this.timer = setInterval(()=>{
        if(this.index === this.banner.length-1){
          this.index = 0
        } else {
          this.index++
        }
      }, 4000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }
</script>
<style scoped>
.u-topic{
  width: 100vw;
}
</style>

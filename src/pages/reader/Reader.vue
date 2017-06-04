<template>
<div :class="['reader',reader_op, reader_op_font]" :data-night="night" :data-bg="bg">
    <div class="reader__mask" @click="hideMenu"></div>
    <div class="reader__hd">
        <a class="reader__back" href="javascript:history.back()"></a>返回
        <a class="reader__more"></a>
    </div>
    <div class="reader__ft">
        <div class="reader__ft-bar">
          <a @click="prevCharpter" class="reader__prev-chapter">上一章</a>
          <a href="javascript:">{{chapter_id - 0 + 1}}/{{chapter_count}}</a>
          <a @click="nextCharpter" class="reader__next-chapter">下一章</a>
        </div>
        <a class="reader__ft-toc reader__toc" @click="gotoCatalog"></a>
        <a class="reader__ft-font" @click="showFont"></a>
        <a class="reader__ft-night" @click="switchNight"></a>
        <a class="reader__ft-download">下载</a>
    </div>
    <div class="reader__font">
        <div class="reader__font-size"><span>字号</span>
          <a class="reader__font-large" @click="bigFont()">大</a>
          <a class="reader__font-small" @click="smallFont()">小</a>
        </div>
        <div class="reader__font-bg"><span>背景</span>
          <a :data-bg="item" @click="setBg(item)" v-for="item in 5"></a>
          <a data-bg="0" @click="setBg(0)"></a>
        </div>
    </div>
    <div class="reader__bd" :style="{fontSize: font+'px'}"
      @click="showMenu" @scroll="scroll">
      <ul class="reader__chapter">
        <li>
          <div class="reader__content">
            <h1>{{title}}</h1>
            <p v-for="item in content">{{item}}</p>
            <!-- <h1>序 下山</h1>
            <p>世界是相对的。</p>
            <p>中土大陆隔着海洋与大西洲遥遥相对。东方地势较高，那里的天空似乎也高了起来，云雾从海上陆地上升腾而起，不停向着那处飘去，最终汇聚在一起，终年不散。</p>
            <p>这里便是云墓——世间所有云的坟墓。</p> -->
          </div>
          <div class="reader__ad" style="display: none;">
            <div class="reader__close"></div>
          </div>
        </li>
      </ul>
      <div class="ListView__complete">
        <div class="reader__chapter-btn">
          <a @click="prevCharpter" class="reader__prev-chapter">上一章</a>
          <a @click="gotoCatalog" class="reader__toc">目录</a>
          <a @click="nextCharpter" class="reader__next-chapter">下一章</a>
        </div>
      </div>
    </div>
</div>
</template>

<script>

import {getCatalogData,getContentData} from '@/api/index'
import Base64 from '@/utils/base64'

let fiction_content
let duokan_fiction_chapter = data => {
  fiction_content = JSON.parse(Base64.decode(data))
}

export default {
  name: 'reader',
  data () {
    return {
      night: 0,
      bg:1,
      font:14,
      reader_on: false,
      font_on:false,
      title:"",
      content: [],
      fiction_id: 270885,
      chapter_id: 0,
      chapter_count : 0
    }
  },
  computed:{
    reader_op(){
      if(this.reader_on){
        return "reader_op"
      } else {
        return ""
      }
    },
    reader_op_font(){
      if(this.font_on){
        return "reader_op-font"
      } else {
        return ""
      }
    },
    updateTime(){

    }
  },
  watch: {
    '$route' (to, from) {
      this.render()
    }
  },
  methods: {
    scroll(){
      let wrap = document.querySelector('.reader__bd')
      let content = document.querySelector('.reader__chapter')
      // console.log(wrap.scrollTop)
    },
    gotoCatalog(){
      this.$router.push({
        name: 'Catalog',
        params: {
          id: this.fiction_id,
          chapter_id: this.chapter_id - 0
        }
      })
    },
    nextCharpter(){
      if(this.chapter_id - 0 + 1 > this.chapter_count){
        return 0
      }

      this.$router.replace({
        name: 'Reader',
        params: {
          fiction_id: this.fiction_id,
          chapter_id: this.chapter_id - 0 + 1
        }
      });
    },
    prevCharpter(){
      if(this.chapter_id === 0){
        return 0
      }

      this.$router.replace({
        name: 'Reader',
        params: {
          fiction_id: this.fiction_id ,
          chapter_id: this.chapter_id - 1
        }
      });
    },
    bigFont(){
      if(this.font>21) {
        return
      }
      this.font = this.font + 1
    },
    smallFont(){
      if(this.font<12) {
        return
      }
      this.font = this.font - 1
    },
    showMenu(event){
      if(event.clientY>50 && event.clientY< window.innerHeight-120){
        this.reader_on = true
      }
    },
    hideMenu(){
      this.reader_on = false
      this.font_on = false
    },
    switchNight(){
      this.night = this.night ? 0 : 1
    },
    showFont(){
      this.font_on = !this.font_on
    },
    setBg(bugColor){
      this.bg = bugColor
    },
    render(){
      this.fiction_id = this.$route.params.fiction_id
      this.chapter_id = this.$route.params.chapter_id

      getContentData(this.fiction_id, this.chapter_id, res => {
        localStorage.setItem('v6__fiction_' + this.fiction_id + '_progress', this.chapter_id)
        eval (res)
        this.title = fiction_content.t
        this.content = fiction_content.p
      })
    }
  },
  created: function () {
    this.render()

    getCatalogData(this.fiction_id).then(res => {
      this.chapter_count = res.item.chapter_count
    })
  }
}
</script>
<style scoped>
/*.reader .reader__ft a{
  width: 33.3333%
}*/
</style>

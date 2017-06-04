<template>
  <section class="main-card">
    <div class="u-book -detail">
      <div class="book-cover ">
        <img :src="detail.cover + '!s'"> 
        <div class="u-tagRT"></div>
      </div>
      <div class="info">
        <h3 class="title">{{detail.title}}</h3>
        <p class="author"><span class="author">{{detail.authors}}</span></p>
        <div class="u-grade">
          <div class="grade" :class="[getClassStar()]"></div>
          <span class="read">{{detail.score_count}}个评价</span>
        </div>
        <p class="price">价格：{{detail.price}}书币/千字</p>
        <p class="count">
          字数：{{wordCount}}万字
          <span class="u-booktag" :class="[detail.finish ? '' : 'serial']">{{detail.finish ? '已完结' : '连载中'}}</span>
        </p>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    props: {
      detail: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      wordCount () {
        return parseInt(this.detail.word_count/10000)
      }
    },
    methods: {
      getClassStar () {
        let score = Math.round(this.detail.score)
        return 'grade' + score
      }
    }
  }
</script>
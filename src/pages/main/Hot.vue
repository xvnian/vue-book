<template>
  <section class="channel-group main-card">
    <div class="channel-group__header">
    <h2 class="channel-group__title channel-group__title_left">本周最火</h2></div>
    <ul class="book-table">
      <li v-for="item in hot" @click="gotoBook(item.fiction_id)">
        <div class="u-book -vertical" >
          <div class="book-cover">
            <img :alt="item.title" v-lazy="item.cover+'!s'">
            <div class="u-tagRT"></div>
          </div>
          <div class="info">
            <h3 class="title">{{item.title}}</h3>
          </div>
        </div>
      </li>
      <!-- <li>
        <div class="u-book -vertical" >
          <div class="book-cover" ><img alt="逆天透视眼" src="static/hfjdzh92NRtNxW.jpg">
            <div class="u-tagRT"></div>
          </div>
          <div class="info">
            <h3 class="title">逆天透视眼</h3>
          </div>
        </div>
      </li>
      <li>
        <div class="u-book -vertical" >
          <div class="book-cover" ><img alt="逆天透视眼" src="static/hfjdzh92NRtNxW.jpg">
            <div class="u-tagRT"></div>
          </div>
          <div class="info">
            <h3 class="title">逆天透视眼</h3>
          </div>
        </div>
      </li>
      <li>
        <div class="u-book -vertical" >
          <div class="book-cover" ><img alt="逆天透视眼" src="static/hfjdzh92NRtNxW.jpg">
            <div class="u-tagRT"></div>
          </div>
          <div class="info">
            <h3 class="title">逆天透视眼</h3>
          </div>
        </div>
      </li>
      <li>
        <div class="u-book -vertical" >
          <div class="book-cover" ><img alt="逆天透视眼" src="static/hfjdzh92NRtNxW.jpg">
            <div class="u-tagRT"></div>
          </div>
          <div class="info">
            <h3 class="title">逆天透视眼</h3>
          </div>
        </div>
      </li>
      <li>
        <div class="u-book -vertical" >
          <div class="book-cover" ><img alt="逆天透视眼" src="static/hfjdzh92NRtNxW.jpg">
            <div class="u-tagRT"></div>
          </div>
          <div class="info">
            <h3 class="title">逆天透视眼</h3>
          </div>
        </div>
      </li> -->
    </ul>
    <a class="channel-group__footer">查看更多</a>
  </section>
</template>
<script>
  export default {
    name: 'hot',
    props: {
      hot : {
        type: Array,
        default () {
          return []
        }
      }
    },
    created () {
      // console.log(this.hot)
    },
    methods: {
      gotoBook (fiction_id) {
        this.$router.push({
          name: "Book",
          params: {
            fiction_id: fiction_id
          }
        })
      }
    }
  }
</script>
<template>
  <section class="main-card -folder">
    <div class="u-title">
        <h1>{{title}}</h1></div>
    <div class="cnt">
      <ul class="book-table">
         <li v-for="item in bookdata" @click="gotoBook(item.fiction_id)">
            <div class="u-book -vertical" >
              <div class="book-cover ">
                <img :src="item.cover+'!s'">
                <div class="u-tagRT"></div>
              </div>
              <div class="info">
                <h3 class="title">{{item.title}}</h3>
              </div>
            </div>
          </li>
      </ul>
    </div>
  </section>
</template>
<script type="text/javascript">
  export default {
    props: {
      title: '',
      bookdata: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      gotoBook (fiction_id) {
        this.$router.push({
          name: 'Book',
          params: {
            fiction_id: fiction_id
          }
        })
      }
    }
  }
</script>
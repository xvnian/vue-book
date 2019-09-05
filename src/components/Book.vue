<template>
<div class="book">
    <div class="top">
        <a href="javascript:history.back()" class="top__back"></a><span class="top__title">{{bookData.title}}</span>
        <a href="#" class="header-home"></a>
    </div>
    <div class="top__bd" data-dom-uid="18">
        <div class="new-page book-page" data-track="dt">
            <section class="main-card">
                <div class="u-book -detail">
                    <div class="book-cover "><img :alt="bookData.title" v-lazy="bookData.cover">
                        <div class="u-tagRT"></div>
                    </div>
                    <div class="info">
                        <h3 class="title">{{bookData.title}}</h3>
                        <p class="author"><span class="author">{{bookData.authors}}</span></p>
                        <div class="u-grade">
                            <div :class="[starClass]"></div><span class="read">{{bookData.score_count}}个评价</span></div>
                        <p class="price">价格：{{bookData.price?bookData.price:""}}书币/千字</p>
                        <p class="count">字数：{{bookData.word_count?Math.round(bookData.word_count/10000):""}}万字<span class="u-booktag" v-if="bookData.finish">已完结</span></p>
                    </div>
                </div>
            </section>
            <section class="main-card" style="margin-top:-10px">
                <div class="book-dash">
                    <div id="Tag__439">
                        <div class="wrap">
                            <ul class="btn-group" vp-show="!$root.needPay() &amp;&amp; !$root.is10086()">
                                <li class="u-btn2" @click="readBook()"><span class="book-dash-text"></span></li>
                                <li><a class="u-btn3" vp-click="$root.download()" vp-bind="$root.downloadText()">下载</a></li>
                            </ul>
                        </div>
                        <div class="wrap2" vp-show="$root.isLimit()" style="display: none;">
                            <div class="m-limitinfo"><em class="icn-clock"></em><span vp-bind="$root.getLimitText()">限时畅读即将结束</span></div>
                        </div>
                    </div>
                </div>
                <div class="u-folder " id="Tag__440">
                    <div class="folder-cnt -flod" data-href="">
                   	{{bookData.content}}
                    </div>
                    <div class="folder-tail">
                        <div data-href="#page=catalog&amp;id=319207&amp;type=fiction&amp;onlyCatalog=1&amp;chapter_id=259">最新：{{bookData.latest}} 更新于 {{updateTime}}</div>
                    </div>
                </div>
            </section>
            <section class="main-card">
                <div class="u-folder " id="Tag__441">
                    <div class="folder-top">
                        <h3>类别标签</h3></div>
                    <div class="folder-cnt">
                        <ul class="m-tag -color">
                            <li class="u-tag" v-for="item in bookData.categories">{{item.label}}</li>                        
                        </ul>
                    </div><em class="folder-more"></em></div>
            </section>
            <section class="main-card -folder">
                <div class="u-title">
                    <h1>作者其它图书</h1></div>
                <div class="cnt">
                    <ul class="book-table">
                        <li v-for="item in author_books" @click="book(item.fiction_id)">
                            <div class="u-book -vertical" >
                                <div class="book-cover "><img :alt="item.title" v-lazy="item.cover">
                                    <div class="u-tagRT"></div>
                                </div>
                                <div class="info">
                                    <h3 class="title">{{item.title}}</h3></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="main-card -folder">
                <div class="u-title">
                    <h1>喜欢本书的人也喜欢</h1></div>
                <div class="cnt">
                    <ul class="book-table">
                       <li v-for="item in related" @click="book(item.fiction_id)">
                            <div class="u-book -vertical" >
                                <div class="book-cover "><img :alt="item.title" v-lazy="item.cover">
                                    <div class="u-tagRT"></div>
                                </div>
                                <div class="info">
                                    <h3 class="title">{{item.title}}</h3></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="main-card -folder">
                <div class="u-title">
                    <h1>图书信息</h1></div>
                <div class="cnt">
                    <ul class="text">
                        <li>版权 : {{bookData.rights}}</li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'book',
  data () {
    return {
      bookData: [],
      author_books: [],
      related: []
    }
  },
  computed:{
  	starClass(){
  		let className = "grade " + "grade" + (Math.floor(this.bookData.score/2)*2)
  		return className;
  	},
  	updateTime(){
      if(!this.bookData.updated){
        return ""
      }

  		var date = new Date(this.bookData.updated*1000)
  		var format = date.getUTCFullYear() + '-'
  							+  (date.getMonth()+1) + '-'
  							+  date.getDate() + ' '
  							+  date.getHours() + '-'
  							+  date.getMinutes();
  		return format
  	}
  },
  watch: {
    '$route' (to, from) {
      this.render();
    }
  },
  methods: {
  	readBook(){
  		let params = { id: this.bookData.source_id ,chapter_id: 0}
  		this.$router.push({ name: 'Reader', params: params})
  	},
    book(id){
        this.$router.push({ name: 'Book', params: { id: id }})
    },
    render(){
      var option = {
            params:{id: this.$route.params.id}
      };
      
        this.$http.jsonp(window.config.url + '/php/bookapi/book.php', option).then(response => {
          this.bookData = response.body.item;
          this.author_books = response.body.author_books;
          this.related = response.body.related;

          document.querySelector(".top__bd").scrollTop = 0;
        }, response => {
          console.log('search list error');
        });
       
    }
  },
  created: function () {
    this.render()		
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.u-btn3{
  opacity:0.2;
}
</style>

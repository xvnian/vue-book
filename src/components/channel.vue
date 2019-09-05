<template>
<div>
  <div class="top">
      <a href="javascript:history.back()" class="top__back"></a><span class="top__title">{{channelData.ad_setting_name | clipTitle}}</span>
      <a href="#" class="header-home"></a>
  </div>
  <div class="top__bd" data-dom-uid="2">
    <div class="new-page channel-page" >
      <section class="channel-group main-card" v-for="chunk in channelData.items">
        <div class="channel-group__header">
          <h2 class="channel-group__title channel-group__title_left">{{chunk.ad_name}}</h2></div>
        <ul class="book-list">
          <li data-track="0" v-for="item in chunk.data.data" @click="book(item.fiction_id)">
            <div class="u-book" >
              <div class="cnt">
                <div class="book-cover Lazy_loading Lazy_loaded" ><img :alt="item.title" v-lazy="item.cover + '!s'">
                  <div class="u-tagRT"></div>
                </div>
                <div class="info">
                  <h3 class="title single-line">{{item.title}}</h3>
                  <p class="summary">{{item.summary}}</p>
                  <div class="wrap">
                    <div class="book-tag" v-for="(tItem, index) in item.tags" v-if="index < 2">{{tItem}}</div>
                    <p class="author single-line"><span class="author">{{item.authors}}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </li>          
        </ul>
        <a class="channel-group__footer" data-href="#page=topic&amp;type=fiction&amp;id=11060">查看更多</a>
      </section>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'channel',
  data () {
    return {
      channelData : [],
      loading: true
    }
  },
  methods: {  	
  	book(id){
  		this.$router.push({ name: 'Book', params: { id: id }})
  	}
  },
  filters: {  
    clipTitle: function (value) {
      if(typeof value == 'undefined'){
        return ''
      }
      return String(value).substr(3)  
    } ,
    smallCover: function(value){
      return value + '!s'
    }
  } ,
  created: function () {
    var option = {
        params:{id: this.$route.params.id}
    };
   
    this.$http.jsonp(window.config.url + '/php/bookapi/channel.php', option).then(response => {
    	  this.channelData = response.body
      this.loading = false;
    }, response => {
      console.log('channel list error');
    });  
        
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

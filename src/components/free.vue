<template>
<div>
    <div class="top">
        <a href="javascript:history.back()" class="top__back"></a><span class="top__title">{{ad_setting_name}}</span>
        <a href="#" class="header-home"></a>
    </div>
    <div class="top__bd" v-if="!loading">
        <div class="new-page channel-page">
            <section class="channel-group main-card" v-if="aData.length!=0">
                <div class="channel-group__header">
                    <h2 class="channel-group__title channel-group__title_left">{{aInfo.ad_name}}</h2></div>
                <ul class="book-table">
                    <li v-for="item in aData" @click="book(item.data.fiction_id)">
                        <div class="u-book -vertical" >
                            <div class="book-cover Lazy_loading Lazy_loaded" ><img :alt="item.data.title" v-lazy="item.data.cover">
                                <div class="u-tagRT -freefiction" v-if="item.data.allow_free_read"></div>
                            </div>
                            <div class="info">
                                <h3 class="title">{{item.data.title}}</h3></div>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="channel-group main-card">
                <div class="channel-group__header">
                    <h2 class="channel-group__title ">{{bInfo.ad_name}}</h2>
                    <p class="channel-group__desc">{{bInfo.ad_copy}}</p>
                </div>
                <ul class="book-table">
                    <li v-for="item in bData" @click="book(item.fiction_id)">
                        <div class="u-book -vertical" >
                            <div class="book-cover" ><img :alt="item.title" v-lazy="item.cover">
                                <div class="u-tagRT" v-if="item.allow_free_read"></div>
                            </div>
                            <div class="info">
                                <h3 class="title">{{item.title}}</h3></div>
                        </div>
                    </li>
                </ul>
                <a class="channel-group__footer" >查看更多</a>
            </section>
            <section class="channel-group main-card">
                <div class="channel-group__header">
                    <h2 class="channel-group__title ">{{cInfo.ad_name}}</h2>
                    <p class="channel-group__desc">{{cInfo.ad_copy}}</p>
                </div>
                <ul class="book-list">
                    <li v-for="item in cData" @click="book(item.fiction_id)">
                        <div class="u-book" >
                            <div class="cnt">
                                <div class="book-cover " ><img :alt="item.title" v-lazy="item.cover">
                                    <div class="u-tagRT"></div>
                                </div>
                                <div class="info">
                                    <h3 class="title single-line">{{item.title}}</h3>
                                    <p class="summary">{{item.summary}}</p>
                                    <div class="wrap">
                                        <div class="book-tag" v-for="(tItem, index) in item.tags" v-if="index<2">{{tItem}}</div>
                                        <p class="author single-line"><span class="author">{{item.authors}}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <a class="channel-group__footer">查看更多</a>
            </section>
            <section class="channel-group main-card">
                <div class="channel-group__header">
                    <h2 class="channel-group__title ">{{dInfo.ad_name}}</h2>
                    <p class="channel-group__desc">{{dInfo.ad_copy}}</p>
                </div>
                <ul class="book-table">
                    <li v-for="item in dData" @click="book(item.fiction_id)">
                        <div class="u-book -vertical" >
                            <div class="book-cover"><img :alt="item.title" v-lazy="item.cover">
                                <div class="u-tagRT"></div>
                            </div>
                            <div class="info">
                                <h3 class="title">{{item.title}}</h3></div>
                        </div>
                    </li>
                </ul><a class="channel-group__footer" data-href="#page=topic&amp;type=fiction&amp;id=11321">查看更多</a></section>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'channel',
  data () {
    return {
      aData: [],
      bData: [],
      cData: [],
      dData: [],
      aInfo: {},
      bInfo: {},
      cInfo: {},
      dInfo: {},
      ad_setting_name: "",
      loading: true
    }
  },
  methods: {  	
  	book(id){
  		this.$router.push({ name: 'Book', params: { id: id }})
  	}
  },
  created: function () {
    var option = {
        params:{id: this.$route.params.id}
    };
   
    this.$http.jsonp(window.config.url + '/php/bookapi/channel.php', option).then(response => {
    	var arrData = [
    		response.body.items[0],
    		response.body.items[1],
    		response.body.items[2],
    		response.body.items[3]
    	];
    	

      this.ad_setting_name = response.body.ad_setting_name.substr(3);

      this.aData = arrData[0].data.data;
      this.bData = arrData[1].data.data;
      this.cData = arrData[2].data.data;
      this.dData = arrData[3].data.data;

      this.aInfo.ad_name = arrData[0].ad_name;
      this.bInfo.ad_name = arrData[1].ad_name;
      this.cInfo.ad_name = arrData[2].ad_name;
      this.dInfo.ad_name = arrData[3].ad_name;

      this.aInfo.ad_copy = arrData[0].ad_copy;
      this.bInfo.ad_copy = arrData[1].ad_copy;
      this.cInfo.ad_copy = arrData[2].ad_copy;
      this.dInfo.ad_copy = arrData[3].ad_copy;

      this.loading = false;
    }, response => {
      console.log('free list error');
    });  
        
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

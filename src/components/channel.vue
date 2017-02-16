<template>
<div>
    <div class="top">
        <a href="javascript:history.back()" class="top__back"></a><span class="top__title">{{ad_setting_name}}</span>
        <a href="#" class="header-home"></a>
    </div>
    <div class="top__bd" v-if="!loading">
        <div class="new-page channel-page" id="Tag__1651">
            <section class="channel-group main-card">
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
                <a class="channel-group__footer" data-href="#page=topic&amp;type=fiction&amp;id=11322">查看更多</a>
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
            <section class="channel-group main-card">
                <div class="channel-group__header">
                    <h2 class="channel-group__title channel-group__title_left">{{eInfo.ad_name}}</h2>
                    <p class="channel-group__desc">{{eInfo.ad_copy}}</p>
                </div>
                <ul class="book-list">
                    <li v-for="item in eData" @click="book(item.fiction_id)">
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
                </ul><a class="channel-group__footer" data-href="#page=topic&amp;type=fiction&amp;id=11287">查看更多</a></section>
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
      eData: [],
      aInfo: {},
      bInfo: {},
      cInfo: {},
      dInfo: {},
      eInfo: {},
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
      this.ad_setting_name = response.body.ad_setting_name.substr(3);
      this.aData = response.body.items[0].data.data;
      this.bData = response.body.items[1].data.data;
      this.cData = response.body.items[2].data.data;
      this.dData = response.body.items[3].data.data;
      this.eData = response.body.items[4].data.data;

      this.aInfo.ad_name = response.body.items[0].ad_name;
      this.bInfo.ad_name = response.body.items[1].ad_name;
      this.cInfo.ad_name = response.body.items[2].ad_name;
      this.dInfo.ad_name = response.body.items[3].ad_name;
      this.eInfo.ad_name = response.body.items[4].ad_name;

      this.aInfo.ad_copy = response.body.items[0].ad_copy;
      this.bInfo.ad_copy = response.body.items[1].ad_copy;
      this.cInfo.ad_copy = response.body.items[2].ad_copy;
      this.dInfo.ad_copy = response.body.items[3].ad_copy;
      this.eInfo.ad_copy = response.body.items[4].ad_copy;

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

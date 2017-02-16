<template>
<div >
  <div class="top">
    <a href="javascript:history.back()" class="top__back"></a><span class="top__title">目录</span>
    <a href="#" class="header-home"></a>
  </div>
  <div class="top__bd">
    <ul class="fiction-toc" @click="toReader">
      <li v-for="item in catalogData"  :class="['fiction-toc__item', item.free?'fiction-toc__item_free':'', (item.chapter_id==$route.params.chapter_id) ?'fiction-toc__item_cur':'']" >
        <p :data-id="item.chapter_id">{{item.title}}</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'catalog',
  data () {
    return {
      catalogData: [],
      searched: false,
      keyword: "",
      chapter_id: 0
    }
  },
  methods: {
  	toReader(event){
  		var el = event.target;
  		if(el.tagName.toUpperCase() == "P"){
  			let params = { id: this.$route.params.id ,chapter_id: el.getAttribute('data-id')};
      	this.$router.replace({ name: 'Reader', params: params});
  		}
  	}
  },
  created: function () {
  	this.chapter_id = this.$route.params.chapter_id;
    var option = {
      params:{
        id: this.$route.params.id
      }
    };
    this.$http.jsonp(window.config.url + '/php/bookapi/detail.php', option).then(response => {
      // var ret = JSON.parse(Base64.decode(response.body));
      // this.title = ret.t;
      // this.content = ret.p;
      this.catalogData = response.body.item.toc;
      setTimeout(function(){
      	var  cur = document.querySelector(".fiction-toc__item_cur");
      	if(cur != null){
      		cur.scrollIntoView()
      	}       	
      }, 500)
    }, response => {
      console.log('reader api error');
    }); 

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>